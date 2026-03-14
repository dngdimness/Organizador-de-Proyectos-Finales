import { ProjectItem, Component, Category } from '../types';

/**
 * Calcula el puntaje total basado en categorías cubiertas
 * Cada categoría vale 100 / total_categorías
 * Solo cuenta si tiene al menos un componente
 */
export function calculateCategoryScore(
  projectItems: ProjectItem[],
  components: Component[],
  categories: Category[]
): {
  totalScore: number;
  coveredCategories: Set<string>;
  categoryValue: number;
  coveragePercentage: number;
} {
  const categoryValue = 100 / categories.length;
  const coveredCategories = new Set<string>();

  // Identificar qué categorías tienen al menos un componente
  projectItems.forEach((item) => {
    const component = components.find((c) => c.id === item.componentId);
    if (component) {
      coveredCategories.add(component.categoryId);
    }
  });

  const totalScore = coveredCategories.size * categoryValue;
  const coveragePercentage = (coveredCategories.size / categories.length) * 100;

  return {
    totalScore,
    coveredCategories,
    categoryValue,
    coveragePercentage,
  };
}

/**
 * Verifica si el proyecto cumple con los requisitos mínimos para exportar
 * Debe tener al menos un componente por categoría
 * Excepción: puede faltar una categoría si usa componente personalizado
 */
export function validateProjectForExport(
  projectItems: ProjectItem[],
  components: Component[],
  categories: Category[]
): {
  isValid: boolean;
  missingCategories: Category[];
  hasCustomComponent: boolean;
} {
  const coveredCategories = new Set<string>();
  let hasCustomComponent = false;

  projectItems.forEach((item) => {
    const component = components.find((c) => c.id === item.componentId);
    if (component) {
      coveredCategories.add(component.categoryId);
      if (component.categoryId === 'custom') {
        hasCustomComponent = true;
      }
    }
  });

  const missingCategories = categories.filter(
    (cat) => !coveredCategories.has(cat.id)
  );

  // Si usa componente personalizado, puede faltar una categoría
  const isValid = hasCustomComponent
    ? missingCategories.length <= 1
    : missingCategories.length === 0;

  return {
    isValid,
    missingCategories,
    hasCustomComponent,
  };
}

/**
 * Valida que todas las fundamentaciones cumplan los requisitos
 * - Mínimo 20 caracteres
 * - Máximo 300 caracteres
 * - No puede estar vacío
 */
export function validateJustifications(
  projectItems: ProjectItem[]
): {
  isValid: boolean;
  invalidItems: Array<{ id: string; reason: string }>;
} {
  const invalidItems: Array<{ id: string; reason: string }> = [];

  projectItems.forEach((item) => {
    const justification = item.justification?.trim() || '';

    if (!justification) {
      invalidItems.push({
        id: item.id,
        reason: 'La fundamentación no puede estar vacía',
      });
    } else if (justification.length < 20) {
      invalidItems.push({
        id: item.id,
        reason: 'La fundamentación debe tener al menos 20 caracteres',
      });
    } else if (justification.length > 300) {
      invalidItems.push({
        id: item.id,
        reason: 'La fundamentación no puede exceder 300 caracteres',
      });
    }
  });

  return {
    isValid: invalidItems.length === 0,
    invalidItems,
  };
}
