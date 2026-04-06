import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Alert, AlertDescription } from './ui/alert';
import { ProjectItem, Component } from '../types';
import { FileDown, AlertCircle } from 'lucide-react';
import { categories, components } from '../data/components';
import { validateProjectForExport, validateJustifications } from '../utils/category-scoring';
import { generateProjectDescription } from '../utils/project-description';

interface ExportHTMLDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  projectItems: ProjectItem[];
  totalScore: number;
  coveredCategoriesCount: number;
  onValidationError?: (invalidItemIds: string[]) => void;
}

export function ExportHTMLDialog({ 
  open, 
  onOpenChange, 
  projectItems, 
  totalScore,
  coveredCategoriesCount,
  onValidationError
}: ExportHTMLDialogProps) {
  const [studentName, setStudentName] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const handleExport = () => {
    // Validar categorías
    const categoryValidation = validateProjectForExport(projectItems, components, categories);
    
    // Validar fundamentaciones
    const justificationValidation = validateJustifications(projectItems);

    const errors: string[] = [];

    if (!categoryValidation.isValid) {
      const missingCount = 8 - categoryValidation.coveredCount;
      const missingNames = categoryValidation.missingCategories.map(c => c.name).join(', ');
      errors.push(`Debes cubrir al menos 8 categorías. Te faltan ${missingCount} ${missingCount === 1 ? 'categoría' : 'categorías'}. Faltantes: ${missingNames}`);
    }

    if (!justificationValidation.isValid) {
      errors.push(`Hay ${justificationValidation.invalidItems.length} componente(s) sin fundamentación válida (mínimo 20 caracteres, máximo 300).`);
      
      // Notificar al padre para resaltar items inválidos
      if (onValidationError) {
        onValidationError(justificationValidation.invalidItems.map(i => i.id));
      }
    }

    if (errors.length > 0) {
      setValidationErrors(errors);
      return;
    }

    // Si todo está bien, generar y exportar
    setValidationErrors([]);
    const content = generateHTMLContent(
      studentName,
      date,
      projectItems,
      totalScore,
      coveredCategoriesCount
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
          {validationErrors.length > 0 && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <div className="space-y-1">
                  {validationErrors.map((error, i) => (
                    <div key={i}>{error}</div>
                  ))}
                </div>
              </AlertDescription>
            </Alert>
          )}

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
              <span>{projectItems.length}</span>
            </div>
            <div className="flex justify-between">
              <span>Puntaje obtenido:</span>
              <span>{totalScore.toFixed(1)} / 100 pts</span>
            </div>
            <div className="flex justify-between">
              <span>Categorías cubiertas:</span>
              <span>{coveredCategoriesCount} / {categories.length}</span>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => {
            setValidationErrors([]);
            onOpenChange(false);
          }}>
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
  totalScore: number,
  coveredCategoriesCount: number
): string {
  // Generar descripción automática
  const projectDescription = generateProjectDescription(projectItems, components, categories);

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

  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/svg+xml" href="/uch-color.svg" />
  <title>Proyecto Final - ${studentName}</title>
  <style>
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
      
      .category-section {
        page-break-inside: avoid;
        break-inside: avoid;
      }
      
      .pdf-button {
        display: none;
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
    
    h1 { 
      color: #000000; 
      margin-bottom: 12px;
      font-size: 28px;
      line-height: 1.3;
    }
    h2 { 
      color: #222222; 
      margin-top: 40px; 
      margin-bottom: 20px;
      border-bottom: 2px solid #333333;
      padding-bottom: 12px;
      font-size: 22px;
    }
    
    .header { 
      border-bottom: 3px solid #000000; 
      padding-bottom: 24px; 
      margin-bottom: 32px; 
    }
    
    .meta { 
      color: #333333;
      font-size: 15px;
      margin-top: 10px;
      line-height: 1.7;
    }
    
    .meta div {
      margin: 6px 0;
    }
    
    .summary { 
      background: #f5f5f5;
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

    .description {
      background: #f9f9f9;
      padding: 24px;
      border-radius: 8px;
      margin: 24px 0;
      border-left: 4px solid #6B46C1;
      line-height: 1.8;
    }

    .description p {
      margin-bottom: 16px;
      color: #333;
      font-size: 15px;
    }

    .description p:last-child {
      margin-bottom: 0;
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
      font-size: 18px;
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
      align-items: start; 
      margin-bottom: 14px; 
    }
    
    .item-title { 
      font-weight: 600; 
      color: #000000;
      font-size: 16px;
    }

    .item-description {
      font-size: 13px;
      color: #666;
      margin-top: 4px;
    }
    
    .justification { 
      font-size: 14px;
      color: #444444;
      margin-top: 12px;
      padding: 12px;
      background: #ffffff;
      border-radius: 4px;
      border-left: 3px solid #999999;
      line-height: 1.6;
    }
    
    .docente-validacion {
      margin-top: 16px;
      padding-top: 12px;
      border-top: 1px solid #ddd;
    }

    .docente-validacion label {
      display: block;
      font-weight: 600;
      font-size: 13px;
      margin-bottom: 8px;
      color: #333;
    }

    .firmas {
      display: grid;
      grid-template-columns: repeat(5, auto);
      gap: 8px;
      align-items: center;
    }

    .firmas div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .firmas span {
      font-size: 11px;
      font-weight: 600;
      color: #666;
      text-align: center;
      margin-bottom: 4px;
    }

    .firma-box {
      width: 100%;
      height: 50px;
      border: 1px solid #000;
      background: #fff;
    }
    
    .footer {
      margin-top: 60px; 
      padding-top: 24px; 
      border-top: 2px solid #dddddd; 
      text-align: center; 
      color: #666666; 
      font-size: 13px;
    }
    
    .pdf-button {
      position: fixed;
      top: 20px;
      right: 20px;
      background: #6B46C1;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      transition: all 0.2s;
      z-index: 1000;
    }
    
    .pdf-button:hover {
      background: #5a3ba0;
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    }
    
    .pdf-button:active {
      transform: translateY(0);
    }
    
    @media print {
      body { 
        margin: 0; 
        padding: 20px; 
        font-size: 11pt;
      }
      
      h1 { font-size: 20pt; }
      h2 { font-size: 16pt; }
      
      .summary, .description {
        background: #f9f9f9;
        border: 1px solid #999;
      }
      
      .item {
        background: #fff;
        border: 1px solid #999;
      }
    }
  </style>
</head>
<body>
  <button class="pdf-button" onclick="window.print()">📥 Descargar PDF</button>
  
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
        <span>Puntaje total:</span>
        <strong>${totalScore.toFixed(1)} / 100 pts</strong>
      </div>
      <div class="summary-item">
        <span>Categorías cubiertas:</span>
        <strong>${coveredCategoriesCount} / ${categories.length}</strong>
      </div>
      <div class="summary-item">
        <span>Componentes totales:</span>
        <strong>${projectItems.length}</strong>
      </div>
    </div>
  </div>

  <h2>Descripción del Proyecto</h2>
  <div class="description">
    ${projectDescription.split('\n\n').map(paragraph => `<p>${paragraph}</p>`).join('')}
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
          const displayName = item.customName || component.name;
          return `
            <div class="item">
              <div class="item-header">
                <div>
                  <div class="item-title">${displayName}</div>
                  <div class="item-description">${component.description}</div>
                </div>
              </div>
              ${item.justification ? `
                <div class="justification">
                  <strong>Fundamentación:</strong><br>
                  ${item.justification}
                </div>
              ` : ''}
              <div class="docente-validacion">
                <label>Seguimiento docente:</label>
                <div class="firmas">
                  <div><span>1</span><div class="firma-box"></div></div>
                  <div><span>2</span><div class="firma-box"></div></div>
                  <div><span>3</span><div class="firma-box"></div></div>
                  <div><span>4</span><div class="firma-box"></div></div>
                  <div><span>5</span><div class="firma-box"></div></div>
                  <div><span>6</span><div class="firma-box"></div></div>
                  <div><span>7</span><div class="firma-box"></div></div>
                  <div><span>8</span><div class="firma-box"></div></div>
                  <div><span>9</span><div class="firma-box"></div></div>
                  <div><span>10</span><div class="firma-box"></div></div>
                </div>
              </div>
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