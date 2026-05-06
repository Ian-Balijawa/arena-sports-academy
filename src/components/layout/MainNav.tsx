import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";
import { Lock, Heart, ChevronDown } from "lucide-react";
import { useState } from "react";

const links = [
	{
		href: "/",
		label: "Home",
		isLogo: true,
	},
	{ href: "/about", label: "About" },
	{ href: "/programs", label: "Programs" },
	{ href: "/registration", label: "Registration" },
	{ href: "/coaches", label: "Coaches" },
	{ href: "/facilities", label: "Facilities" },
	{ href: "/news", label: "News" },
	{ href: "/gallery", label: "Gallery" },
	{ href: "/alumni", label: "Alumni" },
	{ href: "/contact", label: "Contact" },
	{ href: "/faq", label: "FAQ" },
	{ href: "/videos", label: "Videos" },
];

const charityLinks = [
	{ href: "/climate-action", label: "Climate Action" },
	{ href: "/education", label: "Education" },
	{ href: "/cultural-heritage", label: "Cultural Heritage" },
	{ href: "/our-impact", label: "Our Impact" },
];

export function MainNav() {
	const location = useLocation();
	const [isCharityOpen, setIsCharityOpen] = useState(false);

	return (
		<nav className="hidden gap-6 lg:flex justify-between w-full items-center">
			{links.map((link) => (
				<Link
					key={link.href}
					to={link.href}
					className={cn(
						"text-sm font-medium transition-colors hover:text-primary",
						location.pathname === link.href ? "text-primary" : "text-muted-foreground",
						link.isLogo && "flex items-center gap-2"
					)}
				>
					{link.isLogo ? (
						<>
							<img
								src="/images/logo.png"
								alt="Arena Sports & Charity Foundation"
								className="h-8 w-auto"
							/>
							{link.label}
						</>
					) : (
						link.label
					)}
				</Link>
			))}
			
			{/* Charity Dropdown */}
			<div className="relative">
				<button
					onClick={() => setIsCharityOpen(!isCharityOpen)}
					className={cn(
						"text-sm font-medium transition-colors hover:text-primary flex items-center gap-1",
						charityLinks.some(link => location.pathname === link.href) ? "text-primary" : "text-muted-foreground"
					)}
				>
					Charity
					<ChevronDown className="h-4 w-4" />
				</button>
				
				{isCharityOpen && (
					<div className="absolute top-full left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
						{charityLinks.map((link) => (
							<Link
								key={link.href}
								to={link.href}
								onClick={() => setIsCharityOpen(false)}
								className={cn(
									"block px-4 py-2 text-sm hover:bg-gray-100 transition-colors",
									location.pathname === link.href ? "bg-gray-100 text-primary font-medium" : "text-muted-foreground"
								)}
							>
								{link.label}
							</Link>
						))}
					</div>
				)}
			</div>
			
			<div className="flex items-center gap-2">
				<Link to="/donations">
					<Button variant="default" size="sm" className="gap-2">
						<Heart className="h-4 w-4" />
						Donate
					</Button>
				</Link>
				<Link to="/admin/login">
					<Button variant="ghost" size="sm" className="gap-2">
						<Lock className="h-4 w-4" />
						Admin
					</Button>
				</Link>
			</div>
		</nav>
	);
}
