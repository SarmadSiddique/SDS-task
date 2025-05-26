import { Button } from "@/components/ui/button"

const clients = [
    { name: "LUMINA", logo: "LUMINA" },
    { name: "TAXIKHAN", logo: "TAXIKHAN" },
    { name: "IMAM APP", logo: "iMOM\nIMAM APP" },
    { name: "PARCO", logo: "PARCO" },
    { name: "Arabic Brand", logo: "فضيل" },
    { name: "F3 STORE", logo: "F³STORE" },
    { name: "ZOA", logo: "🌙 ZOA" },
    { name: "Juliette", logo: "Juliette\npatindamour" },
    { name: "Amazign", logo: "amazign." },
    { name: "Forex Source", logo: "🦅\nForex Source" },
    { name: "JusO", logo: "JusO\nBioTech Cosmetic" },
    { name: "TikTok", logo: "🎵 TikTok\nfor Business" },
    { name: "Al-Nabwi Travels", logo: "🕌 AL-NABWI\nTRAVELS" },
    { name: "Fabrich", logo: "⚙️ FABRICH" },
    { name: "CTA", logo: "cta" },
    { name: "IndiaQAU", logo: "IndiaQAU" },
]

export default function ClientShowcase() {
    return (
        <div className="p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h1 className="text-[20px] text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                            Wir schätzen Kreativität, <span className="text-yellow-400">Zusammenarbeit</span> und{" "}
                            <span className="text-yellow-400">kontinuierliches Lernen</span>
                        </h1>
                    </div>
                    <div className="flex items-center">
                        <p className="text-slate-300 text-lg leading-relaxed">
                            Unser Ansatz konzentriert sich auf den Aufbau vertrauensvoller Partnerschaften und das Erreichen
                            nachhaltigen Erfolgs. Durch Teamarbeit und Engagement liefern wir außergewöhnliche Ergebnisse, die unsere
                            Leidenschaft für Exzellenz widerspiegeln.
                        </p>
                    </div>
                </div>

                {/* Client Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-0 rounded-lg overflow-hidden mb-8">
                {clients.map((client, index) => (
                        <div
                            key={index}
                            className={`
                h-24 flex items-center justify-center p-4 border-slate-700 relative
                ${index % 4 !== 3 ? "lg:border-r" : ""}
                ${index < 12 ? "border-b" : "border-b"}
                ${client.name === "CTA" ? "bg-indigo-600" : "bg-transparent"}
                hover:bg-slate-700/50 transition-colors
              `}
                        >
                            {client.name === "CTA" ? (
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-white mb-1">Und Sie?</h3>
                                    <p className="text-xs hidden md:block text-indigo-100">Schicken Sie uns eine Nachricht</p>
                                </div>
                            ) : (
                                <div className="text-center">
                                    <div className="text-white font-semibold text-sm lg:text-base whitespace-pre-line">{client.logo}</div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>


                {/* View All Button */}
                <div className="text-center">
                    <Button className="bg-indigo-600 rounded-none  hover:bg-indigo-700 text-white px-8 py-3 text-lg">
                        Alle Kunden ansehen
                    </Button>
                </div>
            </div>
        </div>
    )
}
