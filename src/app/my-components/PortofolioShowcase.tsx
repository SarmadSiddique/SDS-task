import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

const projects = [
    {
        id: 1,
        category: "Reisebüro",
        categoryColor: "bg-orange-500",
        title: "Al-Nabwi Travels",
        description:
            "Al-Nabwi Travels benötigte eine professionelle Markenidentität, um sich im wettbewerbsintensiven Markt für Hajj- und Umrah-Reisen abzuheben.",
        services: ["UI/UX-Design", "Webentwicklung", "SEO-Optimierung", "Logo-Design"],
        image: "/style/images/mobile.webp",
        imageAlt: "Al-Nabwi Travels website on laptop",
    },
    {
        id: 2,
        category: "Gaming service providers",
        categoryColor: "bg-slate-700",
        title: "Try Boosting",
        description:
            "Try Boosting is a gaming service provider that supports the growth of players through a smooth and enjoyable boosting experience.",
        services: ["Naming & Branding", "UI/UX design", "Web development"],
        image: "/style/images/zoaCards.png",
        imageAlt: "Try Boosting gaming website",
    },
    {
        id: 3,
        category: "Islamic app",
        categoryColor: "bg-teal-600",
        title: "Imam App",
        description: "Imam is a comprehensive yet user-friendly application that serves as a guide for new Muslims.",
        services: ["Branding", "App design", "App development", "3D animation"],
        image: "/style/images/mobile.webp",
        imageAlt: "Imam Islamic mobile app",
    },
]

export default function PortfolioShowcase() {
    return (
        <div className="bg-transparent  p-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4">
                    {projects.map((project) => (
                        <Card
                            key={project.id}
                            className="bg-transparent overflow-hidden group cursor-pointer  transition-colors"
                        >
                            {/* Main Image Container */}
                            <div className="relative  overflow-hidden">
                                <Image
                                 src={project.image || "/placeholder.svg"}
                                  alt={project.imageAlt}  
                                  width={600}
                                  height={600}
                                    className="object-cover lg:w-[470px] lg:h-[430px]" 
                                  />

                                {/* Category Badge - Top Left */}
                                <div className="absolute top-0 left-0">
                                    <Badge className={`${project.categoryColor} text-white hover:${project.categoryColor} rounded-none p-2 font-medium`}>
                                        {project.category}
                                    </Badge>
                                </div>

                                {/* Arrow Button - Bottom Right */}
                                <div className="absolute bottom-4 right-4">
                                    <div className="bg-white rounded-0 p-2 group-hover:bg-gray-100 transition-colors">
                                        <ArrowUpRight className="w-5 h-5 text-slate-900" />
                                    </div>
                                </div>

                                {/* Service Tags - Overlaid on image */}
                                <div className="absolute bottom-4 left-4 right-16">
                                    <div className="flex flex-wrap gap-2">
                                        {project.services.map((service, index) => (
                                            <Badge
                                                key={index}
                                                
                                                className="bg-transparent/80 text-white rounded-none p-2 bg-[#585a58] backdrop-blur-sm border-0"
                                            >
                                                {service}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Project Info - Below Image */}
                            <div className="">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
