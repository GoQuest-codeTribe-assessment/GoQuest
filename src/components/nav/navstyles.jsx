const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'relative',
  },

  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },

  logoImage: {
    width: '40px',
    height: '40px',
    backgroundColor: '#007bff',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
  },

  nav: {
    display: 'flex',
    gap: '2rem',
  },

  navLink: {
    color: '#666',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s ease',
    cursor: 'pointer',
  },

  userSection: {
    position: 'relative',
  },

  userIcon: {
    cursor: 'pointer',
    padding: '0.5rem',
    borderRadius: '50%',
    transition: 'background-color 0.3s ease',
  },

  userMenu: {
    position: 'absolute',
    top: '100%',
    right: '0',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    padding: '0.5rem 0',
    minWidth: '200px',
    marginTop: '0.5rem',
    zIndex: 1000,
  },

  menuItem: {
    padding: '0.75rem 1rem',
    color: '#333',
    textDecoration: 'none',
    display: 'block',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

// Add hover effects
const hoverStyles = {
  navLink: {
    ...styles.navLink,
    ':hover': {
      color: '#007bff',
    },
  },
  userIcon: {
    ...styles.userIcon,
    ':hover': {
      backgroundColor: '#f0f0f0',
    },
  },
  menuItem: {
    ...styles.menuItem,
    ':hover': {
      backgroundColor: '#f8f9fa',
    },
  },
};

export default styles