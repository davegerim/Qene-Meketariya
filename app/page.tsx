'use client';

import React, { useState } from 'react';
import { BookOpen, Calendar, Sun, Moon, Search, ChevronRight, Home, Feather, Star } from 'lucide-react';
import { dailyMasnegeria, monthlyHolidays, annualHolidays, fasts, seasons } from '../src/data';
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

    // Search Logic
    const handleSearch = (query: string) => {
        setSearchQuery(query);
        if (query.trim()) {
            setActiveTab('search_results');
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
                return <FastsList />;
            default:
                return <HomeDashboard onNavigate={setActiveTab} onSelect={setSelectedItem} />;
        }
    };

    return (
        <div className="root-layout font-sans">
            <ExploreHero />

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
                        <NavItem icon={<Home size={20} />} label="መነሻ (Home)" isActive={activeTab === 'home'} onClick={() => { setActiveTab('home'); setSelectedItem(null); }} />
                        <NavItem icon={<Sun size={20} />} label="የዕለት (Daily)" isActive={activeTab === 'daily'} onClick={() => { setActiveTab('daily'); setSelectedItem(null); }} />
                        <NavItem icon={<Calendar size={20} />} label="ወርኃዊ (Monthly)" isActive={activeTab === 'monthly'} onClick={() => { setActiveTab('monthly'); setSelectedItem(null); }} />
                        <NavItem icon={<Star size={20} />} label="ዓመታዊ (Annual)" isActive={activeTab === 'annual'} onClick={() => { setActiveTab('annual'); setSelectedItem(null); }} />
                        <NavItem icon={<BookOpen size={20} />} label="አጽዋማት (Fasts)" isActive={activeTab === 'fasts'} onClick={() => { setActiveTab('fasts'); setSelectedItem(null); }} />
                    </nav>
                </header>

                <main className="app-main">
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
                        <p>{holiday.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const FastsList = () => (
    <div className="list-container animate-slide-up">
        <h2>አጽዋማት</h2>
        <div className="fasts-grid">
            {fasts.map((fast, idx) => (
                <div key={idx} className="fast-card">
                    <div className="fast-icon">✞</div>
                    <h3>{fast.title}</h3>
                    <span className="fast-duration">{fast.duration}</span>
                </div>
            ))}
        </div>
    </div>
);

const DetailView = ({ item, onBack }) => (
    <div className="detail-view animate-scale-in">
        <button className="back-btn" onClick={onBack}>← ተመለስ</button>
        <div className="detail-scroll">
            <div className="detail-header">
                <div className="ornament-top"></div>
                <h1>{item.dayAmharic || item.title || `ቀን ${item.day}`}</h1>
                {item.dayEnglish && <span className="subtitle">{item.dayEnglish}</span>}
            </div>

            <div className="detail-body">
                {item.description && (
                    <div className="story-block">
                        <p className="drop-cap">{item.description}</p>
                    </div>
                )}

                {item.qeneThemes && (
                    <div className="qene-box">
                        <h3>ለቅኔ የሚያስነግረው</h3>
                        <ul>
                            {item.qeneThemes.map((theme, i) => (
                                <li key={i}>{theme}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {item.events && (
                    <div className="events-list">
                        <h3>በዚህ ዕለት የሚታሰቡ</h3>
                        <ul>
                            {item.events.map((ev, i) => <li key={i}>{ev}</li>)}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    </div>
);

export default App;
