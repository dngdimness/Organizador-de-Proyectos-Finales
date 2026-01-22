import { useState } from 'react';
import { Component, ProjectItem as ProjectItemType } from '../types';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import * as Icons from 'lucide-react';
import { Trash2, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react';
import { calculatePricing } from '../utils/pricing';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { QuantityVisual } from './QuantityVisual';

interface ProjectItemProps {
  item: ProjectItemType;
  component: Component;
  categoryColor: string;
  onUpdate: (id: string, updates: Partial<ProjectItemType>) => void;
  onRemove: (id: string) => void;
}

export function ProjectItem({ item, component, categoryColor, onUpdate, onRemove }: ProjectItemProps) {
  const [showBreakdown, setShowBreakdown] = useState(false);
  const IconComponent = Icons[component.icon as keyof typeof Icons] || Icons.Circle;
  const pricing = calculatePricing(component.basePoints, item.quantity);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      onUpdate(item.id, { quantity: newQuantity });
    }
  };

  return (
    <Card className="p-4 dark:bg-card dark:border-border">
      <div className="flex items-start gap-3">
        <div 
          className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
          style={{ backgroundColor: `${categoryColor}20`, color: categoryColor }}
        >
          <IconComponent className="w-5 h-5" />
        </div>
        
        <div className="flex-1 min-w-0 space-y-3">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              <h3 className="truncate">{component.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <QuantityVisual quantity={item.quantity} color={categoryColor} />
              </div>
            </div>
            
            <div className="flex items-center gap-2 shrink-0">
              <Badge variant="secondary" className="dark:bg-secondary dark:text-secondary-foreground">
                {pricing.total} pts
              </Badge>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onRemove(item.id)}
                className="text-destructive hover:text-destructive hover:bg-destructive/10"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Cantidad */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground shrink-0">Cantidad:</span>
            <div className="flex items-center gap-1">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleQuantityChange(item.quantity - 1)}
                disabled={item.quantity <= 1}
              >
                <Minus className="w-3 h-3" />
              </Button>
              <Input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                className="w-16 text-center h-8"
              />
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleQuantityChange(item.quantity + 1)}
              >
                <Plus className="w-3 h-3" />
              </Button>
            </div>
          </div>

          {/* Desglose colapsable */}
          {item.quantity > 1 && (
            <Collapsible open={showBreakdown} onOpenChange={setShowBreakdown}>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="w-full justify-between">
                  <span className="text-sm">Ver desglose de costes</span>
                  {showBreakdown ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2">
                <div className="bg-muted/50 dark:bg-muted rounded-lg p-3 space-y-1 text-sm">
                  {pricing.breakdown.map((b) => (
                    <div key={b.copy} className="flex justify-between">
                      <span className="text-muted-foreground">
                        Copia #{b.copy} {b.discount > 0 && `(-${b.discount}%)`}
                      </span>
                      <span>{b.price} pts</span>
                    </div>
                  ))}
                  <div className="flex justify-between pt-2 border-t border-border">
                    <span>Total:</span>
                    <span>{pricing.total} pts</span>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          )}

          {/* Justificación */}
          <div className="space-y-1">
            <label className="text-sm text-muted-foreground">Justificación:</label>
            <Textarea
              placeholder="Describe por qué este componente es importante para tu proyecto..."
              value={item.justification}
              onChange={(e) => onUpdate(item.id, { justification: e.target.value })}
              className="min-h-[60px] resize-none"
              maxLength={200}
            />
            <div className="text-xs text-muted-foreground text-right">
              {item.justification.length}/200
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}