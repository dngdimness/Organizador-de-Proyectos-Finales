import { motion, AnimatePresence } from 'motion/react';
import { Package, CheckCircle2 } from 'lucide-react';

interface MobileDropAreaProps {
  isVisible: boolean;
  isActive: boolean;
  onDrop: (e: React.DragEvent) => void;
}

export function MobileDropArea({ isVisible, isActive, onDrop }: MobileDropAreaProps) {
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className={`
            fixed bottom-0 left-0 right-0 z-50
            h-[30vh] pointer-events-auto
            bg-gradient-to-t from-purple-100 via-purple-50 to-transparent
            dark:from-purple-900/60 dark:via-purple-900/30 dark:to-transparent
            border-t-4 transition-colors duration-200
            ${isActive 
              ? 'border-purple-500 bg-gradient-to-t from-purple-200 via-purple-100 to-transparent dark:from-purple-800/80 dark:via-purple-800/50 dark:to-transparent' 
              : 'border-purple-300 dark:border-purple-700'
            }
          `}
          onDragOver={handleDragOver}
          onDrop={onDrop}
        >
          <div className="h-full flex flex-col items-center justify-center gap-4 px-4">
            <motion.div
              animate={{ 
                scale: isActive ? 1.1 : 1,
                rotate: isActive ? [0, -5, 5, 0] : 0
              }}
              transition={{ duration: 0.3 }}
            >
              {isActive ? (
                <div className="w-20 h-20 bg-green-500 dark:bg-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="w-12 h-12 text-white" />
                </div>
              ) : (
                <div className="w-20 h-20 bg-purple-500 dark:bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <Package className="w-12 h-12 text-white" />
                </div>
              )}
            </motion.div>
            
            <motion.div
              animate={{ opacity: isActive ? 1 : 0.9 }}
              className="text-center"
            >
              <p className="text-lg font-semibold text-purple-900 dark:text-purple-100">
                {isActive ? '¡Suelta para añadir!' : 'Suelta aquí para añadir al proyecto'}
              </p>
              <p className="text-sm text-purple-700 dark:text-purple-300 mt-1">
                {isActive ? 'El componente se añadirá a tu bandeja' : 'Arrastra hasta esta zona'}
              </p>
            </motion.div>

            {/* Indicador visual de estado */}
            <motion.div
              className="flex gap-2"
              animate={{ opacity: isActive ? 1 : 0.6 }}
            >
              <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-green-500' : 'bg-purple-400'} transition-colors`} />
              <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-green-500' : 'bg-purple-400'} transition-colors`} />
              <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-green-500' : 'bg-purple-400'} transition-colors`} />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
