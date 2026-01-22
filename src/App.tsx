import { useState, useEffect } from 'react';
import { ProjectItem as ProjectItemType, Component } from './types';
import { categories, components } from './data/components';
import { calculatePricing } from './utils/pricing';
import { BudgetBar } from './components/BudgetBar';
import { CategorySection } from './components/CategorySection';
import { ProjectItem } from './components/ProjectItem';
import { ExportHTMLDialog } from './components/ExportHTMLDialog';
import { ThemeToggle } from './components/ThemeToggle';
import { MobileDropArea } from './components/MobileDropArea';
import { Button } from './components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { ScrollArea } from './components/ui/scroll-area';
import { Separator } from './components/ui/separator';
import { 
  Save, 
  FolderOpen, 
  FileDown, 
  RotateCcw, 
  Undo, 
  Redo,
  Package,
  Sparkles
} from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { Toaster } from './components/ui/sonner';

const INITIAL_BUDGET = 100;
const STORAGE_KEY = 'design-project';

export default function App() {
  const [projectItems, setProjectItems] = useState<ProjectItemType[]>([]);
  const [history, setHistory] = useState<ProjectItemType[][]>([[]]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [draggingComponent, setDraggingComponent] = useState<Component | null>(null);
  const [previewBudget, setPreviewBudget] = useState<number | undefined>(undefined);
  const [showExportDialog, setShowExportDialog] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const [showMobileDropArea, setShowMobileDropArea] = useState(false);
  const [isMobileDropActive, setIsMobileDropActive] = useState(false);

  // Calcular presupuesto actual
  const totalPoints = projectItems.reduce((acc, item) => {
    const component = components.find((c) => c.id === item.componentId);
    if (!component) return acc;
    return acc + calculatePricing(component.basePoints, item.quantity).total;
  }, 0);
  
  const remainingBudget = INITIAL_BUDGET - totalPoints;

  // Cargar proyecto del localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const data = JSON.parse(saved);
        setProjectItems(data.items || []);
        setHistory([data.items || []]);
        toast.success('Proyecto cargado desde el almacenamiento local');
      } catch (error) {
        console.error('Error loading project:', error);
      }
    }
  }, []);

  // Guardar en localStorage cuando cambia
  const saveToLocalStorage = () => {
    const data = { items: projectItems, budget: INITIAL_BUDGET };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    toast.success('Proyecto guardado con éxito');
  };

  // Agregar a historial
  const addToHistory = (newItems: ProjectItemType[]) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newItems);
    if (newHistory.length > 11) newHistory.shift(); // Mantener solo últimas 10 + estado actual
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  // Undo
  const undo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setProjectItems(history[historyIndex - 1]);
      toast.info('Acción deshecha');
    }
  };

  // Redo
  const redo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setProjectItems(history[historyIndex + 1]);
      toast.info('Acción rehecha');
    }
  };

  // Drag handlers
  const handleDragStart = (component: Component) => {
    setDraggingComponent(component);
    const newBudget = remainingBudget - component.basePoints;
    setPreviewBudget(newBudget);
    
    // Detectar si es móvil y mostrar drop area
    const isMobile = window.innerWidth < 1024; // lg breakpoint
    if (isMobile) {
      setShowMobileDropArea(true);
    }
  };

  const handleDragEnd = () => {
    setDraggingComponent(null);
    setPreviewBudget(undefined);
    setIsDragOver(false);
    setShowMobileDropArea(false);
    setIsMobileDropActive(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };
  
  // Desktop drop handler
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const componentId = e.dataTransfer.getData('componentId');
    const component = components.find((c) => c.id === componentId);
    
    if (!component) return;

    // Verificar si ya existe
    const existingItem = projectItems.find((item) => item.componentId === componentId);
    
    let newItems: ProjectItemType[];
    if (existingItem) {
      // Incrementar cantidad
      newItems = projectItems.map((item) =>
        item.componentId === componentId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      toast.success(`Cantidad de "${component.name}" incrementada`);
    } else {
      // Agregar nuevo item
      const newItem: ProjectItemType = {
        id: `${componentId}-${Date.now()}`,
        componentId,
        quantity: 1,
        justification: ''
      };
      newItems = [...projectItems, newItem];
      toast.success(`"${component.name}" añadido al proyecto`);
    }

    setProjectItems(newItems);
    addToHistory(newItems);
    setDraggingComponent(null);
    setPreviewBudget(undefined);
  };
  
  // Mobile drop area handlers
  const handleMobileDropAreaDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsMobileDropActive(true);
  };
  
  const handleMobileDropAreaDragLeave = () => {
    setIsMobileDropActive(false);
  };
  
  const handleMobileDropAreaDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsMobileDropActive(false);
    setShowMobileDropArea(false);
    
    const componentId = e.dataTransfer.getData('componentId');
    const component = components.find((c) => c.id === componentId);
    
    if (!component) return;

    // Verificar si ya existe
    const existingItem = projectItems.find((item) => item.componentId === componentId);
    
    let newItems: ProjectItemType[];
    if (existingItem) {
      // Incrementar cantidad
      newItems = projectItems.map((item) =>
        item.componentId === componentId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      toast.success(`Cantidad de "${component.name}" incrementada`);
    } else {
      // Agregar nuevo item
      const newItem: ProjectItemType = {
        id: `${componentId}-${Date.now()}`,
        componentId,
        quantity: 1,
        justification: ''
      };
      newItems = [...projectItems, newItem];
      toast.success(`"${component.name}" añadido al proyecto`);
    }

    setProjectItems(newItems);
    addToHistory(newItems);
    setDraggingComponent(null);
    setPreviewBudget(undefined);
  };

  // Update item
  const handleUpdateItem = (id: string, updates: Partial<ProjectItemType>) => {
    const newItems = projectItems.map((item) =>
      item.id === id ? { ...item, ...updates } : item
    );
    setProjectItems(newItems);
    addToHistory(newItems);
  };

  // Remove item
  const handleRemoveItem = (id: string) => {
    const item = projectItems.find((i) => i.id === id);
    const component = item ? components.find((c) => c.id === item.componentId) : null;
    
    const newItems = projectItems.filter((item) => item.id !== id);
    setProjectItems(newItems);
    addToHistory(newItems);
    
    if (component) {
      toast.success(`"${component.name}" eliminado`);
    }
  };

  // Reset
  const handleReset = () => {
    if (confirm('¿Estás seguro de que quieres reiniciar tu selección? Esta acción no se puede deshacer.')) {
      setProjectItems([]);
      addToHistory([]);
      toast.success('Selección reiniciada');
    }
  };

  // Export/Import JSON
  const handleExportJSON = () => {
    const data = { items: projectItems, budget: INITIAL_BUDGET };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `proyecto-${Date.now()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast.success('JSON exportado correctamente');
  };

  const handleImportJSON = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target?.result as string);
          setProjectItems(data.items || []);
          addToHistory(data.items || []);
          toast.success('JSON importado correctamente');
        } catch (error) {
          toast.error('Error al importar JSON');
        }
      };
      reader.readAsText(file);
    };
    input.click();
  };

  const wouldCauseNegative = (points: number) => {
    return remainingBudget - points < 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Toaster position="top-center" />
      
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b dark:border-gray-700 sticky top-0 z-10">
        <div className="max-w-screen-2xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl">Organizador de Proyectos Finales</h1>
                <p className="text-sm text-muted-foreground">Licenciatura en Diseño</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 flex-wrap">
              <ThemeToggle />
              <Separator orientation="vertical" className="h-8 hidden sm:block" />
              <Button variant="outline" size="sm" onClick={undo} disabled={historyIndex <= 0}>
                <Undo className="w-4 h-4 mr-2" />
                Deshacer
              </Button>
              <Button variant="outline" size="sm" onClick={redo} disabled={historyIndex >= history.length - 1}>
                <Redo className="w-4 h-4 mr-2" />
                Rehacer
              </Button>
              <Separator orientation="vertical" className="h-8 hidden sm:block" />
              <Button variant="outline" size="sm" onClick={saveToLocalStorage}>
                <Save className="w-4 h-4 mr-2" />
                Guardar
              </Button>
              <Button variant="outline" size="sm" onClick={handleImportJSON}>
                <FolderOpen className="w-4 h-4 mr-2" />
                Cargar JSON
              </Button>
              <Button variant="outline" size="sm" onClick={handleExportJSON}>
                <FileDown className="w-4 h-4 mr-2" />
                Exportar JSON
              </Button>
            </div>
          </div>

          <div className="mt-4">
            <BudgetBar 
              currentBudget={remainingBudget} 
              maxBudget={INITIAL_BUDGET}
              previewBudget={previewBudget}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-screen-2xl mx-auto px-4 py-6">
        {/* Desktop: 2 columns */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-6">
          {/* Left: Components */}
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 sticky top-32">
              <div className="flex items-center gap-2 mb-4">
                <Package className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h2>Componentes disponibles</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Arrastra para añadir a tu bandeja →
              </p>
              
              <ScrollArea className="h-[calc(100vh-320px)]">
                <div className="space-y-3 pr-4">
                  {categories.map((category) => {
                    const categoryComponents = components.filter(
                      (c) => c.categoryId === category.id
                    );
                    return (
                      <CategorySection
                        key={category.id}
                        category={category}
                        components={categoryComponents}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                        wouldCauseNegative={wouldCauseNegative}
                        currentBudget={remainingBudget}
                      />
                    );
                  })}
                </div>
              </ScrollArea>
            </div>
          </div>

          {/* Right: Project */}
          <div>
            <div 
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 min-h-[calc(100vh-180px)] transition-colors ${
                isDragOver ? 'ring-2 ring-purple-400 bg-purple-50 dark:bg-purple-900/20' : ''
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="flex items-center justify-between mb-4">
                <h2>Mi proyecto</h2>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={handleReset}>
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Reiniciar
                  </Button>
                  <Button size="sm" onClick={() => setShowExportDialog(true)} disabled={projectItems.length === 0}>
                    <FileDown className="w-4 h-4 mr-2" />
                    Exportar a HTML
                  </Button>
                </div>
              </div>

              <ScrollArea className="h-[calc(100vh-280px)]">
                {projectItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-64 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mb-4">
                      <Package className="w-8 h-8 text-purple-400" />
                    </div>
                    <p className="text-muted-foreground">
                      Tu bandeja está vacía
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Arrastra componentes desde la izquierda para empezar
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3 pr-4">
                    {projectItems.map((item) => {
                      const component = components.find((c) => c.id === item.componentId);
                      const category = categories.find((cat) => cat.id === component?.categoryId);
                      if (!component || !category) return null;
                      
                      return (
                        <ProjectItem
                          key={item.id}
                          item={item}
                          component={component}
                          categoryColor={category.color}
                          onUpdate={handleUpdateItem}
                          onRemove={handleRemoveItem}
                        />
                      );
                    })}
                  </div>
                )}
              </ScrollArea>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet: Tabs */}
        <div className="lg:hidden">
          <Tabs defaultValue="components" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="components">
                Componentes ({components.length})
              </TabsTrigger>
              <TabsTrigger value="project">
                Mi proyecto ({projectItems.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="components" className="mt-0">
              <div className="bg-surface rounded-lg shadow-sm p-4 dark:border dark:border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  Arrastra para añadir a tu bandeja
                </p>
                <div className="space-y-3">
                  {categories.map((category) => {
                    const categoryComponents = components.filter(
                      (c) => c.categoryId === category.id
                    );
                    return (
                      <CategorySection
                        key={category.id}
                        category={category}
                        components={categoryComponents}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                        wouldCauseNegative={wouldCauseNegative}
                        currentBudget={remainingBudget}
                      />
                    );
                  })}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="project" className="mt-0">
              <div 
                className={`bg-surface rounded-lg shadow-sm p-4 min-h-[500px] dark:border dark:border-border transition-colors ${
                  isDragOver ? 'ring-2 ring-purple-400 bg-purple-50 dark:bg-purple-900/20' : ''
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h2>Mi proyecto</h2>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={handleReset}>
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Reiniciar
                    </Button>
                    <Button size="sm" onClick={() => setShowExportDialog(true)} disabled={projectItems.length === 0}>
                      <FileDown className="w-4 h-4 mr-2" />
                      HTML
                    </Button>
                  </div>
                </div>

                {projectItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-64 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mb-4">
                      <Package className="w-8 h-8 text-purple-400" />
                    </div>
                    <p className="text-muted-foreground">
                      Tu bandeja está vacía
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Arrastra componentes aquí para empezar
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {projectItems.map((item) => {
                      const component = components.find((c) => c.id === item.componentId);
                      const category = categories.find((cat) => cat.id === component?.categoryId);
                      if (!component || !category) return null;
                      
                      return (
                        <ProjectItem
                          key={item.id}
                          item={item}
                          component={component}
                          categoryColor={category.color}
                          onUpdate={handleUpdateItem}
                          onRemove={handleRemoveItem}
                        />
                      );
                    })}
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <ExportHTMLDialog
        open={showExportDialog}
        onOpenChange={setShowExportDialog}
        projectItems={projectItems}
        totalPoints={totalPoints}
        remainingBudget={remainingBudget}
      />
      
      {/* Mobile Drop Area */}
      <div 
        onDragOver={handleMobileDropAreaDragOver}
        onDragLeave={handleMobileDropAreaDragLeave}
      >
        <MobileDropArea
          isVisible={showMobileDropArea}
          isActive={isMobileDropActive}
          onDrop={handleMobileDropAreaDrop}
        />
      </div>
    </div>
  );
}