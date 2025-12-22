import React from 'react';
import { Globe, Menu, Mountain, Tent, TreePine, Sun, Umbrella, Feather, Sparkles, Cloud } from 'lucide-react';
import Image from 'next/image';

const ExploreHero = () => {
    return (
        <div className="w-full relative font-sans text-slate-800">
            {/* Hero Section */}
            <div className="relative min-h-[800px] w-full overflow-hidden bg-slate-900">
                {/* Background Gradient */}
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#1a120b] via-[#2c1a1d] to-[#1a120b]" />

                {/* Navigation */}
                <nav className="relative z-50 flex items-center justify-between px-8 py-6 text-white max-w-7xl mx-auto">
                    <div className="flex items-center gap-1 text-2xl font-bold tracking-tight font-serif">
                        <span className="text-amber-400">ቅኔ</span> <span className="opacity-90">መቁጠሪያ</span>
                    </div>
                    <div className="hidden md:flex items-center gap-8 font-medium">
                        <a href="#" className="hover:text-amber-400 transition">መነሻ</a>
                        <a href="#" className="hover:text-amber-400 transition">የዕለት</a>
                        <a href="#" className="hover:text-amber-400 transition">ወርኃዊ</a>
                        <a href="#" className="hover:text-amber-400 transition">መግቢያ</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <Menu className="w-8 h-8 cursor-pointer hover:text-amber-400" />
                    </div>
                </nav>

                {/* Main Hero Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 pt-12 pb-32 flex flex-col md:flex-row items-center justify-between min-h-[600px]">

                    {/* Cards Container (Left/Center) */}
                    <div className="relative flex gap-4 md:gap-6 items-center justify-center w-full md:w-2/3 [perspective:1000px] pl-4 md:pl-0">

                        {/* Card 1 - Yared (Music/Saint) */}
                        <div className="relative w-32 h-56 md:w-48 md:h-72 rounded-xl overflow-hidden shadow-2xl transform translate-y-12 transition hover:-translate-y-2 duration-500 z-30 ring-1 ring-amber-500/20 border border-amber-900/30">
                            <Image src="/card-daily.png" alt="Daily" fill className="object-cover" />
                        </div>

                        {/* Card 2 - Manuscript */}
                        <div className="relative w-32 h-56 md:w-48 md:h-72 rounded-xl overflow-hidden shadow-2xl transform -translate-y-8 transition hover:-translate-y-12 duration-500 z-30 ring-1 ring-amber-500/20 border border-amber-900/30">
                            <Image src="/card-monthly.png" alt="Monthly" fill className="object-cover" />
                        </div>

                        {/* Card 3 - Lalibela (Architecture) */}
                        <div className="relative w-32 h-56 md:w-48 md:h-72 rounded-xl overflow-hidden shadow-2xl transform translate-y-4 transition hover:-translate-y-4 duration-500 z-30 ring-1 ring-amber-500/20 border border-amber-900/30">
                            <Image src="/card-annual.png" alt="Annual" fill className="object-cover" />
                        </div>

                        {/* Card 4 - Cross (Faith) */}
                        <div className="relative w-32 h-56 md:w-48 md:h-72 rounded-xl overflow-hidden shadow-2xl transform -translate-y-12 transition hover:-translate-y-16 duration-500 z-30 ring-1 ring-amber-500/20 border border-amber-900/30">
                            <Image src="/card-fasts.png" alt="Fasts" fill className="object-cover" />
                        </div>
                    </div>

                    {/* Typography (Right/Background) with Layering */}
                    {/* 
                   Crucial: "The text 'EXPLORE' should be positioned behind the 3rd and 4th image cards"
                   We achieve this by making this container overlap the cards container, or by positioning it absolutely relative to the main container.
                   To make it sit *behind* specific cards but *visible* elsewhere requires z-index shuffling.
                   
                   Actually, if "EXPLORE" is behind 3rd and 4th, it effectively means it's behind the whole card row if they overlap.
                   But if the text is on the RIGHT, and the cards are on the LEFT/CENTER.
                   Let's position "EXPLORE" to the right, overlapping the last two cards.
                   z-index: 20 (Cards are 30).
               */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 md:translate-x-12 z-20 pointer-events-none text-right hidden lg:block">
                        <h1 className="text-[14rem] font-black text-[#D4AF37] leading-none tracking-tighter drop-shadow-2xl opacity-80 font-serif"
                            style={{ textShadow: '0 20px 50px rgba(0,0,0,0.8)' }}>
                            TIBEB
                        </h1>
                        <p className="text-4xl font-bold text-amber-100 tracking-[0.6em] mr-8 mt-2 opacity-90 uppercase font-serif">
                            Of the Ancients
                        </p>
                    </div>

                    {/* Mobile Text Fallback */}
                    <div className="lg:hidden absolute bottom-32 w-full text-center z-40">
                        <h1 className="text-6xl font-black text-amber-400 drop-shadow-md font-serif">TIBEB</h1>
                    </div>

                </div>

            </div>

            {/* Category Filter Bar */}
            <div className="relative z-40 -mt-10 flex justify-center px-4 mb-8">
                <div className="flex flex-wrap justify-center gap-4 bg-transparent p-2">
                    <CategoryPill icon={<Sun className="w-5 h-5 text-amber-600" />} label="የዕለት (Daily)" />
                    <CategoryPill icon={<Umbrella className="w-5 h-5 text-blue-600" />} label="ወርኃዊ (Monthly)" />
                    <CategoryPill icon={<Tent className="w-5 h-5 text-green-600" />} label="ዓመታዊ (Annual)" />
                    <CategoryPill icon={<Mountain className="w-5 h-5 text-red-600" />} label="አጽዋማት (Fasts)" />
                </div>
            </div>
            {/* Wisdom / Verse Section - "Sem Ena Werq" Style */}
            {/* Simple CSS horizontal scroll - no GSAP, no spacers, no unwanted space */}
            <div className="relative z-40 py-16 px-4 w-full" style={{ background: '#fdfbf7' }}>
                <div className="flex items-center justify-center gap-4 mb-12">
                    <div className="h-[2px] w-12 bg-amber-400/50"></div>
                    <h2 className="text-xl md:text-3xl font-bold text-[#D4AF37] font-serif tracking-[0.2em] text-center drop-shadow-md">
                        TIBEBE (ጥበብ)
                    </h2>
                    <div className="h-[2px] w-12 bg-amber-400/50"></div>
                </div>

                {/* Horizontal Scroll Track - Simple overflow scroll */}
                <div className="flex gap-8 overflow-x-auto pb-4 px-4 md:px-12 items-center hide-scrollbar">
                    <WisdomCard
                        day="እሁድ"
                        title="የሰንበት ክብር (Creation)"
                        desc="The Beginning. God created the Heavens, the Earth, Light, and the Angels."
                        icon={<Sparkles className="w-6 h-6 text-amber-200" />}
                    />
                    <WisdomCard
                        day="ሰኞ"
                        title="ጠፈር (The Firmament)"
                        desc="On this day, the heavens were stretched out like a curtain."
                        icon={<Globe className="w-6 h-6 text-cyan-200" />}
                    />
                    <WisdomCard
                        day="ማክሰኞ"
                        title="አትክልት (Plants)"
                        desc="The earth brought forth grass, and herb yielding seed."
                        icon={<TreePine className="w-6 h-6 text-green-300" />}
                    />
                    <WisdomCard
                        day="ረቡዕ"
                        title="ብርሃናት (Lights)"
                        desc="Sun, Moon, and Stars were set in the firmament of the heaven."
                        icon={<Sun className="w-6 h-6 text-yellow-300" />}
                    />
                    <WisdomCard
                        day="ሐሙስ"
                        title="ዘመን (Creatures)"
                        desc="The waters brought forth abundantly the moving creature that hath life."
                        icon={<Globe className="w-6 h-6 text-blue-300" />}
                    />
                    <WisdomCard
                        day="ዓርብ"
                        title="ስነ ፍጥረት (Mankind)"
                        desc="God created man in his own image, in the image of God created he him."
                        icon={<Sun className="w-6 h-6 text-red-300" />}
                    />
                    <WisdomCard
                        day="ቅዳሜ"
                        title="ዕረፍት (Sabbath)"
                        desc="The Seventh Day. God rested from all His work which He had made."
                        icon={<Cloud className="w-6 h-6 text-slate-200" />}
                    />
                </div>
            </div>
            {/* FOOTER: "Legacy & Roots" - The Foundation */}
        </div>
    );
};


const CategoryPill = ({ icon, label }: { icon: any, label: string }) => (
    <button className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-slate-100 min-w-[150px] group">
        <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-cyan-50 transition">
            {icon}
        </div>
        <span className="font-bold text-slate-700 group-hover:text-cyan-900">{label}</span>
    </button>
);

const WisdomCard = ({ day, title, desc, icon }: { day: string, title: string, desc: string, icon: any }) => (
    <div className="min-w-[280px] md:min-w-[320px] bg-gradient-to-br from-[#2C1A1D]/80 to-[#1a120b]/90 backdrop-blur-md border border-amber-500/20 rounded-xl p-6 relative group overflow-hidden transition-all duration-500 snap-center cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10">
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition duration-500 transform group-hover:rotate-12 group-hover:scale-110">
            <Feather className="w-32 h-32 text-amber-500" />
        </div>

        {/* Decorative corner accent */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-amber-500/30 rounded-tl-lg opacity-50 group-hover:opacity-100 transition duration-500"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-500/30 rounded-br-lg opacity-50 group-hover:opacity-100 transition duration-500"></div>

        <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
                <span className="text-amber-100 font-bold font-serif text-sm tracking-widest uppercase bg-amber-500/20 border border-amber-500/30 px-3 py-1 rounded-full">{day}</span>
                <div className="p-2 bg-white/5 rounded-full border border-white/10 group-hover:border-amber-400/40 transition duration-300">
                    {icon}
                </div>
            </div>
            <h3 className="text-xl font-bold text-amber-50 mb-3 font-serif drop-shadow-sm group-hover:text-amber-200 transition">{title}</h3>
            <p className="text-slate-300 text-sm leading-relaxed border-l-2 border-amber-500/30 pl-4 h-16 opacity-80 group-hover:opacity-100 transition">
                {desc}
            </p>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/0 via-amber-400/5 to-amber-500/0 opacity-0 group-hover:opacity-100 transition duration-700 blur-2xl"></div>
    </div>
);

export default ExploreHero;
