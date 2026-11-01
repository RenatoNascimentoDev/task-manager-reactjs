import { useState } from 'react'
import {
  Bell,
  ChevronsUpDown,
  CircleHelp,
  Folder,
  Home,
  Inbox,
  LogOut,
  Plus,
  Search,
  Settings,
  Star,
  User,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from '@/components/ui/sidebar'

const OPTIONS = {
  variant: ['sidebar', 'floating', 'inset'],
  collapsible: ['offcanvas', 'icon', 'none'],
  side: ['left', 'right'],
}

const NAV_ITEMS = [
  { title: 'Home', icon: Home, isActive: true },
  { title: 'Inbox', icon: Inbox, badge: '12' },
  { title: 'Starred', icon: Star },
  { title: 'Settings', icon: Settings },
]

const PROJECTS = [
  { title: 'Website redesign', badge: '4', children: ['Landing page', 'Pricing', 'Blog'] },
  { title: 'Mobile app', badge: '9', children: ['Onboarding', 'Push notifications'] },
  { title: 'Marketing', children: ['Q3 campaign'] },
]

function OptionGroup({ label, name, value, onChange }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="w-24 text-sm font-medium text-muted-foreground">{label}</span>
      {OPTIONS[name].map((option) => (
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

function AppSidebar({ variant, collapsible, side }) {
  return (
    <Sidebar variant={variant} collapsible={collapsible} side={side}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Folder className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">Task Manager</span>
                <span className="truncate text-xs text-muted-foreground">Workspace</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarInput placeholder="Search tasks..." />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {NAV_ITEMS.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton isActive={item.isActive} tooltip={item.title}>
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                  {item.badge && <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupAction title="New project">
            <Plus />
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {PROJECTS.map((project) => (
                <SidebarMenuItem key={project.title}>
                  <SidebarMenuButton tooltip={project.title}>
                    <Folder />
                    <span>{project.title}</span>
                  </SidebarMenuButton>
                  {project.badge && <SidebarMenuBadge>{project.badge}</SidebarMenuBadge>}
                  <SidebarMenuSub>
                    {project.children.map((child) => (
                      <SidebarMenuSubItem key={child}>
                        <SidebarMenuSubButton href="#">
                          <span>{child}</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Loading</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuSkeleton showIcon />
              <SidebarMenuSkeleton showIcon />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-muted">
                <User className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">Renato</span>
                <span className="truncate text-xs text-muted-foreground">renato@example.com</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}

export function App() {
  const [variant, setVariant] = useState('sidebar')
  const [collapsible, setCollapsible] = useState('offcanvas')
  const [side, setSide] = useState('left')

  return (
    <SidebarProvider key={`${side}-${variant}-${collapsible}`}>
      <AppSidebar variant={variant} collapsible={collapsible} side={side} />

      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <h1 className="text-base font-semibold">Task Manager</h1>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Notifications">
              <Bell />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Help">
              <CircleHelp />
            </Button>
          </div>
        </header>

        <main className="flex flex-1 flex-col gap-6 p-6">
          <section className="space-y-4 rounded-xl border p-4">
            <div>
              <h2 className="font-semibold">Sidebar playground</h2>
              <p className="text-sm text-muted-foreground">
                Switch the options below to see each sidebar configuration. Changing an option
                resets the sidebar state.
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
                <kbd className="rounded border px-1.5 py-0.5 text-xs">B</kbd> or use the trigger in
                the header to toggle the sidebar.
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
      </SidebarInset>
    </SidebarProvider>
  )
}
