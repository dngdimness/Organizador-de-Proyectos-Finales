import { Category, Component } from '../types';
import { ComponentCard } from './ComponentCard';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import * as Icons from 'lucide-react';
import { Badge } from './ui/badge';

interface CategorySectionProps {
  category: Category;
  components: Component[];
  onDragStart: (component: Component) => void;
  onDragEnd: () => void;
  wouldCauseNegative: (points: number) => boolean;
  currentBudget: number;
}

export function CategorySection({ 
  category, 
  components, 
  onDragStart, 
  onDragEnd,
  wouldCauseNegative,
  currentBudget
}: CategorySectionProps) {
  const IconComponent = Icons[category.icon as keyof typeof Icons] || Icons.Circle;

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={category.id} className="border rounded-lg overflow-hidden dark:border-border">
        <AccordionTrigger 
          className="px-4 py-3 hover:no-underline hover:bg-muted/50 dark:hover:bg-muted/30"
          style={{ borderLeft: `4px solid ${category.color}` }}
          aria-label={`Abrir categoría ${category.name}`}
        >
          <div className="flex items-center gap-3 flex-1">
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: `${category.color}20`, color: category.color }}
            >
              <IconComponent className="w-4 h-4" />
            </div>
            <span className="flex-1 text-left">{category.name}</span>
            <Badge variant="outline" className="dark:border-border">{components.length}</Badge>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-4 pb-4">
          <div className="space-y-2 mt-2">
            {components.map((component) => (
              <div
                key={component.id}
                draggable
                onDragStart={(e) => {
                  e.dataTransfer.effectAllowed = 'copy';
                  e.dataTransfer.setData('componentId', component.id);
                  onDragStart(component);
                }}
                onDragEnd={onDragEnd}
              >
                <ComponentCard
                  component={component}
                  categoryColor={category.color}
                  wouldCauseNegative={wouldCauseNegative(component.basePoints)}
                  currentBudget={currentBudget}
                />
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}