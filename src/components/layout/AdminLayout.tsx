import { Navigate, Outlet } from 'react-router-dom'
import { Sidebar } from '@/components/admin/Sidebar'
import { useAuth } from '@/hooks/useAuth'
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
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 lg:ml-16 xl:ml-64 transition-all duration-300">
        <Outlet />
      </main>
    </div>
  )
}
