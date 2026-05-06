import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, TreePine, BookOpen, Building, Target, TrendingUp, Award } from "lucide-react";

export function OurImpact() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
			{/* Hero Section */}
			<section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-600">
				<div className="absolute inset-0 bg-black/20" />
				<div className="container relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="max-w-3xl mx-auto text-center text-white"
					>
						<div className="mb-6">
							<Heart className="h-16 w-16 mx-auto" />
						</div>
						<h1 className="text-5xl font-bold mb-6">Our Impact</h1>
						<p className="text-xl mt-4 max-w-2xl mx-auto">
							Together, we are creating lasting change in communities through sports, education, climate action, and cultural preservation.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Impact Overview */}
			<section className="py-16 bg-white">
				<div className="container">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="max-w-4xl mx-auto text-center"
					>
						<h2 className="text-3xl font-bold mb-6">Transforming Lives & Communities</h2>
						<p className="text-lg text-muted-foreground leading-relaxed">
							Since our transition to Arena Sports & Charity Foundation, we have expanded our impact 
							beyond sports development to create comprehensive community transformation. Our integrated 
							approach addresses multiple facets of community development, ensuring that we create 
							sustainable, lasting change that benefits generations to come.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Key Impact Areas */}
			<section className="py-16 bg-gray-50">
				<div className="container">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl font-bold">Our Key Impact Areas</h2>
						<p className="mt-4 text-lg text-muted-foreground">
							Measurable results across our charity focus areas
						</p>
					</motion.div>

					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
						{keyImpacts.map((impact, index) => (
							<motion.div
								key={impact.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
							>
								<Card className="h-full hover:shadow-lg transition-all">
									<CardContent className="p-6 text-center">
										<div className="mb-4 text-blue-600">{impact.icon}</div>
										<h3 className="text-xl font-bold mb-3">{impact.title}</h3>
										<div className="text-2xl font-bold text-blue-600 mb-2">{impact.stat}</div>
										<p className="text-muted-foreground">{impact.description}</p>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Success Stories */}
			<section className="py-16 bg-white">
				<div className="container">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl font-bold mb-4">Success Stories</h2>
						<p className="text-lg text-muted-foreground">
							Real lives transformed through our programs
						</p>
					</motion.div>

					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{successStories.map((story, index) => (
							<motion.div
								key={story.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
							>
								<Card className="h-full hover:shadow-lg transition-all">
									<CardContent className="p-6">
										<div className="flex items-center gap-3 mb-4">
											<Award className="h-8 w-8 text-yellow-600" />
											<h3 className="text-xl font-bold">{story.title}</h3>
										</div>
										<p className="text-muted-foreground mb-4">{story.story}</p>
										<div className="text-sm text-blue-600 font-semibold">
											{story.achievement}
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Detailed Impact Metrics */}
			<section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
				<div className="container">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="max-w-4xl mx-auto"
					>
						<div className="text-center mb-12">
							<TrendingUp className="h-16 w-16 text-blue-600 mx-auto mb-4" />
							<h2 className="text-3xl font-bold mb-4">By the Numbers</h2>
							<p className="text-lg text-muted-foreground">
								Our measurable impact since 2014
							</p>
						</div>

						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
							{detailedMetrics.map((metric, index) => (
								<motion.div
									key={metric.label}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
								>
									<Card className="text-center p-6 bg-white">
										<div className="text-3xl font-bold text-blue-600 mb-2">{metric.value}</div>
										<div className="text-muted-foreground font-medium">{metric.label}</div>
									</Card>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</section>

			{/* Community Impact */}
			<section className="py-16 bg-white">
				<div className="container">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="max-w-4xl mx-auto"
					>
						<div className="text-center mb-12">
							<Users className="h-16 w-16 text-purple-600 mx-auto mb-4" />
							<h2 className="text-3xl font-bold mb-4">Community Transformation</h2>
							<p className="text-lg text-muted-foreground">
								How our work creates ripple effects throughout communities
							</p>
						</div>

						<div className="grid gap-6 md:grid-cols-2">
							<Card className="p-6">
								<div className="flex items-center gap-4 mb-4">
									<Target className="h-8 w-8 text-green-600" />
									<h3 className="text-xl font-bold">Empowered Youth</h3>
								</div>
								<p className="text-muted-foreground">
									Young people gain confidence, skills, and opportunities through our integrated 
									programs, becoming leaders and change-makers in their communities.
								</p>
							</Card>

							<Card className="p-6">
								<div className="flex items-center gap-4 mb-4">
									<Heart className="h-8 w-8 text-red-600" />
									<h3 className="text-xl font-bold">Stronger Communities</h3>
								</div>
								<p className="text-muted-foreground">
									Our programs bring people together, fostering unity, cooperation, and shared 
									responsibility for community development.
								</p>
							</Card>

							<Card className="p-6">
								<div className="flex items-center gap-4 mb-4">
									<BookOpen className="h-8 w-8 text-blue-600" />
									<h3 className="text-xl font-bold">Educational Opportunities</h3>
								</div>
								<p className="text-muted-foreground">
									Increased access to quality education and skills development opens doors to 
									better futures for children and young adults.
								</p>
							</Card>

							<Card className="p-6">
								<div className="flex items-center gap-4 mb-4">
									<TreePine className="h-8 w-8 text-green-600" />
									<h3 className="text-xl font-bold">Environmental Stewardship</h3>
								</div>
								<p className="text-muted-foreground">
									Communities become more environmentally conscious and active in protecting 
									natural resources for future generations.
								</p>
							</Card>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Future Goals */}
			<section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
				<div className="container">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="max-w-3xl mx-auto text-center text-white"
					>
						<h2 className="text-3xl font-bold mb-6">Our Vision for the Future</h2>
						<p className="text-xl mb-8">
							We're just getting started. Join us as we continue to expand our impact and 
							create even more positive change in communities across Uganda and beyond.
						</p>
						<div className="grid gap-4 md:grid-cols-3 text-left">
							<Card className="bg-white/10 backdrop-blur-sm text-white p-4">
								<h3 className="font-bold mb-2">2025 Goals</h3>
								<p className="text-sm opacity-90">Reach 10,000+ youth through expanded programs</p>
							</Card>
							<Card className="bg-white/10 backdrop-blur-sm text-white p-4">
								<h3 className="font-bold mb-2">2026 Goals</h3>
								<p className="text-sm opacity-90">Establish 5 new community learning centers</p>
							</Card>
							<Card className="bg-white/10 backdrop-blur-sm text-white p-4">
								<h3 className="font-bold mb-2">Long-term Vision</h3>
								<p className="text-sm opacity-90">Become a model for integrated community development</p>
							</Card>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="py-16 bg-gray-50">
				<div className="container">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="max-w-3xl mx-auto text-center"
					>
						<h2 className="text-3xl font-bold mb-6">Be Part of Our Impact Story</h2>
						<p className="text-xl mb-8 text-muted-foreground">
							Every contribution helps us create lasting change. Together, we can transform 
							lives and build stronger, more vibrant communities.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
							>
								Donate Now
							</motion.button>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
							>
								Volunteer With Us
							</motion.button>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}

const keyImpacts = [
	{
		title: "Empowered Youth",
		stat: "5,000+",
		description: "Young people transformed through our integrated programs",
		icon: <Users className="h-12 w-12 mx-auto" />,
	},
	{
		title: "Educational Support",
		stat: "500+",
		description: "Students receiving scholarships and educational assistance",
		icon: <BookOpen className="h-12 w-12 mx-auto" />,
	},
	{
		title: "Environmental Action",
		stat: "10,000+",
		description: "Trees planted and environmental initiatives completed",
		icon: <TreePine className="h-12 w-12 mx-auto" />,
	},
	{
		title: "Cultural Preservation",
		stat: "25+",
		description: "Cultural traditions and practices preserved and promoted",
		icon: <Building className="h-12 w-12 mx-auto" />,
	},
];

const successStories = [
	{
		title: "Sarah's Journey",
		story: "From a struggling student to a scholarship recipient now pursuing engineering at university, Sarah exemplifies how education support transforms lives.",
		achievement: "University Scholarship Recipient 2024"
	},
	{
		title: "Community Garden Project",
		story: "A group of 50 youth transformed an unused plot into a thriving community garden, providing food for 200+ families and teaching sustainable agriculture.",
		achievement: "Environmental Excellence Award 2023"
	},
	{
		title: "Cultural Revival",
		story: "Our traditional dance program revived a nearly forgotten cultural practice, now performed by 100+ youth at national festivals.",
		achievement: "Cultural Heritage Recognition 2024"
	},
	{
		title: "Sports Success Story",
		story: "James joined our soccer program at age 12 and now plays for the national youth team while mentoring younger players.",
		achievement: "National Team Player & Mentor"
	},
	{
		title: "Digital Literacy Impact",
		story: "Our computer lab program helped 200+ students gain essential digital skills, with 50% securing better employment opportunities.",
		achievement: "Technology Education Leader 2023"
	},
	{
		title: "Community Leadership",
		story: "Maria, a program graduate, now leads community development initiatives, impacting over 1,000 lives in her village.",
		achievement: "Community Leadership Award 2024"
	},
];

const detailedMetrics = [
	{ value: "10,000+", label: "Youth Impacted" },
	{ value: "50+", label: "Communities Reached" },
	{ value: "100+", label: "Partner Schools" },
	{ value: "500+", label: "Volunteers Engaged" },
	{ value: "25+", label: "Programs Launched" },
	{ value: "15+", label: "Years of Service" },
	{ value: "1M+", label: "Trees Planted" },
	{ value: "200+", label: "Scholarships Awarded" },
];

export default OurImpact;
