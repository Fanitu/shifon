import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import TopSales from './components/TopSales';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import BookCall from './components/BookCall';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const translations = {
    en: {
      shopName: "Astier Shifon",
      location: "Addis Ababa 58 Sefer",
      topSales: "Our Top Sales",
      whyChooseUs: "Why Choose Us",
      original: "100% Original Shifon",
      originalDesc: "Premium quality fabric that lasts",
      designers: "Expert Designers",
      designersDesc: "Professional designers with years of experience",
      delivery: "Worldwide Delivery",
      deliveryDesc: "Fast shipping to any corner of the world",
      family: "Family & Single Orders",
      familyDesc: "Perfect for both individual and family celebrations",
      gallery: "Check out our Styles and Dress",
      single: "Single Design",
      family: "Family Designs",
      group: "Group Design",
      bookCall: "Book a Call",
      name: "Name",
      phone: "Phone Number",
      email: "Email Address",
      message: "Message",
      submit: "Book Now"
    },
    am: {
      shopName: "አስቴር ሺፎን",
      location: "አዲስ አበባ 58 ሰፈር",
      topSales: "የእኛ ምርጥ ሽያጮች",
      whyChooseUs: "ለምን እኛን መረጥን",
      original: "100% ኦሪጅናል ሺፎን",
      originalDesc: "የሚቆይ ከፍተኛ ጥራት ያለው ጨርቅ",
      designers: "ባለሙያ ዲዛይነሮች",
      designersDesc: "አመታት ልምድ ያላቸው ባለሙያ ዲዛይነሮች",
      delivery: "አለም አቀፍ አቅርቦት",
      deliveryDesc: "ፈጣን አቅርቦት ወደ ማንኛውም የአለም ክፍል",
      family: "የቤተሰብ እና የነጠላ ትዕዛዞች",
      familyDesc: "ለሁለቱም ለግል እና ለቤተሰብ በዓላት ተስማሚ",
      gallery: "የእኛን ቅጦች እና አልባሳት ይመልከቱ",
      single: "ነጠላ ዲዛይን",
      family: "የቤተሰብ ዲዛይኖች",
      group: "የቡድን ዲዛይን",
      bookCall: "ቀጠሮ ይያዙ",
      name: "ስም",
      phone: "ስልክ ቁጥር",
      email: "ኢሜይል አድራሻ",
      message: "መልእክት",
      submit: "አሁን ይያዙ"
    },
    ti: {
      shopName: "ኣስቴር ሺፎን",
      location: "ኣዲስ ኣበባ 58 ሰፈር",
      topSales: "ናይና ዝለዓለ ሽያጥ",
      whyChooseUs: "ንምንታይ ንሕና",
      original: "100% ኦሪጅናል ሺፎን",
      originalDesc:"�ፍቱን ጥራት ዘለዎ ጨርቂ",
      designers: "ክኢላ ዲዛይነራት",
      designersDesc: "ዓመታት ተመኩሮ ዘለዎም ክኢላ ዲዛይነራት",
      delivery: "ኣብ ምሉእ ዓለም ምብጻሕ",
      deliveryDesc: "ናብ ዝኾነ ክፋል ዓለም ቅልጡፍ ምብጻሕ",
      family: "ናይ ቤተሰብን ናይ ሓደን ትእዛዛት",
      familyDesc: "ንሓደ ሰብን ንስድራ ቤትን ዝምችእ",
      gallery: "ናትና ስታይልን ክዳውንትን",
      single: "ሓደ ዲዛይን",
      family: "ናይ ስድራ ቤት ዲዛይናት",
      group: "ናይ ቡድን ዲዛይን",
      bookCall: "ቀጠሮ ምዝገባ",
      name: "ስም",
      phone: "ቁጽሪ ተሌፎን",
      email: "ኢሜይል ኣድራሻ",
      message: "መልእኽቲ",
      submit: "ሕጂ ተመዝገብ"
    }
  };

  const t = translations[language];

  return (
    <div className={`app ${theme}`}>
      <Header 
        toggleSidebar={toggleSidebar} 
        shopName={t.shopName}
        theme={theme}
      />
      <Sidebar 
        isOpen={isSidebarOpen} 
        toggleSidebar={toggleSidebar}
        theme={theme}
        toggleTheme={toggleTheme}
        language={language}
        setLanguage={setLanguage}
        translations={t}
      />
      
      <main>
        <Hero theme={theme} />
        <TopSales theme={theme} t={t} />
        
        <WhyChooseUs theme={theme} t={t} />
        
        <Gallery theme={theme} t={t} />
        
        <BookCall theme={theme} t={t} />
      </main>

      <Footer theme={theme} t={t} />
    </div>
  );
}

export default App;