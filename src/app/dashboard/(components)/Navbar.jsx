import { SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'
import NavBreadcrumb from './NavBreadcrumb'

const Navbar = () => {
  return (
    <div className='w-full border-b h-11 flex items-center gap-4'> 
     <SidebarTrigger className=""/>
     <NavBreadcrumb className/>
     </div>
  )
}

export default Navbar