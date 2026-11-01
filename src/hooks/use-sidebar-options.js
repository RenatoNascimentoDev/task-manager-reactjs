import { useState } from 'react'

export function useSidebarOptions() {
  const [variant, setVariant] = useState('sidebar')
  const [collapsible, setCollapsible] = useState('offcanvas')
  const [side, setSide] = useState('left')

  return { variant, setVariant, collapsible, setCollapsible, side, setSide }
}
