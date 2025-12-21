import React from 'react';
import { Globe, Menu, Mountain, Tent, TreePine, Sun, Umbrella } from 'lucide-react';
import Image from 'next/image';

const ExploreHero = () => {
    return (
        <div className="w-full relative bg-white font-sans text-slate-800 overflow-hidden shadow-2xl border-b border-slate-200">
            {/* Hero Section */}
            <div className="relative min-h-[800px] w-full overflow-hidden bg-slate-900">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    {/* Using a placeholder or the generated background if available */}
                    <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-900/60 to-cyan-900/40 mix-blend-multiply" />
                </div>

                {/* Navigation */}
                <nav className="relative z-50 flex items-center justify-between px-8 py-6 text-white max-w-7xl mx-auto">
                    <div className="flex items-center gap-1 text-2xl font-bold tracking-tight">
                        Expl<Globe className="w-6 h-6 text-cyan-300" />reist
                    </div>
                    <div className="hidden md:flex items-center gap-8 font-medium">
                        <a href="#" className="hover:text-cyan-300 transition">Home</a>
                        <a href="#" className="hover:text-cyan-300 transition">Blog</a>
                        <a href="#" className="hover:text-cyan-300 transition">About</a>
                        <a href="#" className="hover:text-cyan-300 transition">Contact</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <Menu className="w-8 h-8 cursor-pointer hover:text-cyan-300" />
                    </div>
                </nav>

                {/* Main Hero Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 pt-12 pb-32 flex flex-col md:flex-row items-center justify-between min-h-[600px]">

                    {/* Cards Container (Left/Center) */}
                    <div className="relative flex gap-4 md:gap-6 items-center justify-center w-full md:w-2/3 [perspective:1000px] pl-4 md:pl-0">

                        {/* Card 1 - Palm */}
                        <div className="relative w-32 h-56 md:w-48 md:h-72 rounded-xl overflow-hidden shadow-2xl transform translate-y-12 transition hover:-translate-y-2 duration-500 z-30 ring-1 ring-white/20">
                            <img src="/card-palm.png" alt="Tropical" className="w-full h-full object-cover" />
                        </div>

                        {/* Card 2 - Hiker */}
                        <div className="relative w-32 h-56 md:w-48 md:h-72 rounded-xl overflow-hidden shadow-2xl transform -translate-y-8 transition hover:-translate-y-12 duration-500 z-30 ring-1 ring-white/20">
                            <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=900&fit=crop" alt="Hiker" className="w-full h-full object-cover" />
                        </div>

                        {/* Card 3 - Temple */}
                        <div className="relative w-32 h-56 md:w-48 md:h-72 rounded-xl overflow-hidden shadow-2xl transform translate-y-4 transition hover:-translate-y-4 duration-500 z-30 ring-1 ring-white/20">
                            <img src="https://images.unsplash.com/photo-1568693059-98ff2633d611?w=600&h=900&fit=crop" alt="Temple" className="w-full h-full object-cover" />
                        </div>

                        {/* Card 4 - Venice */}
                        <div className="relative w-32 h-56 md:w-48 md:h-72 rounded-xl overflow-hidden shadow-2xl transform -translate-y-12 transition hover:-translate-y-16 duration-500 z-30 ring-1 ring-white/20">
                            <img src="https://images.unsplash.com/photo-1520116468982-d3d20fc8d5af?w=600&h=900&fit=crop" alt="Venice" className="w-full h-full object-cover" />
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
                        <h1 className="text-[14rem] font-black text-white leading-none tracking-tighter drop-shadow-lg opacity-90"
                            style={{ textShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
                            EXPLORE
                        </h1>
                        <p className="text-4xl font-bold text-white tracking-[0.6em] mr-8 mt-2 opacity-90 uppercase">
                            The World
                        </p>
                    </div>

                    {/* Mobile Text Fallback */}
                    <div className="lg:hidden absolute bottom-32 w-full text-center z-40">
                        <h1 className="text-6xl font-black text-white drop-shadow-md">EXPLORE</h1>
                    </div>

                </div>

            </div>

            {/* Category Filter Bar */}
            <div className="relative z-40 -mt-10 flex justify-center px-4">
                <div className="flex flex-wrap justify-center gap-4 bg-transparent p-2">
                    <CategoryPill icon={<Mountain className="w-5 h-5 text-cyan-600" />} label="Hiking" />
                    <CategoryPill icon={<Sun className="w-5 h-5 text-amber-600" />} label="Desert" />
                    <CategoryPill icon={<TreePine className="w-5 h-5 text-green-600" />} label="Forest" />
                    <CategoryPill icon={<Tent className="w-5 h-5 text-orange-600" />} label="Camping" />
                    <CategoryPill icon={<Umbrella className="w-5 h-5 text-blue-600" />} label="Beach" />
                </div>
            </div>

            {/* Featured Article Section */}
            <div className="bg-white pt-24 pb-16 px-4 md:px-12">
                <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Featured Article</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    <FeatureCard
                        img="/feat-dubai.png"
                        title="Future Cityscapes"
                        location="Dubai"
                    />
                    <FeatureCard
                        img="/feat-forest.png"
                        title="Deep Forest Secrets"
                        location="Amazon"
                    />
                    <FeatureCard
                        img="/feat-alps.png"
                        title="Alpine Adventures"
                        location="Swiss Alps"
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
    <div className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300">
        <img src={img} alt={title} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition duration-300">
            <span className="text-cyan-300 font-bold text-sm tracking-uppercase mb-2 block">{location}</span>
            <h3 className="text-white text-2xl font-bold">{title}</h3>
        </div>
    </div>
);

export default ExploreHero;
