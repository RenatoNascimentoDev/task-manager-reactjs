import { LogOut } from 'lucide-react'

import { OptionGroup } from '@/components/option-group'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function SidebarPlayground({
  variant,
  setVariant,
  collapsible,
  setCollapsible,
  side,
  setSide,
}) {
  return (
    <main className="flex flex-1 flex-col gap-6 p-6">
      <section className="space-y-4 rounded-xl border p-4">
        <div>
          <h2 className="font-semibold">Sidebar playground</h2>
          <p className="text-sm text-muted-foreground">
            Switch the options below to see each sidebar configuration. Changing an option resets
            the sidebar state.
          </p>
        </div>
        <OptionGroup label="Variant" name="variant" value={variant} onChange={setVariant} />
        <OptionGroup
          label="Collapsible"
          name="collapsible"
          value={collapsible}
          onChange={setCollapsible}
        />
        <OptionGroup label="Side" name="side" value={side} onChange={setSide} />
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border p-4">
          <h3 className="mb-2 font-medium">Keyboard and toggle</h3>
          <p className="text-sm text-muted-foreground">
            Press <kbd className="rounded border px-1.5 py-0.5 text-xs">Ctrl</kbd> +{' '}
            <kbd className="rounded border px-1.5 py-0.5 text-xs">B</kbd> or use the trigger in the
            header to toggle the sidebar.
          </p>
        </div>
        <div className="rounded-xl border p-4">
          <h3 className="mb-2 font-medium">Search input</h3>
          <Input placeholder="Filter the page..." />
        </div>
      </section>

      <section className="rounded-xl border p-4">
        <h3 className="mb-2 font-medium">Footer actions</h3>
        <Button variant="destructive" size="sm">
          <LogOut />
          Sign out
        </Button>
      </section>
    </main>
  )
}
