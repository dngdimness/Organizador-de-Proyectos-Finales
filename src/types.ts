export interface Component {
  id: string;
  name: string;
  description: string;
  basePoints: number;
  categoryId: string;
  icon: string;
}

export interface Category {
  id: string;
  name: string;
  color: string;
  icon: string;
}

export interface ProjectItem {
  id: string;
  componentId: string;
  quantity: number;
  justification: string;
}

export interface Project {
  items: ProjectItem[];
  budget: number;
}

export interface PricingBreakdown {
  quantity: number;
  unitPrice: number;
  discount: number;
  total: number;
  breakdown: Array<{
    copy: number;
    price: number;
    discount: number;
  }>;
}

export interface ActionHistory {
  type: 'add' | 'remove' | 'update' | 'reset';
  timestamp: number;
  data: any;
}
