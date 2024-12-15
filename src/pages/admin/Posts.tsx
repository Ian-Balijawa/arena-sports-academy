import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Plus, Pencil, Trash2, Search } from 'lucide-react'
import { api } from '@/services/api'
import { AdminPost } from '@/types/admin'
import { PostForm } from '@/components/admin/PostForm'
import { Skeleton } from '@/components/ui/skeleton'

export function Posts() {
  const [search, setSearch] = useState('')
  const [selectedPost, setSelectedPost] = useState<AdminPost | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const { data: posts = [], refetch, isLoading } = useQuery({
    queryKey: ['admin', 'posts'],
    queryFn: api.getAdminPosts,
  })

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.content.toLowerCase().includes(search.toLowerCase())
  )

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return

    try {
      await api.deletePost(id)
      toast.success('Post deleted successfully')
      refetch()
    } catch (_error) {
      console.error(_error)
      toast.error('Failed to delete post')
    }
  }

  if (isLoading) {
     return (
      <div className="space-y-6">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative w-[300px]">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search posts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setSelectedPost(null)}>
              <Plus className="mr-2 h-4 w-4" />
              New Post
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {selectedPost ? 'Edit Post' : 'Create New Post'}
              </DialogTitle>
            </DialogHeader>
            <PostForm
              post={selectedPost}
              onSuccess={() => {
                setIsDialogOpen(false)
                refetch()
              }}
            />
          </DialogContent>
        </Dialog>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPosts.map((post) => (
              <TableRow key={post.id}>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.category}</TableCell>
                <TableCell>
                  <span className={`capitalize ${
                    post.status === 'published' ? 'text-green-600' : 'text-yellow-600'
                  }`}>
                    {post.status}
                  </span>
                </TableCell>
                <TableCell>
                  {new Date(post.publishedAt || post.updatedAt).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        setSelectedPost(post)
                        setIsDialogOpen(true)
                      }}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(post.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}