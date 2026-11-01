import {
  Sidebar,
  SidebarContent,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { TooltipProvider } from '@/components/ui/tooltip'


export function App() {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <Sidebar>
          <SidebarContent>

          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <header >
            <SidebarTrigger />
            <h1 >Task Manager</h1>
          </header>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  )
}
