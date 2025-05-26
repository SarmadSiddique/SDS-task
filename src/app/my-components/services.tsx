"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Monitor, ShoppingBag, Megaphone, Search, Smartphone, Server, Palette, Layers } from "lucide-react"

export default function Service() {
    const [activeService, setActiveService] = useState(0)

    const services = [
        {
            id: 0,
            title: "Webentwicklung",
            icon: Monitor,
            description:
                "Unser Dream Studios bietet umfassende Webentwicklungsdienstleistungen, die speziell auf moderne Unternehmen zugeschnitten sind. Wir erstellen benutzerfreundliche, responsive und hochleistungsfähige Websites, die Ihre Online-Präsenz stärken.",
            features: ["Laravel", "WordPress", "E-Commerce"],
            preview: "/placeholder.svg?height=400&width=600",
        },
        {
            id: 1,
            title: "Shopify",
            icon: ShoppingBag,
            description:
                "Professionelle Shopify-Entwicklung für erfolgreiche E-Commerce-Lösungen. Wir erstellen maßgeschneiderte Online-Shops, die Ihre Verkäufe maximieren.",
            features: ["Store Setup", "Theme Customization", "App Integration"],
            preview: "/placeholder.svg?height=400&width=600",
        },
        {
            id: 2,
            title: "Digitale Marketing-Dienstleistungen",
            icon: Megaphone,
            description: "Umfassende digitale Marketing-Strategien zur Steigerung Ihrer Online-Präsenz und Reichweite.",
            features: ["Social Media", "Content Marketing", "PPC Campaigns"],
            preview: "/placeholder.svg?height=400&width=600",
        },
        {
            id: 3,
            title: "Suchmaschinenoptimierung",
            icon: Search,
            description: "SEO-Optimierung für bessere Sichtbarkeit in Suchmaschinen und mehr organischen Traffic.",
            features: ["On-Page SEO", "Technical SEO", "Content Strategy"],
            preview: "/placeholder.svg?height=400&width=600",
        },
        {
            id: 4,
            title: "Mobile App Entwicklung",
            icon: Smartphone,
            description: "Native und Cross-Platform Mobile Apps für iOS und Android mit modernen Technologien.",
            features: ["iOS Development", "Android Development", "React Native"],
            preview: "/placeholder.svg?height=400&width=600",
        },
        {
            id: 5,
            title: "DevOps",
            icon: Server,
            description: "DevOps-Lösungen für effiziente Entwicklungs- und Deployment-Prozesse.",
            features: ["CI/CD", "Cloud Infrastructure", "Monitoring"],
            preview: "/placeholder.svg?height=400&width=600",
        },
        {
            id: 6,
            title: "Grafikdesign-Dienste",
            icon: Palette,
            description: "Kreative Grafikdesign-Lösungen für Ihre Markenidentität und Marketingmaterialien.",
            features: ["Brand Identity", "Print Design", "Digital Graphics"],
            preview: "/placeholder.svg?height=400&width=600",
        },
        {
            id: 7,
            title: "Hochwertige UI/UX Design",
            icon: Layers,
            description: "Benutzerorientierte UI/UX-Designs für optimale Nutzererfahrungen und Conversion-Raten.",
            features: ["User Research", "Wireframing", "Prototyping"],
            preview: "/placeholder.svg?height=400&width=600",
        },
    ]

    const currentService = services[activeService]

    return (
        <section className="bg-transparent py-8 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                    {/* Left Side - Services List */}
                    <div className="w-full">
                        <div className="mb-6 sm:mb-8">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
                                Unsere Dienstleistungen
                            </h2>
                            <p className="text-gray-300 text-base sm:text-lg">
                                Maßgeschneiderte digitale Lösungen für Ihr Unternehmen
                            </p>
                        </div>

                        <div className="space-y-2 sm:space-y-3">
                            {services.map((service, index) => {
                                const IconComponent = service.icon
                                const isActive = activeService === index

                                return (
                                    <Button
                                        key={service.id}
                                        variant="ghost"
                                        className={`w-full justify-start p-3 sm:p-4 h-auto text-left transition-all duration-200 ${isActive
                                                ? "bg-cyan-500/20 border-l-4 border-cyan-400 text-cyan-400"
                                                : "text-gray-300 hover:text-white hover:bg-slate-800/50"
                                            }`}
                                        onClick={() => setActiveService(index)}
                                    >
                                        <div className="flex items-center gap-3 sm:gap-4 w-full min-w-0">
                                            <div
                                                className={`flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex-shrink-0 ${isActive ? "bg-cyan-400 text-slate-900" : "bg-slate-700 text-gray-300"
                                                    }`}
                                            >
                                                <span className="text-xs sm:text-sm font-bold">{index + 1}</span>
                                            </div>
                                            <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                                            <span className="font-medium text-sm sm:text-base truncate">{service.title}</span>
                                        </div>
                                    </Button>
                                )
                            })}
                        </div>
                    </div>

                    {/* Right Side - Service Preview */}
                    <div className="w-full">
                        <Card className="bg-transparent border-gray-100 rounded-none p-4 sm:p-6 w-full">
                            <div className="mb-4 sm:mb-6">
                                <div className="flex items-start sm:items-center gap-3 mb-3 sm:mb-4">
                                    <h3 className="text-xl sm:text-2xl font-bold text-white flex-1 min-w-0">{currentService.title}</h3>
                                    <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white flex-shrink-0">
                                        <span className="text-lg">↗</span>
                                    </Button>
                                </div>
                                <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                                    {currentService.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                                    {currentService.features.map((feature, index) => (
                                        <span
                                            key={index}
                                            className="px-2 sm:px-3 py-1 bg-slate-700 text-cyan-400 text-xs sm:text-sm rounded-full"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Preview Area */}
                            <div className="bg-slate-700/50 rounded-lg p-4 min-h-[200px] sm:min-h-[250px] md:min-h-[300px] flex items-center justify-center w-full">
                                <div className="text-center">
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-slate-600 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                        <currentService.icon className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
                                    </div>
                                    <p className="text-gray-400 text-sm sm:text-base">Preview für {currentService.title}</p>
                                    <p className="text-xs sm:text-sm text-gray-500 mt-2">Hier würden Beispiele und Mockups angezeigt</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>

    )
}
