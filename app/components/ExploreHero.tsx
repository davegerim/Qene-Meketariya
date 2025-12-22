import React from 'react';
import { Globe, Menu, Mountain, Tent, TreePine, Sun, Umbrella } from 'lucide-react';
import Image from 'next/image';

const ExploreHero = () => {
    return (
        <div className="w-full relative bg-white font-sans text-slate-800 overflow-hidden shadow-2xl border-b border-slate-200">
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
            <div className="relative z-40 -mt-10 flex justify-center px-4">
                <div className="flex flex-wrap justify-center gap-4 bg-transparent p-2">
                    <CategoryPill icon={<Sun className="w-5 h-5 text-amber-600" />} label="የዕለት (Daily)" />
                    <CategoryPill icon={<Umbrella className="w-5 h-5 text-blue-600" />} label="ወርኃዊ (Monthly)" />
                    <CategoryPill icon={<Tent className="w-5 h-5 text-green-600" />} label="ዓመታዊ (Annual)" />
                    <CategoryPill icon={<Mountain className="w-5 h-5 text-red-600" />} label="አጽዋማት (Fasts)" />
                </div>
            </div>

            {/* Featured Article Section */}
            <div className="bg-[#fdfbf7] pt-24 pb-16 px-4 md:px-12" style={{ backgroundImage: 'radial-gradient(#d4af37 0.5px, transparent 0.5px), radial-gradient(#d4af37 0.5px, #fdfbf7 0.5px)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px' }}>
                <h2 className="text-3xl font-bold text-[#2C1A1D] text-center mb-12 font-serif border-b-2 border-amber-400 inline-block mx-auto pb-2 px-8">ፈጣን መዳረሻ (Quick Access)</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    <FeatureCard
                        img="/feat-dubai.png"
                        title="የዕለት ማስነገሪያ"
                        location="Daily Qene"
                    />
                    <FeatureCard
                        img="/feat-forest.png"
                        title="ወርኃዊ በዓላት"
                        location="Monthly Saints"
                    />
                    <FeatureCard
                        img="/feat-alps.png"
                        title="ዓመታዊ በዓላት"
                        location="Annual Festivals"
                    />
                    <FeatureCard
                        img="/hero-scroll.png"
                        title="አጽዋማት"
                        location="Fasting Seasons"
                    />
                </div>
            </div>
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

const FeatureCard = ({ img, title, location }: { img: string, title: string, location: string }) => (
    <div className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 border border-amber-100 bg-gray-100">
        <Image src={img} alt={title} fill className="object-cover transition duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C1A1D] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition duration-300">
            <span className="text-amber-400 font-bold text-sm tracking-uppercase mb-2 block font-serif">{location}</span>
            <h3 className="text-white text-xl font-bold font-serif">{title}</h3>
        </div>
    </div>
);

export default ExploreHero;
