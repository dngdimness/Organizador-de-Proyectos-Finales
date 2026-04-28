import { ProjectItem, Component, Category } from '../types';

/**
 * Genera una descripción automática del proyecto basada en
 * las categorías, componentes y fundamentaciones
 */
export function generateProjectDescription(
  projectItems: ProjectItem[],
  components: Component[],
  categories: Category[]
): string {
  if (projectItems.length === 0) {
    return 'Este proyecto aún no tiene componentes definidos.';
  }

  // Agrupar por categorías
  const categoriesUsed = new Map<string, { category: Category; components: Array<{ component: Component; item: ProjectItem }> }>();

  projectItems.forEach((item) => {
    const component = components.find((c) => c.id === item.componentId);
    if (!component) return;

    const category = categories.find((cat) => cat.id === component.categoryId);
    if (!category) return;

    if (!categoriesUsed.has(category.id)) {
      categoriesUsed.set(category.id, { category, components: [] });
    }

    categoriesUsed.get(category.id)!.components.push({ component, item });
  });

  // Construir la descripción
  const intro = `Este proyecto final de Licenciatura en Diseño integra ${categoriesUsed.size} ${categoriesUsed.size === 1 ? 'área' : 'áreas'} de trabajo estratégica${categoriesUsed.size === 1 ? '' : 's'}, conformando un sistema de diseño integral.`;

  const categoryDescriptions: string[] = [];

  categoriesUsed.forEach(({ category, components: comps }) => {
    const componentNames = comps.map((c) => 
      c.item.customName || c.component.name
    ).join(', ').replace(/, ([^,]*)$/, ' y $1');

    let categoryDesc = `En **${category.name}**, el proyecto desarrolla ${componentNames}`;

    // Agregar una fundamentación representativa si existe
    const firstJustification = comps[0]?.item.justification?.trim();
    if (firstJustification && firstJustification.length >= 20) {
      categoryDesc += `, fundamentado en: "${firstJustification}"`;
    }

    categoryDesc += '.';
    categoryDescriptions.push(categoryDesc);
  });

  const body = categoryDescriptions.join(' ');

  const conclusion = `Este enfoque multidisciplinario permite construir una propuesta coherente que aborda el diseño desde múltiples dimensiones, garantizando una solución integral y articulada.`;

  return `${intro}\n\n${body}\n\n${conclusion}`;
}
