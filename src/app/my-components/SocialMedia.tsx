"use client"

import { Card } from "@/components/ui/card"
import { Music, Search, ShoppingBag, Plus, MousePointer, ChevronRight } from "lucide-react"

export default function SocialMedia() {
    const partners = [
        {
            name: "TikTok",
            subtitle: "Marketing Partners",
            icon: Music,
            alt: "TikTok Marketing Partners",
        },
        {
            name: "Google Partner",
            subtitle: "",
            icon: Search,
            alt: "Google Partner",
        },
        {
            name: "shopify",
            subtitle: "partners",
            icon: ShoppingBag,
            alt: "Shopify Partners",
        },
        {
            name: "shopify",
            subtitle: "plus",
            icon: Plus,
            alt: "Shopify Plus",
        },
        {
            name: "ClickFunnels",
            subtitle: "",
            icon: MousePointer,
            alt: "ClickFunnels",
        },
        {
            name: "Active Campaign",
            subtitle: "",
            icon: ChevronRight,
            alt: "Active Campaign",
        },
    ]

    return (
        <section className="py-16 px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Leistungsstarke Partnerschaften, bewährter Erfolg
                    </h2>
                    <p className="text-gray-300 text-md md:text-md max-w-[98%] leading-relaxed">
                        Wir arbeiten mit erstklassigen Plattformen zusammen, um messbare Ergebnisse zu erzielen. Diese strategischen
                        Kooperationen ermöglichen es uns, außergewöhnliches Wachstum, herausragende Leistung und Innovation für
                        unsere Kunden voranzutreiben.
                    </p>
                </div>

                {/* Partner Logos Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {partners.map((partner, index) => {
                        const IconComponent = partner.icon
                        return (
                            <Card
                                key={index}
                                className="bg-transparent border-gray-600 py-8 px-6 rounded-none flex flex-col items-center justify-center min-h-[160px] hover:bg-slate-800/70 transition-colors duration-200"
                            >
                                <div className="flex flex-col items-center justify-center text-center space-y-3">
                                    <IconComponent className="w-8 h-8 text-white opacity-80 hover:opacity-100 transition-opacity duration-200" />
                                    <div className="text-white">
                                        <div className="text-sm font-medium">{partner.name}</div>
                                        {partner.subtitle && <div className="text-xs text-gray-400 mt-1">{partner.subtitle}</div>}
                                    </div>
                                </div>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
