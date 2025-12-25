'use client';

import React, { useState, useRef } from 'react';
import { BookOpen, Calendar, Sun, Moon, Search, ChevronRight, Home, Feather, Star, Flower, Crown } from 'lucide-react';
import { dailyMasnegeria, monthlyHolidays, annualHolidays, fasts, seasons, stMichaelMonthlyData, stMaryMonthlyData } from '../src/data';
import ExploreHero from './components/ExploreHero';
import Footer from './components/Footer';

const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => (
    <div className="search-box">
        <input
            type="text"
            placeholder="ፈልግ (Search)..."
            onChange={(e) => onSearch(e.target.value)}
        />
        <div className="search-icon-wrapper">
            <Search className="search-icon" />
        </div>
    </div>
);

function App() {
    const [activeTab, setActiveTab] = useState('home');
    const [selectedItem, setSelectedItem] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const mainContentRef = useRef<HTMLElement>(null);

    const handleHeroNavigate = (tab: string) => {
        setActiveTab(tab);
        setSelectedItem(null);
        setTimeout(() => {
            mainContentRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    // Search Logic
    const handleSearch = (query: string) => {
        setSearchQuery(query);
        if (query.trim()) {
            setActiveTab('search_results');
            setTimeout(() => {
                mainContentRef.current?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            if (activeTab === 'search_results') setActiveTab('home');
        }
    };

    const renderContent = () => {
        if (selectedItem) {
            return (
                <DetailView
                    item={selectedItem}
                    onBack={() => setSelectedItem(null)}
                />
            );
        }

        if (activeTab === 'search_results') {
            // Aggregate all searchable content
            const allItems = [...dailyMasnegeria, ...monthlyHolidays, ...annualHolidays];
            const results = allItems.filter((item: any) => {
                const q = searchQuery.toLowerCase();
                return (
                    (item.title && item.title.toLowerCase().includes(q)) ||
                    (item.titleEnglish && item.titleEnglish.toLowerCase().includes(q)) ||
                    (item.dayAmharic && item.dayAmharic.includes(q)) ||
                    (item.dayEnglish && item.dayEnglish.toLowerCase().includes(q)) ||
                    (item.description && item.description.toLowerCase().includes(q))
                );
            });

            return (
                <div className="list-container animate-fade-in">
                    <h2>የፍለጋ ውጤቶች: "{searchQuery}"</h2>
                    {results.length > 0 ? (
                        <div className="list-stack">
                            {results.map((item: any, idx) => (
                                <div key={idx} className="list-card" onClick={() => setSelectedItem(item)}>
                                    <div className="list-icon">🔍</div>
                                    <div className="list-info">
                                        <h3>{item.title || item.dayAmharic || `Day ${item.day}`}</h3>
                                        <span>{item.titleEnglish}</span>
                                    </div>
                                    <ChevronRight size={16} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p style={{ textAlign: 'center', marginTop: '2rem' }}>ወይኔ! ምንም አልተገኘም። (No results found)</p>
                    )}
                </div>
            );
        }

        switch (activeTab) {
            case 'home':
                return <HomeDashboard onNavigate={setActiveTab} onSelect={setSelectedItem} />;
            case 'daily':
                return <DailyList onSelect={setSelectedItem} />;
            case 'monthly':
                return <MonthlyGrid onSelect={setSelectedItem} />;
            case 'annual':
                return <AnnualList onSelect={setSelectedItem} />;
            case 'fasts':
                return <FastsList onSelect={setSelectedItem} />;
            default:
                return <HomeDashboard onNavigate={setActiveTab} onSelect={setSelectedItem} />;
        }
    };

    return (
        <div className="root-layout font-sans">
            <ExploreHero onNavigate={handleHeroNavigate} />

            <div className="app-container">
                {/* Sidebar for Desktop / Header for Mobile */}
                <header className="app-header">
                    <div className="logo-area" onClick={() => { setActiveTab('home'); setSearchQuery(''); }}>
                        <Feather className="icon-gold" size={28} />
                        <h1>ቅኔ መቁጠሪያ</h1>
                    </div>

                    <SearchBar onSearch={handleSearch} />

                    {/* Desktop Navigation embedded in Sidebar */}
                    <nav className="desktop-nav">
                        <div className="nav-section-wrapper">
                            <span className="nav-divider-line"></span>
                            <div className="nav-section-title">🥀 ቅኔ ማስነገሪያ ታሪኮች 🥀</div>
                            <span className="nav-divider-line"></span>
                        </div>
                        <NavItem icon={<Sun size={20} />} label="🍄የዕለት ማስነገሪያዎች" isActive={activeTab === 'daily'} onClick={() => { setActiveTab('daily'); setSelectedItem(null); }} />
                        <NavItem icon={<BookOpen size={20} />} label="🍄 አጽዋማት" isActive={activeTab === 'fasts'} onClick={() => { setActiveTab('fasts'); setSelectedItem(null); }} />
                        <NavItem icon={<Calendar size={20} />} label="🍄ወርኃ በዓላት" isActive={activeTab === 'monthly'} onClick={() => { setActiveTab('monthly'); setSelectedItem(null); }} />
                        <NavItem icon={<Star size={20} />} label="🍄ዓመታዊ በዓላት" isActive={activeTab === 'annual'} onClick={() => { setActiveTab('annual'); setSelectedItem(null); }} />
                    </nav>
                </header>

                <main className="app-main" ref={mainContentRef}>
                    {renderContent()}
                </main>

                {/* Mobile Bottom Nav */}
                <nav className="bottom-nav">
                    <NavItem icon={<Home size={20} />} label="መነሻ" isActive={activeTab === 'home'} onClick={() => { setActiveTab('home'); setSelectedItem(null); }} />
                    <NavItem icon={<Sun size={20} />} label="የዕለት" isActive={activeTab === 'daily'} onClick={() => { setActiveTab('daily'); setSelectedItem(null); }} />
                    <NavItem icon={<Calendar size={20} />} label="ወርኃዊ" isActive={activeTab === 'monthly'} onClick={() => { setActiveTab('monthly'); setSelectedItem(null); }} />
                    <NavItem icon={<Star size={20} />} label="ዓመታዊ" isActive={activeTab === 'annual'} onClick={() => { setActiveTab('annual'); setSelectedItem(null); }} />
                </nav>
            </div>

            <Footer />
        </div>
    );
}

const NavItem = ({ icon, label, isActive, onClick }: { icon: any, label: string, isActive: boolean, onClick: () => void }) => (
    <button className={`nav-item ${isActive ? 'active' : ''}`} onClick={onClick}>
        {icon}
        <span>{label}</span>
    </button>
);


const HomeDashboard = ({ onNavigate, onSelect }) => {
    // Mock "Today" logic
    const today = new Date();
    const dayName = today.toLocaleDateString('en-US', { weekday: 'long' });
    const ethDay = dailyMasnegeria.find(d => d.dayEnglish === dayName) || dailyMasnegeria[0];

    return (
        <div className="dashboard animate-fade-in">
            {/* New Website Hero Banner */}
            {/* Only show the internal hero if we are NOT on the home tab, or if we want a different featured item. 
                Since ExploreHero is already huge, let's keep this as a secondary "Word of the Day" card but smaller, 
                or hide it to reduce redundancy. Let's make it a smaller "Featured Qene" card. 
            */}
            <section className="hero-wrapper" onClick={() => onSelect(ethDay)} style={{ minHeight: '300px', marginBottom: '2rem' }}>
                <span className="hero-badge">የዕለቱ ቃል</span>
                <h2 className="hero-title" style={{ fontSize: '2.5rem' }}>{ethDay.dayAmharic}</h2>
                <p className="hero-subtitle">{ethDay.title}</p>
                <button className="hero-cta" onClick={(e) => { e.stopPropagation(); onNavigate('daily'); }}>
                    ሙሉውን አንብብ
                </button>
            </section>

            <section className="section-title">
                <h3>ፈጣን መዳረሻ</h3>
            </section>

            <div className="bento-grid">
                <div className="bento-item card-gold-img" style={{ backgroundImage: "linear-gradient(rgba(44, 26, 29, 0.4), rgba(44, 26, 29, 0.6)), url('/card-daily.png')" }} onClick={() => onNavigate('daily')}>
                    <Sun size={40} />
                    <span>የዕለት ማስነገሪያ</span>
                </div>
                <div className="bento-item card-dark-img" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('/card-monthly.png')" }} onClick={() => onNavigate('monthly')}>
                    <Moon size={40} />
                    <span>ወርኃ በዓላት</span>
                </div>
                <div className="bento-item card-parchment-img" style={{ backgroundImage: "linear-gradient(rgba(242, 232, 207, 0.4), rgba(44, 26, 29, 0.6)), url('/card-annual.png')" }} onClick={() => onNavigate('annual')}>
                    <Calendar size={40} />
                    <span>ዓመታዊ በዓላት</span>
                </div>
                <div className="bento-item card-red-img" style={{ backgroundImage: "linear-gradient(rgba(139, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url('/card-fasts.png')" }} onClick={() => onNavigate('fasts')}>
                    <BookOpen size={40} />
                    <span>አጽዋማት</span>
                </div>
            </div>
        </div>
    );
};

const DailyList = ({ onSelect }) => (
    <div className="list-container animate-slide-up">
        <h2>የዕለት ማስነገሪያዎች</h2>
        <div className="list-stack">
            {dailyMasnegeria.map((day) => (
                <div key={day.id} className="list-card" onClick={() => onSelect(day)}>
                    <div className="list-icon">✥</div>
                    <div className="list-info">
                        <h3>{day.dayAmharic}</h3>
                        <span>{day.title}</span>
                    </div>
                    <ChevronRight size={16} className="arrow" />
                </div>
            ))}
        </div>
    </div>
);

const MonthlyGrid = ({ onSelect }) => (
    <div className="grid-container animate-slide-up">
        <h2>ወርኃ በዓላት</h2>
        <div className="calendar-grid">
            {monthlyHolidays.map((day) => (
                <div key={day.day} className="day-cell" onClick={() => onSelect(day)}>
                    <span className="day-number">{day.day}</span>
                    <span className="day-event">{day.title.split("/")[0]}</span>
                </div>
            ))}
        </div>
    </div>
);

const AnnualList = ({ onSelect }) => (
    <div className="list-container animate-slide-up">
        <h2>ዓመታዊ በዓላት</h2>
        <div className="timeline">
            {annualHolidays.map((holiday, idx) => (
                <div key={idx} className="timeline-item" onClick={() => onSelect(holiday)}>
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <span className="date-badge">{holiday.month} {holiday.day}</span>
                        <h3>{holiday.title}</h3>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const FastsList = ({ onSelect }: { onSelect: (item: any) => void }) => {
    // Group fasts by parentSection
    const grouped: Record<string, any[]> = {};
    const standalone: any[] = [];

    fasts.forEach((fast: any, idx: number) => {
        if (fast.parentSection) {
            if (!grouped[fast.parentSection]) {
                grouped[fast.parentSection] = [];
            }
            grouped[fast.parentSection].push({ ...fast, originalIndex: idx });
        } else {
            standalone.push({ ...fast, originalIndex: idx });
        }
    });

    return (
        <div className="list-container animate-slide-up">
            <h2>አጽዋማት</h2>
            <div className="fasts-grid">
                {/* Render standalone fasts first (before Great Lent) */}
                {standalone.filter(f => f.originalIndex < 6).map((fast, idx) => (
                    <div key={`s-${idx}`} className="fast-card" onClick={() => onSelect(fast)} style={{ cursor: 'pointer' }}>
                        <div className="fast-header">
                            <div className="fast-icon"><Flower className="w-6 h-6" /></div>
                            <h3>{fast.title}</h3>
                        </div>
                    </div>
                ))}

                {/* Render grouped sections (Great Lent) */}
                {Object.entries(grouped).map(([sectionName, items]) => (
                    <div key={sectionName} className="fast-section-group">
                        <div className="section-header">
                            <div className="section-icon"><Crown className="w-12 h-12 text-amber-500" /></div>
                            <h3>{sectionName}</h3>
                            <span className="section-badge">{items.length} ሳምንታት</span>
                        </div>
                        <div className="section-children">
                            {items.map((fast, idx) => (
                                <div key={idx} className="fast-card child-card" onClick={() => onSelect(fast)} style={{ cursor: 'pointer' }}>
                                    <div className="fast-header">
                                        <div className="fast-icon child-icon"><Star className="w-4 h-4" /></div>
                                        <h3>{fast.title}</h3>
                                    </div>
                                    {fast.titleEnglish && <span className="week-english">{fast.titleEnglish}</span>}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Render remaining standalone fasts (after Great Lent) */}
                {standalone.filter(f => f.originalIndex >= 6).map((fast, idx) => (
                    <div key={`e-${idx}`} className="fast-card" onClick={() => onSelect(fast)} style={{ cursor: 'pointer' }}>
                        <div className="fast-header">
                            <div className="fast-icon"><Flower className="w-6 h-6" /></div>
                            <h3>{fast.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const DetailView = ({ item, onBack }: { item: any, onBack: () => void }) => {
    // Local state to track if a specific sub-event is selected
    const [activeSelection, setActiveSelection] = useState<any>(null);

    // Scroll to specific section if requested
    React.useEffect(() => {
        if (item.scrollTo) {
            const timer = setTimeout(() => {
                const elements = document.getElementsByTagName('h4');
                for (let el of elements) {
                    if (el.textContent?.includes(item.scrollTo)) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        el.style.backgroundColor = 'rgba(212, 175, 55, 0.2)';
                        el.style.borderRadius = '4px';
                        setTimeout(() => el.style.backgroundColor = 'transparent', 2000);
                        break;
                    }
                }
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [item]);

    // Handle deep navigation back
    const handleBack = () => {
        if (activeSelection) {
            // Check if we are deeper in a hierarchy (e.g. Month -> St Michael)
            if (activeSelection.parent) {
                setActiveSelection(activeSelection.parent);
            } else {
                setActiveSelection(null); // Go back to Day view
            }
        } else {
            onBack(); // Go back to List view
        }
    };

    // Handle Link Click (Navigation to Month)
    const handleLinkClick = (linkString: string, parentItem: any) => {
        const parts = linkString.split('~');
        const monthName = parts[1] || parts[0];
        const isMary = parentItem.title && parentItem.title.includes("ማርያም");

        let monthlyContent;

        if (isMary) {
            monthlyContent = stMaryMonthlyData[monthName] || {
                title: `ቅድስት ድንግል ማርያም - ${monthName}`,
                description: `የ${monthName} ወር የቅድስት ድንግል ማርያም በዓል ታሪክ በቅርቡ ይካተታል።`,
                qeneThemes: ["ዝርዝር ታሪኩ እና ቅኔው በሂደት ላይ ነው..."]
            };
        } else {
            // Default to St Michael
            monthlyContent = stMichaelMonthlyData[monthName] || {
                title: `ቅዱስ ሚካኤል - ${monthName}`,
                description: `የ${monthName} ወር የቅዱስ ሚካኤል በዓል ማስነገሪያ ታሪክ በቅርቡ ይካተታል።`,
                qeneThemes: ["ዝርዝር ታሪኩ እና ቅኔው በሂደት ላይ ነው..."]
            };
        }

        const newSelection = {
            ...monthlyContent,
            parent: parentItem // Save specific parent to return to
        };
        setActiveSelection(newSelection);
    };

    // Determine what to display
    const displayItem = activeSelection || item;
    const isSubView = !!activeSelection;

    // Check if the current item has a list of events to display (only if not already deep in a sub-view that shouldn't show them)
    // If we are looking at "Saint Michael", we show LINKS, not the generic event list again.
    // The generic event list is usually only for the top-level Day item.
    const showEventList = item.events && !activeSelection;

    return (
        <div className="detail-view animate-scale-in">
            <button className="back-btn" onClick={handleBack}>
                ← {isSubView ? "ተመለስ" : "ወደ በዓላት ዝርዝር"}
            </button>
            <div className="detail-scroll">
                <div className="detail-header">
                    <div className="ornament-top"></div>
                    <h1>{displayItem.title || displayItem.dayAmharic || `ቀን ${displayItem.day}`}</h1>
                    {(displayItem.titleEnglish || displayItem.dayEnglish) && (
                        <span className="subtitle">{displayItem.titleEnglish || displayItem.dayEnglish}</span>
                    )}
                </div>

                <div className="detail-body">
                    {displayItem.description && (
                        <div className="story-block">
                            <p className="drop-cap">{displayItem.description}</p>
                        </div>
                    )}

                    {displayItem.qeneThemes && (
                        <div className="qene-box">
                            <h3>ለቅኔ የሚያስነግረው</h3>
                            <div className="qene-list">
                                {displayItem.qeneThemes.map((theme: string, i: number) => {
                                    if (theme.match(/^[🍂🌿🍄🌴🌹☘️]/)) return <h4 key={i} className="theme-sub-header">{theme}</h4>;
                                    if (theme.includes("መልካም") && theme.includes("ቆጠራ") || (theme.includes("በረከ") && (theme.includes("ትደር") || theme.includes("ተካፋዮች"))) || theme.includes("አምላካችን መድኃኔ ዓለም") || theme.includes("ጥንተ ልደቱ") || theme.includes("༺")) return <div key={i} className="theme-footer">{theme}</div>;
                                    if (theme.includes("ንጽጽር") || theme.includes("አንጻር")) return <h4 key={i} className="theme-sub-header">⚖️ {theme}</h4>;
                                    const hasArrow = theme.trim().startsWith("➥") || theme.trim().startsWith("👉") || theme.trim().startsWith("➙") || theme.trim().startsWith("⚡️") || theme.trim().startsWith("🦋") || theme.trim().startsWith("➺");
                                    return <li key={i} className={hasArrow ? "no-bullet" : ""} style={hasArrow ? { listStyleType: 'none', paddingLeft: 0 } : {}}>{theme}</li>;
                                })}
                            </div>
                        </div>
                    )}

                    {displayItem.additionalEvents && displayItem.additionalEvents.map((evt: any, idx: number) => (
                        <div key={idx} style={{ marginTop: '3rem', borderTop: '2px dashed rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
                            <h2 style={{ color: '#ffd700', fontSize: '1.6rem', marginBottom: '1rem', textAlign: 'center' }}>{evt.title}</h2>
                            {evt.description && (
                                <div className="story-block">
                                    <p className="drop-cap">{evt.description}</p>
                                </div>
                            )}
                            {evt.qeneThemes && (
                                <div className="qene-box">
                                    <h3>ለቅኔ የሚያስነግረው</h3>
                                    <div className="qene-list">
                                        {evt.qeneThemes.map((theme: string, i: number) => {
                                            if (theme.match(/^[🍂🌿🍄🌴🌹☘️]/)) return <h4 key={i} className="theme-sub-header">{theme}</h4>;
                                            if (theme.includes("መልካም") && theme.includes("ቆጠራ") || (theme.includes("በረከ") && (theme.includes("ትደር") || theme.includes("ተካፋዮች"))) || theme.includes("አምላካችን መድኃኔ ዓለም") || theme.includes("ጥንተ ልደቱ") || theme.includes("༺")) return <div key={i} className="theme-footer">{theme}</div>;
                                            if (theme.includes("ንጽጽር") || theme.includes("አንጻር")) return <h4 key={i} className="theme-sub-header">⚖️ {theme}</h4>;
                                            const hasArrow = theme.trim().startsWith("➥") || theme.trim().startsWith("👉") || theme.trim().startsWith("➙") || theme.trim().startsWith("⚡️") || theme.trim().startsWith("🦋") || theme.trim().startsWith("➺");
                                            return <li key={i} className={hasArrow ? "no-bullet" : ""} style={hasArrow ? { listStyleType: 'none', paddingLeft: 0 } : {}}>{theme}</li>;
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}

                    {displayItem.links && (
                        <div className="qene-box" style={{ marginTop: '2rem' }}>
                            {displayItem.linksTitle && <h3>{displayItem.linksTitle}</h3>}
                            <div className="qene-list">
                                {displayItem.links.map((link: string, i: number) => {
                                    const parts = link.split('~');
                                    return (
                                        <div
                                            key={i}
                                            className="link-row"
                                            onClick={() => handleLinkClick(link, displayItem)}
                                            style={{
                                                padding: '0.8rem',
                                                borderBottom: '1px solid rgba(255,255,255,0.1)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                cursor: 'pointer',
                                                transition: 'background 0.2s'
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'}
                                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                        >
                                            <span style={{
                                                fontWeight: 'bold',
                                                color: 'var(--text-gold)',
                                                marginRight: '1rem',
                                                minWidth: '24px'
                                            }}>{parts[0]}</span>
                                            <span style={{
                                                textDecoration: 'underline',
                                                textUnderlineOffset: '4px',
                                                fontSize: '1.1rem',
                                                flex: 1
                                            }}>{parts[1]}</span>
                                            <ChevronRight size={16} opacity={0.6} />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {showEventList && (
                        <div className="events-list-selection">
                            <h3 style={{ borderBottom: '1px solid var(--border-gold)', paddingBottom: '0.5rem', marginBottom: '1rem', color: 'var(--text-gold)' }}>
                                በዚህ ዕለት የሚከበሩ በዓላት
                            </h3>
                            <div className="list-stack">
                                {item.events.map((ev: any, i: number) => (
                                    <div
                                        key={i}
                                        className="list-card event-selector"
                                        onClick={() => setActiveSelection(ev)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <div className="list-icon">✥</div>
                                        <div className="list-info">
                                            <h3>{ev.title || ev}</h3>
                                            {ev.description && <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>ዝርዝር ታሪክ አለው</span>}
                                        </div>
                                        <ChevronRight size={16} className="arrow" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
