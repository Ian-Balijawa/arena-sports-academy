// import { Navigate, Outlet } from 'react-router-dom'
// import { Sidebar } from '@/components/admin/Sidebar'
// import { useAuth } from '@/hooks/useAuth'
// import { Skeleton } from '@/components/ui/skeleton'

// export function AdminLayout() {
//   const { user, isLoading } = useAuth()

//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <Skeleton className="h-10 w-full" />
//       </div>
//     )
//   }

//   if (!user) {
//     return <Navigate to="/admin/login" replace />
//   }

//   return (
//     <div className="flex min-h-screen">
//       <Sidebar />
//       <main className="flex-1 p-6 lg:ml-16 xl:ml-64 transition-all duration-300">
//         <Outlet />
//       </main>
//     </div>
//   )
// }





import { Navigate, Outlet } from "react-router-dom"

import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { useAuth } from "@/hooks/useAuth"
import { Skeleton } from '@/components/ui/skeleton'

export function AdminLayout() {

 const { user, isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Skeleton className="h-10 w-full" />
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/admin/login" replace />
  }
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <main className="container-fluid mx-4 py-6">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
