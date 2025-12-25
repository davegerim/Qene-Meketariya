import React from 'react';
import { Feather, Linkedin, Send } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative z-50 bg-[#1a120b] text-amber-50/80 pt-16 pb-8 border-t border-amber-500/20 mt-auto w-full">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

                {/* Column 1: The Source (Mission) */}
                <div className="flex flex-col items-center md:items-start space-y-4">
                    <div className="flex items-center gap-2">
                        <Feather className="w-10 h-10 text-amber-400" />
                        <h3 className="text-3xl font-bold font-serif text-amber-500 tracking-wider drop-shadow-md">QENE</h3>
                    </div>
                    <p className="text-sm leading-relaxed max-w-xs font-light text-amber-50/90">
                        Preserving the sacred wisdom of the ancients for the generation of tomorrow.
                        <span className="block mt-2 italic text-amber-400">"The ink of the scholar is holier than the blood of the martyr."</span>
                    </p>
                </div>

                {/* Column 2: The Connection (Community) */}
                <div className="flex flex-col items-center space-y-6">
                    <h4 className="text-lg font-bold uppercase tracking-[0.2em] text-amber-500 border-b border-amber-400/50 pb-2 shadow-sm">Community Circles</h4>
                    <div className="flex gap-6">
                        <a href="https://t.me/D4vv4" target="_blank" rel="noopener noreferrer" className="group relative p-3 rounded-full bg-white/5 hover:bg-amber-500/20 transition-all duration-300 border border-white/10 hover:border-amber-500/50">
                            <span className="sr-only">Telegram</span>
                            <Send className="w-5 h-5 text-slate-300 group-hover:text-amber-400 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="https://www.linkedin.com/in/dawit-gerim-6086b3211/" target="_blank" rel="noopener noreferrer" className="group relative p-3 rounded-full bg-white/5 hover:bg-amber-500/20 transition-all duration-300 border border-white/10 hover:border-amber-500/50">
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-amber-400" />
                        </a>
                    </div>
                </div>

                {/* Column 3: The Credits (Service w/ Ge'ez Date) */}
                <div className="flex flex-col items-center md:items-end space-y-4">
                    <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">Established</span>
                    <span className="text-2xl font-serif text-amber-100">2018 E.C.</span>
                    <div className="text-xs text-slate-500 flex flex-col items-center md:items-end">
                        <span className="text-slate-400">Addis Ababa, Ethiopia</span>
                        <span className="opacity-50 mt-1">© 2025 Qene Masenegeriya</span>

                        <div className="mt-4 flex flex-col items-center md:items-end gap-1 border-t border-white/5 pt-2 w-full md:w-auto">
                            <span className="text-[10px] uppercase tracking-wider opacity-40">Developed by</span>
                            <a href="mailto:davegerim@gmail.com" className="hover:text-amber-400 transition-colors">davegerim@gmail.com</a>
                            <a href="tel:0985392862" className="hover:text-amber-400 transition-colors">0985392862</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar: The Daily Verse */}
            <div className="mt-12 border-t border-white/5 pt-6 text-center">
                <div className="flex flex-col gap-2 max-w-2xl mx-auto px-6">
                    <p className="text-sm md:text-base font-serif text-amber-200/80">
                        "ያልተማረ ይማር፣ የተማረ ያስተምር።"
                    </p>
                    <p className="text-xs md:text-sm font-serif italic text-amber-500/60">
                        "He who learns, teaches. He who teaches, learns." — <span className="text-amber-500">Ethiopian Proverb</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
