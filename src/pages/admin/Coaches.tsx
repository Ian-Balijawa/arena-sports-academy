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
import { Coach } from '@/types'
import { CoachForm } from '@/components/admin/CoachForm'

export function Coaches() {
    const [search, setSearch] = useState('')
    const [selectedCoach, setSelectedCoach] = useState<Coach | null>(null)
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const { data: coaches = [], refetch } = useQuery({
        queryKey: ['admin', 'coaches'],
        queryFn: api.getAdminCoaches,
    })

    const filteredCoaches = coaches.filter(coach =>
        coach.name.toLowerCase().includes(search.toLowerCase()) ||
        coach.role.toLowerCase().includes(search.toLowerCase()) ||
        coach.bio.toLowerCase().includes(search.toLowerCase())
    )

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this coach?')) return

        try {
            await api.deleteCoach(id)
            toast.success('Coach deleted successfully')
            refetch()
        } catch (_error) {
            console.error(_error)
            toast.error('Failed to delete coach')
        }
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="relative w-[300px]">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            placeholder="Search coaches..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="pl-9"
                        />
                    </div>
                </div>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                        <Button onClick={() => setSelectedCoach(null)}>
                            <Plus className="mr-2 h-4 w-4" />
                            New Coach
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                        <DialogHeader>
                            <DialogTitle>
                                {selectedCoach ? 'Edit Coach' : 'Add New Coach'}
                            </DialogTitle>
                        </DialogHeader>
                        <CoachForm
                            coach={selectedCoach}
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
                            <TableHead>Name</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Specialties</TableHead>
                            <TableHead className="w-[100px]">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredCoaches.map((coach) => (
                            <TableRow key={coach.id}>
                                <TableCell className="font-medium">{coach.name}</TableCell>
                                <TableCell>{coach.role}</TableCell>
                                <TableCell>
                                    <div className="flex flex-wrap gap-1">
                                        {coach.specialties.map((specialty) => (
                                            <span
                                                key={specialty}
                                                className="rounded-full bg-primary/10 px-2 py-1 text-xs"
                                            >
                                                {specialty}
                                            </span>
                                        ))}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => {
                                                setSelectedCoach(coach)
                                                setIsDialogOpen(true)
                                            }}
                                        >
                                            <Pencil className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => handleDelete(coach.id)}
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
