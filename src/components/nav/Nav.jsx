import React, { useState, useEffect } from "react";
import { User } from "lucide-react";
import styles from "./navstyles";
import Logo from "../../assets/Logo.png";
import ProfilePopup from "../User/Profile";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const Navbar = () => {
  const [profile, setProfile] = useState(false);
  const [user, setUser] = useState(null);

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const toggleUserMenu = () => {
    setProfile(true);
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
        setProfile(false);
      })
      .catch((error) => console.error("Error signing out:", error));
  };

  return (
    <header style={styles.navbar}>
      {/* Logo Section */}
      <a href="/" style={styles.logo}>
        <img style={styles.logoImage} src={Logo} alt="Logo" />
        <span>GoQuest</span>
      </a>

      {/* User Section */}
      <div style={styles.userSection}>
        {user ? (
          <div style={styles.userIcon} onClick={toggleUserMenu}>
            <User size={24} color="#333" />
            {/* <button onClick={handleLogout}>log out</button> */}
          </div>
        ) : (
          <button
            style={styles.loginButton}
            onClick={() => {
              window.location.href = "/login";
            }}
          >
            Login
          </button>
        )}
      </div>

      {profile && user && <ProfilePopup setProfile={setProfile} />}
    </header>
  );
};

export default Navbar;
