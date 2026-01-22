interface QuantityVisualProps {
  quantity: number;
  color?: string;
  maxVisible?: number;
}

export function QuantityVisual({ quantity, color = '#8B5CF6', maxVisible = 10 }: QuantityVisualProps) {
  const visibleChips = Math.min(quantity, maxVisible);
  const hasMore = quantity > maxVisible;

  return (
    <div className="flex items-center gap-1 flex-wrap">
      <span className="text-sm font-medium">{quantity}×</span>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: visibleChips }).map((_, i) => (
          <div
            key={i}
            className="w-1.5 h-3 rounded-sm"
            style={{ backgroundColor: color }}
            title={`Unidad ${i + 1}`}
          />
        ))}
        {hasMore && (
          <span className="text-xs text-muted-foreground ml-1">
            +{quantity - maxVisible}
          </span>
        )}
      </div>
    </div>
  );
}
