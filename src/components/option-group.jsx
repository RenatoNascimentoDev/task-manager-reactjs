import { Button } from '@/components/ui/button'
import { SIDEBAR_OPTIONS } from '@/data/sidebar-options'

export function OptionGroup({ label, name, value, onChange }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="w-24 text-sm font-medium text-muted-foreground">{label}</span>
      {SIDEBAR_OPTIONS[name].map((option) => (
        <Button
          key={option}
          size="sm"
          variant={value === option ? 'default' : 'outline'}
          onClick={() => onChange(option)}
        >
          {option}
        </Button>
      ))}
    </div>
  )
}
