import { AppHeader } from '@/components/app-header'
import { AppSidebar } from '@/components/app-sidebar'
import { SidebarPlayground } from '@/components/sidebar-playground'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { TooltipProvider } from '@/components/ui/tooltip'
import { useSidebarOptions } from '@/hooks/use-sidebar-options'

export function App() {
  const { variant, setVariant, collapsible, setCollapsible, side, setSide } = useSidebarOptions()

  return (
    <TooltipProvider>
      <SidebarProvider key={`${side}-${variant}-${collapsible}`}>
        <AppSidebar variant={variant} collapsible={collapsible} side={side} />

        <SidebarInset>
          <AppHeader />
          <SidebarPlayground
            variant={variant}
            setVariant={setVariant}
            collapsible={collapsible}
            setCollapsible={setCollapsible}
            side={side}
            setSide={setSide}
          />
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  )
}
