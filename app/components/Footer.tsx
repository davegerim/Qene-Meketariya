import React from 'react';
import { Feather } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative z-50 bg-[#1a120b] text-amber-50/80 pt-16 pb-8 border-t border-amber-500/20 mt-auto w-full">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

                {/* Column 1: The Source (Mission) */}
                <div className="flex flex-col items-center md:items-start space-y-4">
                    <div className="flex items-center gap-2">
                        <Feather className="w-6 h-6 text-amber-500" />
                        <h3 className="text-xl font-bold font-serif text-amber-400 tracking-wider">QENE</h3>
                    </div>
                    <p className="text-sm leading-relaxed max-w-xs font-light">
                        Preserving the sacred wisdom of the ancients for the generation of tomorrow.
                        <span className="block mt-2 italic text-amber-500/60">"The ink of the scholar is holier than the blood of the martyr."</span>
                    </p>
                </div>

                {/* Column 2: The Connection (Community) */}
                <div className="flex flex-col items-center space-y-6">
                    <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-amber-500/70 border-b border-amber-500/20 pb-2">Community Circles</h4>
                    <div className="flex gap-6">
                        <a href="#" className="group relative p-3 rounded-full bg-white/5 hover:bg-amber-500/20 transition-all duration-300 border border-white/10 hover:border-amber-500/50">
                            <span className="sr-only">Telegram</span>
                            <svg className="w-5 h-5 fill-current text-slate-300 group-hover:text-amber-400" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.62 0zm4.91 5.62a3 3 0 0 1 .84.18l-8.12 11.8a2.98 2.98 0 0 1-.84-.18l-2.8-5.6a2.98 2.98 0 0 1 .42-3.8l9.6-3.8a2.98 2.98 0 0 1 .9.18z" /></svg>
                        </a>
                        <a href="#" className="group relative p-3 rounded-full bg-white/5 hover:bg-amber-500/20 transition-all duration-300 border border-white/10 hover:border-amber-500/50">
                            <span className="sr-only">YouTube</span>
                            <svg className="w-5 h-5 fill-current text-slate-300 group-hover:text-amber-400" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                        </a>
                    </div>
                </div>

                {/* Column 3: The Credits (Service w/ Ge'ez Date) */}
                <div className="flex flex-col items-center md:items-end space-y-4">
                    <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">Established</span>
                    <span className="text-2xl font-serif text-amber-100">2017 E.C.</span>
                    <div className="text-xs text-slate-500 flex flex-col items-center md:items-end">
                        <span>Addis Ababa, Ethiopia</span>
                        <span className="opacity-50 mt-1">© 2024 Qene Masenegeriya</span>
                    </div>
                </div>
            </div>

            {/* Bottom Bar: The Daily Verse */}
            <div className="mt-12 border-t border-white/5 pt-6 text-center">
                <p className="text-xs md:text-sm font-serif italic text-amber-500/60 max-w-2xl mx-auto px-6">
                    "He who learns, teaches. He who teaches, learns." — <span className="text-amber-500">Ethiopian Proverb</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
