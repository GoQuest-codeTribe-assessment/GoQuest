import React, { useState } from 'react';
import { User } from 'lucide-react';
import styles from './navstyles';

const Navbar = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <header style={styles.navbar}>

      {/* Logo Section*/}
      <a href="/" style={styles.logo}>
        <div style={styles.logoImage}>L</div>
        <span>Logo</span>
      </a>
      
      {/* User Section */}
      <div style={styles.userSection}>
        <div 
          style={styles.userIcon}
          onClick={toggleUserMenu}
        >
          <User size={24} color="#333" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;