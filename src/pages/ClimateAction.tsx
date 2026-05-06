import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, TreePine, Recycle, Globe, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";

export function ClimateAction() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
			{/* Hero Section */}
			<section className="relative py-20 bg-green-600">
				<div className="absolute inset-0 bg-green-900/20" />
				<div className="container relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="max-w-3xl mx-auto text-center text-white"
					>
						<div className="mb-6">
							<Leaf className="h-16 w-16 mx-auto" />
						</div>
						<h1 className="text-5xl font-bold mb-6">Climate Action</h1>
						<p className="text-xl mt-4 max-w-2xl mx-auto">
							Promoting climate awareness, tree planting, waste management and sustainable community practices for a greener future.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Mission Section */}
			<section className="py-16 bg-white">
				<div className="container">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="max-w-4xl mx-auto text-center"
					>
						<h2 className="text-3xl font-bold mb-6">Our Climate Mission</h2>
						<p className="text-lg text-muted-foreground leading-relaxed">
							At Arena Sports & Charity Foundation, we recognize the urgent need for climate action. 
							Through our environmental initiatives, we empower communities to adopt sustainable practices, 
							participate in conservation efforts, and build resilience against climate change. 
							We believe that protecting our environment is essential for the future of our youth and communities.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Climate Initiatives Grid */}
			<section className="py-16 bg-green-50">
				<div className="container">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl font-bold">Our Climate Initiatives</h2>
						<p className="mt-4 text-lg text-muted-foreground">
							Taking concrete action to protect our planet
						</p>
					</motion.div>

					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{climateInitiatives.map((initiative, index) => (
							<motion.div
								key={initiative.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
							>
								<Card className="h-full hover:shadow-lg transition-all">
									<CardContent className="p-6">
										<div className="mb-4 text-green-600">{initiative.icon}</div>
										<h3 className="text-xl font-bold mb-3">{initiative.title}</h3>
										<p className="text-muted-foreground">{initiative.description}</p>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Impact Stats */}
			<section className="py-16 bg-white">
				<div className="container">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl font-bold">Our Environmental Impact</h2>
					</motion.div>

					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
						{impactStats.map((stat, index) => (
							<motion.div
								key={stat.label}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
							>
								<Card className="text-center p-6">
									<div className="text-3xl font-bold text-green-600 mb-2">{stat.value}</div>
									<div className="text-muted-foreground">{stat.label}</div>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Get Involved Section */}
			<section className="py-16 bg-green-600">
				<div className="container">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="max-w-3xl mx-auto text-center text-white"
					>
						<h2 className="text-3xl font-bold mb-6">Join Our Climate Action</h2>
						<p className="text-xl mb-8">
							Be part of the solution. Together, we can create a sustainable future for generations to come.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link to="/contact?subject=Volunteer%20for%20Tree%20Planting">
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
								>
									Volunteer for Tree Planting
								</motion.button>
							</Link>
							<Link to="/contact?subject=Support%20Climate%20Projects">
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="bg-green-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-900 transition-colors"
								>
									Support Our Climate Projects
								</motion.button>
							</Link>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}

const climateInitiatives = [
	{
		title: "Tree Planting Campaigns",
		description: "Organizing community tree planting events to increase forest cover and combat deforestation in local areas.",
		icon: <TreePine className="h-12 w-12" />,
	},
	{
		title: "Waste Management Programs",
		description: "Implementing recycling initiatives and waste reduction campaigns to promote cleaner communities.",
		icon: <Recycle className="h-12 w-12" />,
	},
	{
		title: "Climate Education Workshops",
		description: "Educating youth and communities about climate change, environmental conservation, and sustainable practices.",
		icon: <Globe className="h-12 w-12" />,
	},
	{
		title: "Community Clean-up Drives",
		description: "Regular clean-up events in neighborhoods, schools, and public spaces to promote environmental stewardship.",
		icon: <Users className="h-12 w-12" />,
	},
	{
		title: "Sustainable Agriculture",
		description: "Promoting eco-friendly farming practices and supporting local farmers in adopting climate-smart agriculture.",
		icon: <Leaf className="h-12 w-12" />,
	},
	{
		title: "Renewable Energy Advocacy",
		description: "Advocating for and promoting the adoption of renewable energy sources in communities.",
		icon: <Target className="h-12 w-12" />,
	},
];

const impactStats = [
	{ value: "10,000+", label: "Trees Planted" },
	{ value: "50+", label: "Clean-up Events" },
	{ value: "5,000+", label: "Community Members Engaged" },
	{ value: "25+", label: "Schools Reached" },
];

export default ClimateAction;
