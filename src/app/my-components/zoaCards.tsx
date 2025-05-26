'use client'
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
export default function ZoaCards() {
    return (
        <div className="w-full max-w-md mx-auto">
            <Card className="bg-transparent border-0 overflow-hidden py-0 rounded-none">
                <CardContent className="p-0">
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] bg-transparent">
                        <Image
                            src="/style/images/zoaCards.png"
                            alt="Al-Nabwi Travels - Taxi Services for Umrah Pilgrims"
                            fill
                            className="object-cover rounded-none"
                            
                        />
                    </div>

                    {/* Content Section */}
                    <div className="py-3 ">
                        <h2 className="text-2xl font-bold text-white tracking-wide">Al-Nabwi Travels</h2>
                        <p className="text-slate-400 text-md leading-relaxed">
                            Al-Nabwi Travels benötigte eine professionelle M...
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
