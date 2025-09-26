import {
  UtensilsCrossed,
  Car,
  Home,
  Heart,
  Gamepad2,
  ShoppingBag,
  GraduationCap,
  Monitor,
  Wrench,
  Shield,
  Receipt,
  Plane,
  ShoppingCart,
  Gift,
  TrendingUp,
  PiggyBank,
  PawPrint,
  Sparkles,
  Baby,
  MoreHorizontal,
  type LucideIcon
} from 'lucide-react';

type CategoryConfig = {
  label: string;
  icon: LucideIcon;
  bgColor: string;
  textColor: string;
};

export const categoryConfig: Record<string, CategoryConfig> = {
  food: {
    label: 'Alimentação',
    icon: UtensilsCrossed,
    bgColor: 'bg-orange-100',
    textColor: 'text-orange-700'
  },
  transport: {
    label: 'Transporte',
    icon: Car,
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-700'
  },
  housing: {
    label: 'Moradia',
    icon: Home,
    bgColor: 'bg-green-100',
    textColor: 'text-green-700'
  },
  health: {
    label: 'Saúde',
    icon: Heart,
    bgColor: 'bg-red-100',
    textColor: 'text-red-700'
  },
  entertainment: {
    label: 'Entretenimento',
    icon: Gamepad2,
    bgColor: 'bg-purple-100',
    textColor: 'text-purple-700'
  },
  shopping: {
    label: 'Compras',
    icon: ShoppingBag,
    bgColor: 'bg-pink-100',
    textColor: 'text-pink-700'
  },
  education: {
    label: 'Educação',
    icon: GraduationCap,
    bgColor: 'bg-indigo-100',
    textColor: 'text-indigo-700'
  },
  subscriptions: {
    label: 'Assinaturas',
    icon: Monitor,
    bgColor: 'bg-teal-100',
    textColor: 'text-teal-700'
  },
  utilities: {
    label: 'Utilidades',
    icon: Wrench,
    bgColor: 'bg-yellow-100',
    textColor: 'text-yellow-700'
  },
  insurance: {
    label: 'Seguro',
    icon: Shield,
    bgColor: 'bg-cyan-100',
    textColor: 'text-cyan-700'
  },
  taxes: {
    label: 'Impostos',
    icon: Receipt,
    bgColor: 'bg-gray-100',
    textColor: 'text-gray-700'
  },
  travel: {
    label: 'Viagem',
    icon: Plane,
    bgColor: 'bg-sky-100',
    textColor: 'text-sky-700'
  },
  groceries: {
    label: 'Mercado',
    icon: ShoppingCart,
    bgColor: 'bg-lime-100',
    textColor: 'text-lime-700'
  },
  gifts: {
    label: 'Presentes',
    icon: Gift,
    bgColor: 'bg-rose-100',
    textColor: 'text-rose-700'
  },
  investments: {
    label: 'Investimentos',
    icon: TrendingUp,
    bgColor: 'bg-emerald-100',
    textColor: 'text-emerald-700'
  },
  savings: {
    label: 'Poupança',
    icon: PiggyBank,
    bgColor: 'bg-green-100',
    textColor: 'text-green-700'
  },
  pets: {
    label: 'Pets',
    icon: PawPrint,
    bgColor: 'bg-amber-100',
    textColor: 'text-amber-700'
  },
  'personal care': {
    label: 'Cuidados Pessoais',
    icon: Sparkles,
    bgColor: 'bg-violet-100',
    textColor: 'text-violet-700'
  },
  children: {
    label: 'Crianças',
    icon: Baby,
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-700'
  },
  other: {
    label: 'Outros',
    icon: MoreHorizontal,
    bgColor: 'bg-slate-100',
    textColor: 'text-slate-700'
  }
};

export function getCategoryConfig(category: string): CategoryConfig {
  return categoryConfig[category] || categoryConfig.other;
}