import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, GraduationCap, Award, Laptop, Users, Target, Lightbulb, School } from "lucide-react";

export function Education() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
			{/* Hero Section */}
			<section className="relative py-20 bg-blue-600">
				<div className="absolute inset-0 bg-blue-900/20" />
				<div className="container relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="max-w-3xl mx-auto text-center text-white"
					>
						<div className="mb-6">
							<BookOpen className="h-16 w-16 mx-auto" />
						</div>
						<h1 className="text-5xl font-bold mb-6">Education</h1>
						<p className="text-xl mt-4 max-w-2xl mx-auto">
							Supporting quality education, life skills, scholarship opportunities and digital learning for a brighter future.
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
						<h2 className="text-3xl font-bold mb-6">Our Education Mission</h2>
						<p className="text-lg text-muted-foreground leading-relaxed">
							Education is the cornerstone of community development and individual empowerment. 
							At Arena Sports & Charity Foundation, we believe that every child deserves access to 
							quality education regardless of their background. Our educational programs focus on 
							academic excellence, practical life skills, and preparing youth for future opportunities 
							in an increasingly digital world.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Education Programs Grid */}
			<section className="py-16 bg-blue-50">
				<div className="container">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl font-bold">Our Education Programs</h2>
						<p className="mt-4 text-lg text-muted-foreground">
							Comprehensive educational support for community development
						</p>
					</motion.div>

					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{educationPrograms.map((program, index) => (
							<motion.div
								key={program.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
							>
								<Card className="h-full hover:shadow-lg transition-all">
									<CardContent className="p-6">
										<div className="mb-4 text-blue-600">{program.icon}</div>
										<h3 className="text-xl font-bold mb-3">{program.title}</h3>
										<p className="text-muted-foreground">{program.description}</p>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Scholarship Section */}
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
							<h2 className="text-3xl font-bold mb-4">Scholarship Opportunities</h2>
							<p className="text-lg text-muted-foreground">
								Removing financial barriers to education for deserving students
							</p>
						</div>

						<div className="grid gap-6 md:grid-cols-2">
							<Card className="p-6">
								<div className="flex items-center gap-4 mb-4">
									<Award className="h-8 w-8 text-blue-600" />
									<h3 className="text-xl font-bold">Academic Excellence Scholarships</h3>
								</div>
								<p className="text-muted-foreground">
									Recognizing and supporting students who demonstrate outstanding academic performance 
									and potential for future success.
								</p>
							</Card>

							<Card className="p-6">
								<div className="flex items-center gap-4 mb-4">
									<Target className="h-8 w-8 text-blue-600" />
									<h3 className="text-xl font-bold">Sports & Talent Scholarships</h3>
								</div>
								<p className="text-muted-foreground">
									Supporting young athletes and talented individuals who excel in sports and other 
									extracurricular activities while maintaining good academic standing.
								</p>
							</Card>

							<Card className="p-6">
								<div className="flex items-center gap-4 mb-4">
									<Users className="h-8 w-8 text-blue-600" />
									<h3 className="text-xl font-bold">Need-Based Financial Aid</h3>
								</div>
								<p className="text-muted-foreground">
									Providing financial assistance to students from disadvantaged backgrounds to ensure 
									equal access to quality education.
								</p>
							</Card>

							<Card className="p-6">
								<div className="flex items-center gap-4 mb-4">
									<Lightbulb className="h-8 w-8 text-blue-600" />
									<h3 className="text-xl font-bold">STEM Education Support</h3>
								</div>
								<p className="text-muted-foreground">
									Encouraging and supporting students pursuing Science, Technology, Engineering, and 
									Mathematics education with specialized resources and mentorship.
								</p>
							</Card>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Digital Learning Section */}
			<section className="py-16 bg-blue-50">
				<div className="container">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="max-w-4xl mx-auto text-center"
					>
						<div className="mb-8">
							<Laptop className="h-16 w-16 text-blue-600 mx-auto mb-4" />
							<h2 className="text-3xl font-bold mb-4">Digital Learning Initiative</h2>
							<p className="text-lg text-muted-foreground">
								Embracing technology to enhance educational access and quality
							</p>
						</div>

						<div className="grid gap-6 md:grid-cols-3">
							<Card className="p-6 text-center">
								<div className="text-2xl font-bold text-blue-600 mb-2">Computer Labs</div>
								<p className="text-muted-foreground">
									Establishing computer labs in schools and community centers
								</p>
							</Card>

							<Card className="p-6 text-center">
								<div className="text-2xl font-bold text-blue-600 mb-2">Digital Literacy</div>
								<p className="text-muted-foreground">
									Teaching essential digital skills for the modern world
								</p>
							</Card>

							<Card className="p-6 text-center">
								<div className="text-2xl font-bold text-blue-600 mb-2">Online Resources</div>
								<p className="text-muted-foreground">
									Providing access to online learning platforms and educational content
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
						<h2 className="text-3xl font-bold">Our Educational Impact</h2>
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
									<div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
									<div className="text-muted-foreground">{stat.label}</div>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Get Involved Section */}
			<section className="py-16 bg-blue-600">
				<div className="container">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="max-w-3xl mx-auto text-center text-white"
					>
						<h2 className="text-3xl font-bold mb-6">Support Education Initiatives</h2>
						<p className="text-xl mb-8">
							Help us provide quality education and opportunities for children in our communities.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
							>
								Become a Mentor
							</motion.button>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
							>
								Sponsor a Student
							</motion.button>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}

const educationPrograms = [
	{
		title: "After-School Tutoring",
		description: "Providing academic support and homework help to students who need extra assistance in core subjects.",
		icon: <GraduationCap className="h-12 w-12" />,
	},
	{
		title: "Life Skills Training",
		description: "Teaching essential life skills including financial literacy, communication, and problem-solving abilities.",
		icon: <Target className="h-12 w-12" />,
	},
	{
		title: "Career Guidance",
		description: "Helping students explore career options and make informed decisions about their future education and employment.",
		icon: <Lightbulb className="h-12 w-12" />,
	},
	{
		title: "Library Services",
		description: "Establishing community libraries and providing access to books and educational resources.",
		icon: <BookOpen className="h-12 w-12" />,
	},
	{
		title: "Teacher Training",
		description: "Supporting educators with professional development and modern teaching methodologies.",
		icon: <Users className="h-12 w-12" />,
	},
	{
		title: "School Infrastructure",
		description: "Improving school facilities and creating better learning environments for students.",
		icon: <School className="h-12 w-12" />,
	},
];

const impactStats = [
	{ value: "500+", label: "Students Supported" },
	{ value: "50+", label: "Scholarships Awarded" },
	{ value: "20+", label: "Schools Partnered" },
	{ value: "100+", label: "Mentors Engaged" },
];

export default Education;
