import { ProjectItem, Component, Category } from '../types';

// Constantes del sistema
const TOTAL_CATEGORIES = 9; // 8 base + 1 personalizada
const MIN_CATEGORIES_REQUIRED = 8;
const CATEGORY_VALUE = 12.5; // 100 / 8 = 12.5 puntos por categoría
const TOTAL_POINTS = 100;

/**
 * Calcula el puntaje total basado en categorías cubiertas
 * Cada categoría vale 12.5 puntos
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
  const coveredCategories = new Set<string>();

  // Identificar qué categorías tienen al menos un componente
  projectItems.forEach((item) => {
    const component = components.find((c) => c.id === item.componentId);
    if (component) {
      coveredCategories.add(component.categoryId);
    }
  });

  // Cada categoría cubierta vale 12.5 puntos
  const totalScore = coveredCategories.size * CATEGORY_VALUE;
  const coveragePercentage = (coveredCategories.size / MIN_CATEGORIES_REQUIRED) * 100;

  return {
    totalScore,
    coveredCategories,
    categoryValue: CATEGORY_VALUE,
    coveragePercentage,
  };
}

/**
 * Verifica si el proyecto cumple con los requisitos mínimos para exportar
 * Debe tener al menos 8 categorías cubiertas (puede ser 8 base o 7 base + 1 personalizada)
 */
export function validateProjectForExport(
  projectItems: ProjectItem[],
  components: Component[],
  categories: Category[]
): {
  isValid: boolean;
  missingCategories: Category[];
  hasCustomComponent: boolean;
  coveredCount: number;
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

  // Debe tener mínimo 8 categorías cubiertas
  const isValid = coveredCategories.size >= MIN_CATEGORIES_REQUIRED;

  return {
    isValid,
    missingCategories,
    hasCustomComponent,
    coveredCount: coveredCategories.size,
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

export { MIN_CATEGORIES_REQUIRED, CATEGORY_VALUE, TOTAL_POINTS };
