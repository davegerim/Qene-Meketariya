import React, { useState } from 'react';
import { BookOpen, Calendar, Sun, Moon, Search, ChevronRight, Home, Feather, Star } from 'lucide-react';
import './App.css';
import { dailyMasnegeria, monthlyHolidays, annualHolidays, fasts, seasons } from './data';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedItem, setSelectedItem] = useState(null);

  const renderContent = () => {
    if (selectedItem) {
      return (
        <DetailView
          item={selectedItem}
          onBack={() => setSelectedItem(null)}
        />
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
    <div className="app-container">
      {/* Sidebar for Desktop / Header for Mobile */}
      <header className="app-header">
        <div className="logo-area" onClick={() => setActiveTab('home')}>
          <Feather className="icon-gold" size={28} />
          <h1>ቅኔ መቁጠሪያ</h1>
        </div>

        {/* Desktop Navigation embedded in Sidebar */}
        <nav className="desktop-nav">
          <NavItem icon={<Home size={20} />} label="መነሻ" isActive={activeTab === 'home'} onClick={() => { setActiveTab('home'); setSelectedItem(null); }} />
          <NavItem icon={<Sun size={20} />} label="የዕለት ማስነገሪያ" isActive={activeTab === 'daily'} onClick={() => { setActiveTab('daily'); setSelectedItem(null); }} />
          <NavItem icon={<Calendar size={20} />} label="ወርኃ በዓላት" isActive={activeTab === 'monthly'} onClick={() => { setActiveTab('monthly'); setSelectedItem(null); }} />
          <NavItem icon={<Star size={20} />} label="ዓመታዊ በዓላት" isActive={activeTab === 'annual'} onClick={() => { setActiveTab('annual'); setSelectedItem(null); }} />
          <NavItem icon={<BookOpen size={20} />} label="አጽዋማት" isActive={activeTab === 'fasts'} onClick={() => { setActiveTab('fasts'); setSelectedItem(null); }} />
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
  );
}

const NavItem = ({ icon, label, isActive, onClick }) => (
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
      <section className="hero-card" onClick={() => onSelect(ethDay)}>
        <div className="hero-content">
          <span className="hero-kibour">ዛሬ ቀን</span>
          <h2>{ethDay.dayAmharic}</h2>
          <p>{ethDay.title}</p>
          <div className="hero-decoration">✥</div>
        </div>
      </section>

      <div className="bento-grid">
        <div className="bento-item card-gold" onClick={() => onNavigate('daily')}>
          <Sun size={40} />
          <span>የዕለት ማስነገሪያ</span>
        </div>
        <div className="bento-item card-dark" onClick={() => onNavigate('monthly')}>
          <Moon size={40} />
          <span>ወርኃ በዓላት</span>
        </div>
        <div className="bento-item card-parchment" onClick={() => onNavigate('annual')}>
          <Calendar size={40} />
          <span>ዓመታዊ በዓላት</span>
        </div>
        <div className="bento-item card-red" onClick={() => onNavigate('fasts')}>
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
