import React from 'react';
import { Search, Settings, Camera, Send, PlusSquare } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="header-logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" alt="Instagram" />
      </div>
      
      <div className="search-bar">
        <Search size={18} className="search-icon" />
        <input type="text" placeholder="Username, hashtag and story search" />
      </div>

      <div className="header-actions">
        <Settings size={22} className="action-icon" />
        <Camera size={22} className="action-icon" />
        <Send size={22} className="action-icon" />
        <button className="new-post-btn">
          <PlusSquare size={18} />
          <span>New Post</span>
        </button>
      </div>
    </header>
  );
};

export default Header;