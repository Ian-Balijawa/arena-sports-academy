import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Lock, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navItems = [
	{
		href: "/",
		label: "Home",
		isLogo: true,
	},
	{ href: "/about", label: "About" },
	{ href: "/programs", label: "Programs" },
	{ href: "/coaches", label: "Coaches" },
	{ href: "/facilities", label: "Facilities" },
	{ href: "/registration", label: "Registration" },
	{ href: "/news", label: "News" },
	{ href: "/gallery", label: "Gallery" },
	{ href: "/videos", label: "Videos" },
	{ href: "/alumni", label: "Alumni" },
	{ href: "/contact", label: "Contact" },
	{ href: "/faq", label: "FAQ" },
];

const charityLinks = [
	{ href: "/climate-action", label: "Climate Action" },
	{ href: "/education", label: "Education" },
	{ href: "/cultural-heritage", label: "Cultural Heritage" },
	{ href: "/our-impact", label: "Our Impact" },
];

export function MobileNav() {
	const [open, setOpen] = useState(false);
	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button variant="ghost" size="icon" className="md:hidden">
					<Menu className="h-5 w-5" />
					<span className="sr-only">Toggle menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className="flex w-72 flex-col p-0">
				<SheetHeader className="border-b p-4">
					<SheetTitle>Menu</SheetTitle>
				</SheetHeader>
				<nav className="flex-1 overflow-y-auto">
					<div className="flex flex-col space-y-2 p-4">
						{navItems.map((item, index) => (
							<motion.div
								key={item.href}
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -20 }}
								transition={{ delay: index * 0.1 }}
							>
								<Link
									to={item.href}
									className={cn(
										"block px-2 py-1 text-lg font-medium transition-colors hover:text-primary",
										item.isLogo && "flex items-center gap-2"
									)}
									onClick={() => setOpen(false)}
								>
									{item.isLogo ? (
										<>
											<img
												src="/images/logo.png"
												alt="Arena Sports & Charity Foundation"
												className="h-8 w-auto"
											/>
											{item.label}
										</>
									) : (
										item.label
									)}
								</Link>
							</motion.div>
						))}
						
						{/* Charity Section */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -20 }}
							transition={{ delay: navItems.length * 0.1 }}
						>
							<div className="px-2 py-2">
								<h3 className="text-lg font-bold text-primary mb-2">Charity Initiatives</h3>
								<div className="space-y-1">
									{charityLinks.map((link) => (
										<Link
											key={link.href}
											to={link.href}
											className="block px-2 py-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
											onClick={() => setOpen(false)}
										>
											{link.label}
										</Link>
									))}
								</div>
							</div>
						</motion.div>
						<Link
							to="/donations"
							className="flex items-center gap-2 text-sm font-medium"
							onClick={() => setOpen(false)}
						>
							<Heart className="h-4 w-4" />
							Donate
						</Link>
						<Link
							to="/admin/login"
							className="flex items-center gap-2 text-sm font-medium"
							onClick={() => setOpen(false)}
						>
							<Lock className="h-4 w-4" />
							Admin Login
						</Link>
					</div>
				</nav>
				<div className="border-t p-4">
					<Button asChild className="w-full" size="sm">
						<Link to="/register">Register Now</Link>
					</Button>
				</div>
			</SheetContent>
		</Sheet>
	);
}
