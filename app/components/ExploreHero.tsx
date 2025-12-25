import React from 'react';
import { Globe, Menu, Sparkles, Cloud, Scroll, Moon, Crown, Flower, TreePine, Sun, Feather, X, ChevronRight, Home } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const ExploreHero = ({ onNavigate }: { onNavigate?: (tab: string) => void }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMenuOpen]);

    const handleNavClick = (tab: string) => {
        setIsMenuOpen(false);
        onNavigate?.(tab);
    };
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

                    <div className="flex items-center gap-4 z-[101]">
                        <div className="p-1 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg group">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-3 rounded-full hover:bg-white/10 transition-all duration-300 relative group-hover:scale-105"
                            >
                                <Menu className="w-6 h-6 text-amber-100/80 group-hover:text-amber-400 transition-colors" />
                            </button>
                        </div>
                    </div>
                </nav>

                {/* Menu Overlay & Drawer */}
                <div
                    className={`fixed inset-0 z-[100] transition-all duration-500 ${isMenuOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none'}`}
                >
                    {/* Backdrop with Blur */}
                    <div
                        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                        onClick={() => setIsMenuOpen(false)}
                    />

                    {/* Sliding Drawer */}
                    <div
                        className={`absolute right-0 top-0 h-full w-full md:w-[500px] bg-[#0f0b0a] border-l border-amber-500/20 shadow-[0_0_50px_rgba(0,0,0,0.8)] transform transition-transform duration-700 cubic-bezier(0.22, 1, 0.36, 1) ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    >
                        {/* Decorative Background Elements */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-full h-full opacity-[0.03] bg-[url('/card-daily.png')] bg-cover bg-no-repeat grayscale mix-blend-overlay"></div>
                            {/* Vertical Line */}
                            <div className="absolute top-0 bottom-0 left-12 w-[1px] bg-gradient-to-b from-transparent via-amber-500/20 to-transparent"></div>
                        </div>

                        {/* Content Container */}
                        <div className="relative h-full flex flex-col pt-32 px-12 z-10">
                            {/* Close Button position */}
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="absolute top-8 right-8 p-3 rounded-full text-amber-500/80 hover:bg-white/5 hover:text-amber-400 transition-all duration-300"
                            >
                                <X size={32} strokeWidth={1.5} />
                            </button>

                            {/* Header */}
                            <div className="mb-16 pl-8 relative">
                                <span className="absolute -left-[5px] top-2 w-3 h-3 bg-amber-500 rounded-full shadow-[0_0_10px_rgba(212,175,55,0.8)]"></span>
                                <h2 className="text-5xl font-serif text-amber-50 font-bold tracking-tight mb-2">ማውጫ</h2>
                                <p className="text-amber-500/60 font-serif italic tracking-widest text-sm uppercase">Quick Navigation</p>
                            </div>

                            {/* Navigation Links */}
                            <nav className="flex flex-col gap-8">
                                <MenuLink label="መነሻ" subLabel="Home" onClick={() => handleNavClick('home')} delay="100ms" isActive={false} />
                                <MenuLink label="የዕለት ማስነገሪያዎች" subLabel="Daily Qene" onClick={() => handleNavClick('daily')} delay="150ms" isActive={false} />
                                <MenuLink label="ወርኃዊ በዓላት" subLabel="Monthly Feasts" onClick={() => handleNavClick('monthly')} delay="200ms" isActive={false} />
                                <MenuLink label="ዓመታዊ በዓላት" subLabel="Annual Feasts" onClick={() => handleNavClick('annual')} delay="250ms" isActive={false} />
                                <MenuLink label="አጽዋማት" subLabel="Fasts" onClick={() => handleNavClick('fasts')} delay="300ms" isActive={false} />
                            </nav>

                            {/* Footer in Menu */}
                            <div className="mt-auto mb-12 pl-8 border-t border-white/5 pt-8">
                                <div className="flex items-center gap-3 opacity-50 mb-4">
                                    <Feather size={16} />
                                    <span className="text-xs tracking-widest uppercase">Qene Masenegeriya</span>
                                </div>
                                <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
                                    "Wisdom builds her house, she has hewn out her seven pillars."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

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
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 pointer-events-none text-right hidden lg:flex flex-col items-end">
                        {/* Reeded Glass Panel */}
                        <div className="relative p-12 pr-16 rounded-[2rem] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] bg-white/5 backdrop-blur-xl overflow-hidden group">

                            {/* Reeded Texture (Vertical Lines) */}
                            <div className="absolute inset-0 z-0 opacity-30 mix-blend-overlay"
                                style={{
                                    backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0) 0px, rgba(255,255,255,0) 2px, rgba(255,255,255,0.1) 3px, rgba(255,255,255,0) 4px)'
                                }}>
                            </div>

                            {/* Glossy Sheen */}
                            <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 group-hover:animate-shine" />

                            <div className="relative z-10">
                                <h1 className="text-[10rem] xl:text-[12rem] font-black text-[#FFD700] leading-[0.85] tracking-tighter drop-shadow-2xl opacity-90 font-serif mix-blend-color-dodge"
                                    style={{ textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                                    TIBEB
                                </h1>
                                <p className="text-3xl font-bold text-amber-50 tracking-[0.4em] mt-4 opacity-90 uppercase font-serif drop-shadow-lg text-right pl-4 border-r-4 border-amber-500/50 pr-4">
                                    Of the Ancients
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Text Fallback */}
                    <div className="lg:hidden absolute bottom-32 w-full text-center z-40">
                        <h1 className="text-6xl font-black text-amber-400 drop-shadow-md font-serif">TIBEB</h1>
                    </div>

                </div>

            </div>

            {/* Category Filter Bar */}
            <div className="relative z-40 -mt-10 flex justify-center px-4 mb-8">
                <div className="flex flex-wrap justify-center gap-6 bg-transparent p-4">
                    <CategoryPill
                        icon={<Scroll className="w-6 h-6 text-amber-700" />}
                        label="የዕለት ማስነገሪያዎች"
                        subLabel="Daily Qene"
                        onClick={() => onNavigate?.('daily')}
                    />
                    <CategoryPill
                        icon={<Moon className="w-6 h-6 text-indigo-900" />}
                        label="ወርኃዊ በዓላት"
                        subLabel="Monthly"
                        onClick={() => onNavigate?.('monthly')}
                    />
                    <CategoryPill
                        icon={<Crown className="w-6 h-6 text-amber-600" />}
                        label="ዓመታዊ በዓላት"
                        subLabel="Annual Feasts"
                        onClick={() => onNavigate?.('annual')}
                    />
                    <CategoryPill
                        icon={<Flower className="w-6 h-6 text-emerald-700" />}
                        label="አጽዋማት"
                        subLabel="Fasts"
                        onClick={() => onNavigate?.('fasts')}
                    />
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


const CategoryPill = ({ icon, label, subLabel, onClick }: { icon: any, label: string, subLabel?: string, onClick?: () => void }) => (
    <button onClick={onClick} className="relative overflow-hidden flex items-center gap-4 bg-[#fdfbf7] px-8 py-4 rounded-xl shadow-md cursor-pointer group transition-all duration-300 border border-amber-900/10 hover:border-amber-500/50 hover:shadow-xl hover:-translate-y-1 min-w-[200px]">
        {/* Hover Highlight */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50/0 via-amber-100/30 to-amber-50/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none"></div>

        <div className="w-12 h-12 rounded-full bg-white border border-amber-100 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 group-hover:border-amber-300 transition-all duration-300">
            {icon}
        </div>
        <div className="flex flex-col items-start">
            <span className="font-bold text-[#2c1a1d] text-lg leading-tight group-hover:text-amber-800 transition-colors font-serif">{label}</span>
            {subLabel && <span className="text-xs text-slate-500 uppercase tracking-wider font-sans group-hover:text-amber-700/70">{subLabel}</span>}
        </div>
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

const MenuLink = ({ label, subLabel, onClick, delay, isActive }: { label: string, subLabel: string, onClick: () => void, delay: string, isActive?: boolean }) => (
    <button
        onClick={onClick}
        className="group relative flex items-center w-full pl-8 animate-slide-up"
        style={{ animationDelay: delay, animationFillMode: 'both' }}
    >
        {/* Hover Indicator Dot */}
        <span className="absolute left-[3px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_rgba(212,175,55,0.8)]"></span>

        <div className="flex flex-col items-start gap-1 transition-transform duration-300 group-hover:translate-x-4">
            <span
                className={`text-2xl md:text-3xl font-serif font-medium transition-colors duration-300 ${isActive ? 'text-amber-400' : 'text-slate-300 group-hover:text-amber-100'}`}
            >
                {label}
            </span>
            <span className="text-xs text-amber-500/50 uppercase tracking-[0.15em] font-sans group-hover:text-amber-500 transition-colors">
                {subLabel}
            </span>
        </div>
    </button>
);

export default ExploreHero;
