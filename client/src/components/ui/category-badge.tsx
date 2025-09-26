import { getCategoryConfig } from '../../lib/categoryUtils';

interface CategoryBadgeProps {
  category: string;
  showLabel?: boolean;
}

export function CategoryBadge({ category, showLabel = true }: CategoryBadgeProps) {
  const config = getCategoryConfig(category);
  const Icon = config.icon;

  return (
    <div className="flex items-center gap-3">
      <div className={`flex items-center justify-center w-9 h-9 rounded-full ${config.bgColor} shadow-sm border border-white/20`}>
        <Icon className={`w-4 h-4 ${config.textColor}`} />
      </div>
      {showLabel && (
        <span className="text-sm font-medium text-gray-800">
          {config.label}
        </span>
      )}
    </div>
  );
}