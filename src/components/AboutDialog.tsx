import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { ExternalLink } from 'lucide-react';

interface AboutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AboutDialog({ open, onOpenChange }: AboutDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Acerca de</DialogTitle>
          <DialogDescription>
            Organizador de Proyectos Finales
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">
              Herramienta para organizar y presupuestar proyectos finales de licenciatura en diseño.
            </p>
            <p className="text-sm text-muted-foreground">
              Sistema de puntos con presupuesto inicial de 100 puntos, descuentos por repetición y funcionalidades de exportación.
            </p>
          </div>
          
          <div className="border-t pt-4">
            <p className="text-sm font-medium mb-2">Diseñado por</p>
            <p className="text-sm mb-2">Nicolás Santangelo</p>
            <a
              href="https://nicosantangelo.ar/links/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              nicosantangelo.ar/links
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}