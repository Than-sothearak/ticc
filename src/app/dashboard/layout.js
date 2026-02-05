import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'
import { AppSidebar } from './(components)/app-sidebar'
import { connectDb } from '@/lib/connectDb'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { Admin } from '@/models/Admin'

const DashboardLayout = async ({ children }) => {
  const session = await getServerSession(authOptions)
  await connectDb()
  if (!session) {
    return (
      <div>Access denied</div>
    )
  }
  const isAdmin = await Admin.findOne({ email: session.user.email })
  if (isAdmin) {
    return (

      <SidebarProvider>
        <AppSidebar session={session} />
        <SidebarTrigger />
        {children}
      </SidebarProvider>

    )
  } return (
    <div>Access denied</div>
  )

}

export default DashboardLayout