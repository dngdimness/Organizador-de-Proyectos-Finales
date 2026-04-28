import { useState } from 'react';
import { Component, ProjectItem as ProjectItemType } from '../types';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import * as Icons from 'lucide-react';
import { Trash2, Pencil, Check, X } from 'lucide-react';

interface ProjectItemProps {
  item: ProjectItemType;
  component: Component;
  categoryColor: string;
  onUpdate: (id: string, updates: Partial<ProjectItemType>) => void;
  onRemove: (id: string) => void;
  hasValidationError?: boolean;
}

export function ProjectItem({ item, component, categoryColor, onUpdate, onRemove, hasValidationError }: ProjectItemProps) {
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState(item.customName || component.name);
  
  const IconComponent = Icons[component.icon as keyof typeof Icons] || Icons.Circle;
  const isCustomComponent = component.id === 'custom-component';
  const displayName = item.customName || component.name;

  const justificationLength = item.justification?.trim().length || 0;
  const isJustificationValid = justificationLength >= 20 && justificationLength <= 300;

  const handleSaveName = () => {
    if (tempName.trim()) {
      onUpdate(item.id, { customName: tempName.trim() });
      setIsEditingName(false);
    }
  };

  const handleCancelEdit = () => {
    setTempName(item.customName || component.name);
    setIsEditingName(false);
  };

  return (
    <Card className={`p-4 dark:bg-card dark:border-border transition-all ${hasValidationError ? 'ring-2 ring-red-500 bg-red-50 dark:bg-red-950/20' : ''}`}>
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
              {isEditingName ? (
                <div className="flex items-center gap-2">
                  <Input
                    value={tempName}
                    onChange={(e) => setTempName(e.target.value)}
                    className="h-8"
                    autoFocus
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSaveName();
                      if (e.key === 'Escape') handleCancelEdit();
                    }}
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleSaveName}
                    className="h-8 w-8 p-0"
                  >
                    <Check className="w-4 h-4 text-green-600" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleCancelEdit}
                    className="h-8 w-8 p-0"
                  >
                    <X className="w-4 h-4 text-red-600" />
                  </Button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <h3 className="truncate">{displayName}</h3>
                  {isCustomComponent && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsEditingName(true)}
                      className="h-6 w-6 p-0"
                    >
                      <Pencil className="w-3 h-3" />
                    </Button>
                  )}
                </div>
              )}
              <p className="text-xs text-muted-foreground mt-1">{component.description}</p>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onRemove(item.id)}
              className="text-destructive hover:text-destructive hover:bg-destructive/10"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>

          {/* Justificación */}
          <div className="space-y-1">
            <label className="text-sm text-muted-foreground">
              Fundamentación: <span className="text-red-500">*</span>
            </label>
            <Textarea
              placeholder="Describe por qué este componente es importante para tu proyecto... (mínimo 20 caracteres)"
              value={item.justification}
              onChange={(e) => onUpdate(item.id, { justification: e.target.value })}
              className={`min-h-[80px] resize-none ${!isJustificationValid && justificationLength > 0 ? 'border-yellow-500 focus-visible:ring-yellow-500' : ''} ${hasValidationError ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
              maxLength={300}
            />
            <div className="flex justify-between items-center text-xs">
              <span className={`${isJustificationValid ? 'text-green-600 dark:text-green-400' : justificationLength > 0 ? 'text-yellow-600 dark:text-yellow-400' : 'text-muted-foreground'}`}>
                {justificationLength < 20 && justificationLength > 0 && `Faltan ${20 - justificationLength} caracteres`}
                {justificationLength >= 20 && justificationLength <= 300 && '✓ Fundamentación válida'}
                {justificationLength > 300 && `Excede ${justificationLength - 300} caracteres`}
                {justificationLength === 0 && 'Mínimo 20 caracteres'}
              </span>
              <span className="text-muted-foreground">
                {justificationLength}/300
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
