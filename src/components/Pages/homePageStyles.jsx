const styles = {
  container: {
    padding: '20px',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #E3F2FD, #BBDEFB, #90CAF9)',
    backgroundSize: '200% 200%',
    fontFamily: 'Arial, sans-serif',
    animation: 'gradientAnimation 15s ease infinite',
  },

  '@keyframes gradientAnimation': {
    '0%': {
      backgroundPosition: '0% 50%',
    },
    '50%': {
      backgroundPosition: '100% 50%',
    },
    '100%': {
      backgroundPosition: '0% 50%',
    }
  },

  topSection: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    marginBottom: '20px',
    minHeight: '500px',
    animation: 'fadeIn 0.5s ease-out',
  },

  '@keyframes fadeIn': {
    from: {
      opacity: 0,
      transform: 'translateY(20px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    }
  },

  mapSection: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: '16px',
    padding: '20px',
    boxShadow: '0 8px 32px rgba(144, 202, 249, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: '2px solid #E1F5FE',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 12px 40px rgba(144, 202, 249, 0.3)',
      borderColor: '#81D4FA',
    }
  },

  weatherSection: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: '16px',
    padding: '20px',
    boxShadow: '0 8px 32px rgba(144, 202, 249, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: '2px solid #E1F5FE',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 12px 40px rgba(144, 202, 249, 0.3)',
      borderColor: '#81D4FA',
    }
  },

  activitiesSection: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: '16px',
    padding: '20px',
    boxShadow: '0 8px 32px rgba(144, 202, 249, 0.2)',
    minHeight: '300px',
    animation: 'slideUp 0.6s ease-out',
    border: '2px solid #E1F5FE',
    '&:hover': {
      borderColor: '#81D4FA',
    }
  },

  '@keyframes slideUp': {
    from: {
      opacity: 0,
      transform: 'translateY(40px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    }
  },

  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#1976D2',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#2196F3',
    }
  },

  mapPlaceholder: {
    flex: 1,
    backgroundColor: 'rgba(227, 242, 253, 0.7)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#1976D2',
    fontSize: '1.2rem',
    transition: 'background-color 0.3s ease',
    border: '1px solid #BBDEFB',
    '&:hover': {
      backgroundColor: 'rgba(227, 242, 253, 0.9)',
      borderColor: '#90CAF9',
    }
  },

  weatherPlaceholder: {
    height: '100%',
    backgroundColor: 'rgba(227, 242, 253, 0.7)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#1976D2',
    fontSize: '1.2rem',
    transition: 'background-color 0.3s ease',
    border: '1px solid #BBDEFB',
    '&:hover': {
      backgroundColor: 'rgba(227, 242, 253, 0.9)',
      borderColor: '#90CAF9',
    }
  },

  activitiesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '15px',
    padding: '10px',
  },

  activityCard: {
    backgroundColor: 'rgba(227, 242, 253, 0.9)',
    borderRadius: '12px',
    padding: '15px',
    minHeight: '150px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    border: '1px solid #BBDEFB',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(to bottom, rgba(144, 202, 249, 0.1), rgba(144, 202, 249, 0.2))',
      pointerEvents: 'none',
      transition: 'opacity 0.3s ease',
      opacity: 0,
    },
    '&:hover': {
      transform: 'scale(1.02) translateY(-3px)',
      boxShadow: '0 10px 30px rgba(144, 202, 249, 0.25)',
      borderColor: '#90CAF9',
      '&::before': {
        opacity: 1,
      }
    },
    '& *': {
      position: 'relative',
      zIndex: 1,
      color: '#1976D2',
      transition: 'color 0.3s ease',
    }
  },

  '@media (max-width: 768px)': {
    topSection: {
      gridTemplateColumns: '1fr',
    },
  },
};

export default styles;