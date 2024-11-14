
import { AppSidebar } from '@/components/app-sidebar';
import { GridBackground } from '@/components/GridBackgorund';
import { SidebarTrigger } from '@/components/ui/sidebar';
import React from 'react'

function Main() {
  return (
    <>
      <AppSidebar />
      <SidebarTrigger/>
      <GridBackground/>
    </>
  )
}

export default Main;