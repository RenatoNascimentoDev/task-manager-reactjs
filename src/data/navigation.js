import { Home, Inbox, Settings, Star } from 'lucide-react'

export const NAV_ITEMS = [
  { title: 'Home', icon: Home, isActive: true },
  { title: 'Inbox', icon: Inbox, badge: '12' },
  { title: 'Starred', icon: Star },
  { title: 'Settings', icon: Settings },
]

export const PROJECTS = [
  { title: 'Website redesign', badge: '4', children: ['Landing page', 'Pricing', 'Blog'] },
  { title: 'Mobile app', badge: '9', children: ['Onboarding', 'Push notifications'] },
  { title: 'Marketing', children: ['Q3 campaign'] },
]
