import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Music, Palette, Camera, Globe, Users, Scroll, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

export function CulturalHeritage() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
			{/* Hero Section */}
			<section className="relative py-20 bg-purple-600">
				<div className="absolute inset-0 bg-purple-900/20" />
				<div className="container relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="max-w-3xl mx-auto text-center text-white"
					>
						<div className="mb-6">
							<Building className="h-16 w-16 mx-auto" />
						</div>
						<h1 className="text-5xl font-bold mb-6">Cultural Heritage</h1>
						<p className="text-xl mt-4 max-w-2xl mx-auto">
							Preserving and promoting our traditions, languages, history and cultural identity for future generations.
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
						<h2 className="text-3xl font-bold mb-6">Our Cultural Mission</h2>
						<p className="text-lg text-muted-foreground leading-relaxed">
							Cultural heritage is the foundation of our identity and community strength. 
							At Arena Sports & Charity Foundation, we are dedicated to preserving and celebrating 
							the rich cultural traditions that define us. Through our cultural programs, we ensure that 
							future generations remain connected to their roots while embracing the diversity that makes 
							our communities vibrant and unique.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Cultural Programs Grid */}
			<section className="py-16 bg-purple-50">
				<div className="container">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl font-bold">Our Cultural Programs</h2>
						<p className="mt-4 text-lg text-muted-foreground">
							Celebrating and preserving our cultural diversity
						</p>
					</motion.div>

					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{culturalPrograms.map((program, index) => (
							<motion.div
								key={program.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
							>
								<Card className="h-full hover:shadow-lg transition-all">
									<CardContent className="p-6">
										<div className="mb-4 text-purple-600">{program.icon}</div>
										<h3 className="text-xl font-bold mb-3">{program.title}</h3>
										<p className="text-muted-foreground">{program.description}</p>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Cultural Events Section */}
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
							<h2 className="text-3xl font-bold mb-4">Annual Cultural Events</h2>
							<p className="text-lg text-muted-foreground">
								Bringing communities together through cultural celebrations
							</p>
						</div>

						<div className="grid gap-6 md:grid-cols-2">
							<Card className="p-6">
								<div className="flex items-center gap-4 mb-4">
									<Trophy className="h-8 w-8 text-purple-600" />
									<h3 className="text-xl font-bold">Cultural Heritage Festival</h3>
								</div>
								<p className="text-muted-foreground">
									Annual celebration featuring traditional music, dance, food, and crafts from 
									different cultural backgrounds in our community.
								</p>
							</Card>

							<Card className="p-6">
								<div className="flex items-center gap-4 mb-4">
									<Music className="h-8 w-8 text-purple-600" />
									<h3 className="text-xl font-bold">Traditional Music Concerts</h3>
								</div>
								<p className="text-muted-foreground">
									Regular performances showcasing traditional instruments and musical styles, 
									passing down musical heritage to younger generations.
								</p>
							</Card>

							<Card className="p-6">
								<div className="flex items-center gap-4 mb-4">
									<Palette className="h-8 w-8 text-purple-600" />
									<h3 className="text-xl font-bold">Art & Craft Exhibitions</h3>
								</div>
								<p className="text-muted-foreground">
									Displaying traditional arts, crafts, and contemporary works inspired by 
									cultural heritage and local traditions.
								</p>
							</Card>

							<Card className="p-6">
								<div className="flex items-center gap-4 mb-4">
									<Scroll className="h-8 w-8 text-purple-600" />
									<h3 className="text-xl font-bold">Storytelling Sessions</h3>
								</div>
								<p className="text-muted-foreground">
									Gathering elders and community members to share traditional stories, legends, 
									and oral history with younger generations.
								</p>
							</Card>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Heritage Preservation Section */}
			<section className="py-16 bg-purple-50">
				<div className="container">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="max-w-4xl mx-auto text-center"
					>
						<div className="mb-8">
							<Camera className="h-16 w-16 text-purple-600 mx-auto mb-4" />
							<h2 className="text-3xl font-bold mb-4">Heritage Documentation</h2>
							<p className="text-lg text-muted-foreground">
								Preserving our cultural legacy for future generations
							</p>
						</div>

						<div className="grid gap-6 md:grid-cols-3">
							<Card className="p-6 text-center">
								<div className="text-2xl font-bold text-purple-600 mb-2">Digital Archives</div>
								<p className="text-muted-foreground">
									Creating digital records of cultural artifacts, stories, and traditions
								</p>
							</Card>

							<Card className="p-6 text-center">
								<div className="text-2xl font-bold text-purple-600 mb-2">Oral History</div>
								<p className="text-muted-foreground">
									Recording and preserving the stories and wisdom of community elders
								</p>
							</Card>

							<Card className="p-6 text-center">
								<div className="text-2xl font-bold text-purple-600 mb-2">Cultural Mapping</div>
								<p className="text-muted-foreground">
									Documenting significant cultural sites and landmarks in our communities
								</p>
							</Card>
						</div>
					</motion.div>
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
						<h2 className="text-3xl font-bold">Our Cultural Impact</h2>
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
									<div className="text-3xl font-bold text-purple-600 mb-2">{stat.value}</div>
									<div className="text-muted-foreground">{stat.label}</div>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Get Involved Section */}
			<section className="py-16 bg-purple-600">
				<div className="container">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="max-w-3xl mx-auto text-center text-white"
					>
						<h2 className="text-3xl font-bold mb-6">Preserve Our Cultural Heritage</h2>
						<p className="text-xl mb-8">
							Join us in celebrating and preserving the rich cultural traditions that make our communities special.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link to="/contact?subject=Share%20Your%20Story">
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
								>
									Share Your Story
								</motion.button>
							</Link>
							<Link to="/contact?subject=Support%20Cultural%20Programs">
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="bg-purple-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-900 transition-colors"
								>
									Support Cultural Programs
								</motion.button>
							</Link>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}

const culturalPrograms = [
	{
		title: "Traditional Dance Classes",
		description: "Teaching traditional dances to youth and adults, ensuring cultural expressions are passed down through generations.",
		icon: <Music className="h-12 w-12" />,
	},
	{
		title: "Language Preservation",
		description: "Organizing language classes and conversation circles to maintain and revitalize indigenous and local languages.",
		icon: <Globe className="h-12 w-12" />,
	},
	{
		title: "Arts & Crafts Workshops",
		description: "Teaching traditional craft techniques including pottery, weaving, beadwork, and other artisanal skills.",
		icon: <Palette className="h-12 w-12" />,
	},
	{
		title: "Cultural Exchange Programs",
		description: "Facilitating cultural exchanges between different communities to promote understanding and appreciation of diversity.",
		icon: <Users className="h-12 w-12" />,
	},
	{
		title: "Historical Documentation",
		description: "Researching and documenting local history, traditions, and cultural practices for educational purposes.",
		icon: <Scroll className="h-12 w-12" />,
	},
	{
		title: "Cultural Performances",
		description: "Organizing regular cultural performances and demonstrations to showcase traditional arts and entertainment.",
		icon: <Trophy className="h-12 w-12" />,
	},
];

const impactStats = [
	{ value: "1,000+", label: "Cultural Participants" },
	{ value: "25+", label: "Cultural Events Hosted" },
	{ value: "15+", label: "Traditions Preserved" },
	{ value: "50+", label: "Cultural Artisans Supported" },
];

export default CulturalHeritage;
