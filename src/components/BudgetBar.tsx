import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { AlertCircle, Percent } from 'lucide-react';
import { Alert, AlertDescription } from './ui/alert';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { useState } from 'react';

interface BudgetBarProps {
  currentBudget: number;
  maxBudget: number;
  previewBudget?: number;
}

export function BudgetBar({ currentBudget, maxBudget, previewBudget }: BudgetBarProps) {
  const [showBudgetDetails, setShowBudgetDetails] = useState(false);
  const remaining = currentBudget;
  const isNegative = remaining < 0;
  const previewRemaining = previewBudget !== undefined ? previewBudget : remaining;
  const isPreviewNegative = previewRemaining < 0;
  
  // Calcular porcentaje para la barra (0-100, luego puede ser negativo)
  const percentage = Math.max(0, Math.min(100, (remaining / maxBudget) * 100));
  const previewPercentage = Math.max(0, Math.min(100, (previewRemaining / maxBudget) * 100));

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-sm text-muted-foreground">Presupuesto:</span>
            
            {/* Botón % para ver detalles */}
            <TooltipProvider delayDuration={0}>
              <Tooltip open={showBudgetDetails} onOpenChange={setShowBudgetDetails}>
                <TooltipTrigger asChild>
                  <button
                    className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 flex items-center justify-center hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400"
                    aria-label="Ver detalles del presupuesto"
                    onFocus={() => setShowBudgetDetails(true)}
                    onBlur={() => setShowBudgetDetails(false)}
                  >
                    <Percent className="w-3.5 h-3.5" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="max-w-xs">
                  <div className="space-y-2">
                    <p className="font-medium">Detalles del presupuesto</p>
                    <div className="text-xs space-y-1">
                      <div className="flex justify-between gap-4">
                        <span>Presupuesto inicial:</span>
                        <span className="font-medium">{maxBudget} pts</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span>Saldo restante:</span>
                        <span className={isNegative ? 'text-red-500 font-medium' : 'text-green-500 font-medium'}>
                          {remaining} pts
                        </span>
                      </div>
                      {previewBudget !== undefined && previewRemaining !== remaining && (
                        <div className="flex justify-between gap-4 pt-1 border-t border-border">
                          <span>Preview:</span>
                          <span className={isPreviewNegative ? 'text-red-500 font-medium' : 'text-green-500 font-medium'}>
                            {previewRemaining} pts
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          
          <div className="relative">
            <Progress 
              value={percentage} 
              className={`h-3 ${isNegative ? '[&>div]:bg-red-500 dark:[&>div]:bg-red-600' : '[&>div]:bg-green-500 dark:[&>div]:bg-green-600'}`}
            />
            {previewBudget !== undefined && previewRemaining !== remaining && (
              <div 
                className="absolute top-0 left-0 h-3 bg-yellow-400/50 dark:bg-yellow-500/50 rounded-full transition-all"
                style={{ width: `${previewPercentage}%` }}
              />
            )}
          </div>
          
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>0 pts</span>
            <span>{maxBudget} pts</span>
          </div>
        </div>
        
        <Badge variant={isNegative ? "destructive" : "secondary"} className="shrink-0">
          {maxBudget} pts inicial
        </Badge>
      </div>

      {isNegative && (
        <Alert variant="destructive" className="border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Advertencia: saldo negativo {Math.abs(remaining)} puntos. Revisa tu plan de trabajo.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}