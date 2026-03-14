import { useState } from 'react';
import { Component } from '../types';
import { Card } from './ui/card';
import * as Icons from 'lucide-react';
import { getDiscountExamples } from '../utils/pricing';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { Info, Percent } from 'lucide-react';

interface ComponentCardProps {
  component: Component;
  categoryColor: string;
  wouldCauseNegative?: boolean;
  isDragging?: boolean;
  currentBudget?: number;
}

export function ComponentCard({ 
  component, 
  categoryColor, 
  wouldCauseNegative, 
  isDragging,
  currentBudget 
}: ComponentCardProps) {
  const IconComponent = Icons[component.icon as keyof typeof Icons] || Icons.Circle;
  const [showInfo, setShowInfo] = useState(false);
  const [showDiscount, setShowDiscount] = useState(false);
  
  return (
    <Card 
      className={`
        p-4 cursor-grab active:cursor-grabbing transition-all hover:shadow-lg group
        ${isDragging ? 'opacity-50 scale-95' : ''}
        ${wouldCauseNegative ? 'ring-2 ring-red-400 dark:ring-red-600 shadow-red-200 dark:shadow-red-900' : ''}
      `}
      draggable
    >
      <div className="flex items-start gap-3">
        <div 
          className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
          style={{ backgroundColor: `${categoryColor}20`, color: categoryColor }}
        >
          <IconComponent className="w-5 h-5" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className="truncate">{component.name}</h3>
            
            {/* Hovers i y % */}
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
              <TooltipProvider delayDuration={0}>
                {/* Info tooltip */}
                <Tooltip open={showInfo} onOpenChange={setShowInfo}>
                  <TooltipTrigger asChild>
                    <button
                      className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                      aria-label="Ver información del componente"
                      onFocus={() => setShowInfo(true)}
                      onBlur={() => setShowInfo(false)}
                    >
                      <Info className="w-3.5 h-3.5" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="max-w-xs">
                    <div className="space-y-1">
                      <p className="font-medium">{component.name}</p>
                      <p className="text-xs">{component.description}</p>
                    </div>
                  </TooltipContent>
                </Tooltip>

                {/* Discount tooltip */}
                <Tooltip open={showDiscount} onOpenChange={setShowDiscount}>
                  <TooltipTrigger asChild>
                    <button
                      className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 flex items-center justify-center hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400"
                      aria-label="Ver descuentos por repetición"
                      onFocus={() => setShowDiscount(true)}
                      onBlur={() => setShowDiscount(false)}
                    >
                      <Percent className="w-3.5 h-3.5" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="max-w-sm">
                    <div className="space-y-2">
                      <p className="font-medium">Descuentos por repetición</p>
                      <div className="text-xs space-y-1">
                        <div className="flex justify-between gap-4">
                          <span>1ª copia:</span>
                          <span className="font-medium">{component.basePoints} pts</span>
                        </div>
                        <div className="flex justify-between gap-4">
                          <span>2ª copia (-20%):</span>
                          <span className="font-medium">{Math.floor(component.basePoints * 0.8)} pts</span>
                        </div>
                        <div className="flex justify-between gap-4">
                          <span>3ª copia (-30%):</span>
                          <span className="font-medium">{Math.floor(component.basePoints * 0.7)} pts</span>
                        </div>
                        <div className="flex justify-between gap-4">
                          <span>4ª copia (-40%):</span>
                          <span className="font-medium">{Math.floor(component.basePoints * 0.6)} pts</span>
                        </div>
                        <div className="flex justify-between gap-4">
                          <span>5+ copias (-50%):</span>
                          <span className="font-medium">{Math.floor(component.basePoints * 0.5)} pts</span>
                        </div>
                      </div>
                      {currentBudget !== undefined && (
                        <div className="pt-2 border-t border-border">
                          <div className="flex justify-between text-xs">
                            <span>Saldo actual:</span>
                            <span className={currentBudget < 0 ? 'text-red-500 font-medium' : 'text-green-500 font-medium'}>
                              {currentBudget} pts
                            </span>
                          </div>
                          <div className="flex justify-between text-xs mt-1">
                            <span>Después de añadir:</span>
                            <span className={currentBudget - component.basePoints < 0 ? 'text-red-500 font-medium' : 'text-green-500 font-medium'}>
                              {currentBudget - component.basePoints} pts
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>
      
      {wouldCauseNegative && (
        <div className="mt-2 text-xs text-red-600 dark:text-red-400">
          ⚠️ Provocará saldo negativo
        </div>
      )}
    </Card>
  );
}
