// components/Sidebar.jsx
import React from 'react';

const Sidebar = ({ isOpen, toggleSidebar, theme, toggleTheme, language, setLanguage, translations }) => {
  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}></div>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </button>
          <button className="close-sidebar" onClick={toggleSidebar}>×</button>
        </div>
        
        <div className="language-selector">
          <h3>{translations.language || 'Language'}</h3>
          <div className="language-buttons">
            <button 
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => setLanguage('en')}
            >
              English
            </button>
            <button 
              className={`lang-btn ${language === 'am' ? 'active' : ''}`}
              onClick={() => setLanguage('am')}
            >
              አማርኛ
            </button>
            <button 
              className={`lang-btn ${language === 'ti' ? 'active' : ''}`}
              onClick={() => setLanguage('ti')}
            >
              ትግርኛ
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;