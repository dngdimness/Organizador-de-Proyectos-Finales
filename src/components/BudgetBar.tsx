import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { AlertCircle, Percent, CheckCircle } from 'lucide-react';
import { Alert, AlertDescription } from './ui/alert';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { useState, forwardRef } from 'react';

interface BudgetBarProps {
  totalScore: number;
  coveredCategoriesCount: number;
  totalCategoriesCount: number;
  categoryValue: number;
}

const BudgetButton = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  (props, ref) => (
    <button
      ref={ref}
      {...props}
      className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 flex items-center justify-center hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400"
      aria-label="Ver detalles del puntaje"
    >
      <Percent className="w-3.5 h-3.5" />
    </button>
  )
);

BudgetButton.displayName = 'BudgetButton';

export function BudgetBar({ totalScore, coveredCategoriesCount, totalCategoriesCount, categoryValue }: BudgetBarProps) {
  const [showBudgetDetails, setShowBudgetDetails] = useState(false);
  const percentage = totalScore;
  const isComplete = coveredCategoriesCount === totalCategoriesCount;

  return (
    <div className="space-y-3">
      {/* Instrucciones visibles */}
      <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
        <p className="text-sm text-blue-900 dark:text-blue-100">
          💡 <strong>Instrucción:</strong> Elegí como mínimo un componente de cada categoría. Podés agregar más componentes si lo necesitás.
        </p>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-sm text-muted-foreground">Puntaje del proyecto:</span>
            
            {/* Botón % para ver detalles */}
            <TooltipProvider delayDuration={0}>
              <Tooltip open={showBudgetDetails} onOpenChange={setShowBudgetDetails}>
                <TooltipTrigger asChild>
                  <BudgetButton
                    onFocus={() => setShowBudgetDetails(true)}
                    onBlur={() => setShowBudgetDetails(false)}
                  />
                </TooltipTrigger>
                <TooltipContent side="bottom" className="max-w-xs">
                  <div className="space-y-2">
                    <p className="font-medium">Detalles del puntaje</p>
                    <div className="text-xs space-y-1">
                      <div className="flex justify-between gap-4">
                        <span>Puntaje total:</span>
                        <span className="font-medium">100 pts</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span>Valor por categoría:</span>
                        <span className="font-medium">{categoryValue.toFixed(2)} pts</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span>Puntaje actual:</span>
                        <span className={isComplete ? 'text-green-500 font-medium' : 'text-yellow-500 font-medium'}>
                          {totalScore.toFixed(2)} pts
                        </span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span>Categorías cubiertas:</span>
                        <span className="font-medium">{coveredCategoriesCount} / {totalCategoriesCount}</span>
                      </div>
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* Indicador de categorías completas */}
            <Badge variant={isComplete ? "default" : "secondary"} className="gap-1">
              {isComplete && <CheckCircle className="w-3 h-3" />}
              {coveredCategoriesCount} / {totalCategoriesCount} categorías
            </Badge>
          </div>
          
          <div className="relative">
            <Progress 
              value={percentage} 
              className={`h-3 ${isComplete ? '[&>div]:bg-green-500 dark:[&>div]:bg-green-600' : '[&>div]:bg-yellow-500 dark:[&>div]:bg-yellow-600'}`}
            />
          </div>
          
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>0 pts</span>
            <span className="font-medium">{totalScore.toFixed(1)} pts</span>
            <span>100 pts</span>
          </div>
        </div>
        
        <Badge variant={isComplete ? "default" : "secondary"} className="shrink-0">
          {totalScore.toFixed(1)} / 100 pts
        </Badge>
      </div>

      {!isComplete && (
        <Alert className="border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-950">
          <AlertCircle className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
          <AlertDescription className="text-yellow-800 dark:text-yellow-200">
            Te faltan {totalCategoriesCount - coveredCategoriesCount} {totalCategoriesCount - coveredCategoriesCount === 1 ? 'categoría' : 'categorías'} por cubrir para alcanzar los 100 puntos.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
