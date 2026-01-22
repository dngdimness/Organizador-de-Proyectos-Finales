import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { ProjectItem, Component } from '../types';
import { calculatePricing } from '../utils/pricing';
import { FileDown } from 'lucide-react';
import { categories, components } from '../data/components';

interface ExportHTMLDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  projectItems: ProjectItem[];
  totalPoints: number;
  remainingBudget: number;
}

export function ExportHTMLDialog({ 
  open, 
  onOpenChange, 
  projectItems, 
  totalPoints,
  remainingBudget 
}: ExportHTMLDialogProps) {
  const [studentName, setStudentName] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const handleExport = () => {
    // Generar contenido del HTML
    const content = generateHTMLContent(
      studentName,
      date,
      projectItems,
      totalPoints,
      remainingBudget
    );

    // Crear blob y descargar
    const blob = new Blob([content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `proyecto-final-${studentName.toLowerCase().replace(/\s+/g, '-') || 'estudiante'}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    // Cerrar dialog
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Exportar proyecto a HTML</DialogTitle>
          <DialogDescription>Completa los detalles para exportar tu proyecto.</DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="student-name">Nombre del estudiante</Label>
            <Input
              id="student-name"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="Tu nombre completo"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="date">Fecha</Label>
            <Input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="bg-muted/50 rounded-lg p-3 text-sm space-y-1">
            <div className="flex justify-between">
              <span>Total de componentes:</span>
              <span>{projectItems.reduce((acc, item) => acc + item.quantity, 0)}</span>
            </div>
            <div className="flex justify-between">
              <span>Puntos utilizados:</span>
              <span>{totalPoints}</span>
            </div>
            <div className="flex justify-between">
              <span>Presupuesto restante:</span>
              <span className={remainingBudget < 0 ? 'text-red-600' : 'text-green-600'}>
                {remainingBudget} pts
              </span>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancelar
          </Button>
          <Button onClick={handleExport} disabled={!studentName}>
            <FileDown className="w-4 h-4 mr-2" />
            Exportar a HTML
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function generateHTMLContent(
  studentName: string,
  date: string,
  projectItems: ProjectItem[],
  totalPoints: number,
  remainingBudget: number
): string {
  // Agrupar items por categoría
  const itemsByCategory: Record<string, { component: Component; item: ProjectItem }[]> = {};
  
  projectItems.forEach((item) => {
    const component = components.find((c) => c.id === item.componentId);
    if (!component) return;
    
    if (!itemsByCategory[component.categoryId]) {
      itemsByCategory[component.categoryId] = [];
    }
    itemsByCategory[component.categoryId].push({ component, item });
  });

  const categoryCounts = Object.entries(itemsByCategory).map(([categoryId, items]) => {
    const category = categories.find((c) => c.id === categoryId);
    const total = items.reduce((acc, { item, component }) => {
      return acc + calculatePricing(component.basePoints, item.quantity).total;
    }, 0);
    
    return {
      category: category?.name || 'Sin categoría',
      color: category?.color || '#666',
      total
    };
  });

  // Función helper para generar chips visuales de cantidad
  const generateQuantityChips = (quantity: number, color: string): string => {
    const maxVisible = 10;
    const visibleChips = Math.min(quantity, maxVisible);
    const hasMore = quantity > maxVisible;
    
    let html = '<div style="display: flex; align-items: center; gap: 4px; flex-wrap: wrap;">';
    html += `<span style="font-weight: 500; margin-right: 4px;">${quantity}×</span>`;
    html += '<div style="display: flex; gap: 2px;">';
    
    for (let i = 0; i < visibleChips; i++) {
      html += `<div style="width: 6px; height: 12px; background-color: ${color}; border-radius: 2px;"></div>`;
    }
    
    if (hasMore) {
      html += `<span style="font-size: 12px; color: #666; margin-left: 4px;">+${quantity - maxVisible}</span>`;
    }
    
    html += '</div></div>';
    return html;
  };

  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Proyecto Final - ${studentName}</title>
  <style>
    /* Reset y configuración base optimizada para impresión */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    @media print {
      * {
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      max-width: 900px;
      margin: 40px auto;
      padding: 40px;
      background: #ffffff;
      color: #1a1a1a;
      line-height: 1.6;
    }
    
    /* Tipografías optimizadas para impresión (min 10pt) */
    h1 { 
      color: #000000; 
      margin-bottom: 12px;
      font-size: 28px; /* ~21pt */
      line-height: 1.3;
    }
    h2 { 
      color: #222222; 
      margin-top: 40px; 
      margin-bottom: 20px;
      border-bottom: 2px solid #333333; /* Contraste 4.5:1+ */
      padding-bottom: 12px;
      font-size: 22px; /* ~16.5pt */
    }
    
    .header { 
      border-bottom: 3px solid #000000; 
      padding-bottom: 24px; 
      margin-bottom: 32px; 
    }
    
    .meta { 
      color: #333333; /* Contraste WCAG AAA (7:1+) */
      font-size: 15px; /* ~11pt */
      margin-top: 10px;
      line-height: 1.7;
    }
    
    .meta div {
      margin: 6px 0;
    }
    
    .summary { 
      background: #f5f5f5; /* Sutil para impresión */
      padding: 24px; 
      border-radius: 8px; 
      margin: 24px 0;
      border: 1px solid #cccccc;
    }
    
    .summary-grid { 
      display: grid; 
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
      gap: 16px; 
    }
    
    .summary-item { 
      display: flex; 
      justify-content: space-between; 
      padding: 10px 0;
      border-bottom: 1px solid #dddddd;
    }
    
    .summary-item:last-child {
      border-bottom: none;
    }
    
    .category-section { 
      margin: 32px 0;
      page-break-inside: avoid;
    }
    
    .category-title { 
      padding: 14px 18px; 
      border-radius: 6px; 
      margin-bottom: 18px;
      font-weight: 600;
      font-size: 18px; /* ~13.5pt */
      border: 1px solid;
    }
    
    .item { 
      border: 1px solid #d0d0d0; 
      padding: 18px; 
      margin: 14px 0; 
      border-radius: 6px;
      background: #fafafa;
      page-break-inside: avoid;
    }
    
    .item-header { 
      display: flex; 
      justify-content: space-between; 
      align-items: center; 
      margin-bottom: 14px; 
    }
    
    .item-title { 
      font-weight: 600; 
      color: #000000;
      font-size: 16px; /* ~12pt */
    }
    
    .justification { 
      font-size: 14px; /* ~10.5pt - mínimo legible */
      color: #444444; /* Contraste 7:1+ */
      font-style: italic; 
      margin-top: 12px;
      padding: 12px;
      background: #ffffff;
      border-radius: 4px;
      border-left: 3px solid #999999;
      line-height: 1.6;
    }
    
    /* Gráfico con labels arriba */
    .chart { 
      margin: 32px 0; 
    }
    
    .bar-container {
      margin: 20px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    /* Label arriba */
    .bar-label-top {
      font-size: 14px; /* ~10.5pt */
      font-weight: 600;
      color: #000000;
      margin-bottom: 8px;
      text-align: center;
      max-width: 90%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    /* Barra */
    .bar { 
      height: 36px; 
      border-radius: 4px; 
      display: flex; 
      align-items: center; 
      justify-content: center;
      min-width: 80px;
      max-width: 100%;
      border: 1px solid rgba(0,0,0,0.15);
    }
    
    /* Valor debajo con color de barra */
    .bar-value-below {
      font-size: 14px; /* ~10.5pt */
      font-weight: 700;
      margin-top: 6px;
      text-align: center;
    }
    
    .negative { 
      color: #cc0000; /* Contraste seguro */
      font-weight: 700; 
    }
    
    .positive { 
      color: #006600; /* Contraste seguro */
      font-weight: 700; 
    }
    
    .footer {
      margin-top: 60px; 
      padding-top: 24px; 
      border-top: 2px solid #dddddd; 
      text-align: center; 
      color: #666666; 
      font-size: 13px; /* ~10pt */
    }
    
    /* Optimización para impresión */
    @media print {
      body { 
        margin: 0; 
        padding: 20px; 
        font-size: 11pt; /* Base para impresión */
      }
      
      h1 { font-size: 20pt; }
      h2 { font-size: 16pt; }
      
      .summary {
        background: #f9f9f9;
        border: 1px solid #999;
      }
      
      .item {
        background: #fff;
        border: 1px solid #999;
      }
      
      .bar-container {
        page-break-inside: avoid;
      }
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>Proyecto Final de Licenciatura en Diseño</h1>
    <div class="meta">
      <div><strong>Estudiante:</strong> ${studentName}</div>
      <div><strong>Materia:</strong> Proyecto final</div>
      <div><strong>Fecha:</strong> ${new Date(date).toLocaleDateString('es-ES', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })}</div>
    </div>
  </div>

  <div class="summary">
    <h2 style="margin-top: 0; border: none; padding: 0;">Resumen del Proyecto</h2>
    <div class="summary-grid">
      <div class="summary-item">
        <span>Presupuesto inicial:</span>
        <strong>100 pts</strong>
      </div>
      <div class="summary-item">
        <span>Total utilizado:</span>
        <strong>${totalPoints} pts</strong>
      </div>
      <div class="summary-item">
        <span>Saldo restante:</span>
        <strong class="${remainingBudget < 0 ? 'negative' : 'positive'}">
          ${remainingBudget} pts
        </strong>
      </div>
      <div class="summary-item">
        <span>Componentes totales:</span>
        <strong>${projectItems.reduce((acc, item) => acc + item.quantity, 0)}</strong>
      </div>
    </div>
  </div>

  <h2>Distribución por Categoría</h2>
  <div class="chart">
    ${categoryCounts.map(({ category, color, total }) => {
      const percentage = totalPoints > 0 ? (total / totalPoints) * 100 : 0;
      const barWidth = Math.max(percentage, 15);
      
      return `
        <div class="bar-container">
          <div class="bar-label-top" title="${category}">
            ${category}
          </div>
          <div class="bar" style="background-color: ${color}; width: ${barWidth}%;">
          </div>
          <div class="bar-value-below" style="color: ${color};">
            ${total} pts (${percentage.toFixed(1)}%)
          </div>
        </div>
      `;
    }).join('')}
  </div>

  <h2>Componentes Seleccionados</h2>
  ${Object.entries(itemsByCategory).map(([categoryId, items]) => {
    const category = categories.find((c) => c.id === categoryId);
    return `
      <div class="category-section">
        <div class="category-title" style="background-color: ${category?.color}15; color: ${category?.color}; border-color: ${category?.color};">
          ${category?.name || 'Sin categoría'}
        </div>
        ${items.map(({ component, item }) => {
          return `
            <div class="item">
              <div class="item-header">
                <div>
                  <div class="item-title">${component.name}</div>
                  <div style="margin-top: 10px;">
                    ${generateQuantityChips(item.quantity, category?.color || '#666')}
                  </div>
                </div>
              </div>
              ${item.justification ? `
                <div class="justification">
                  ${item.justification}
                </div>
              ` : ''}
            </div>
          `;
        }).join('')}
      </div>
    `;
  }).join('')}

  <div class="footer">
    Generado el ${new Date().toLocaleString('es-ES')}<br>
    <small>Documento optimizado para impresión (WCAG AA+ contrast ratios)</small>
  </div>
</body>
</html>
  `.trim();
}