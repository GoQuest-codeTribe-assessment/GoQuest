const styles = {
  container: {
    height: '100%',
    width:'100%',
    display: 'flex',
    flexDirection: 'column',
    padding: "20px",
    gap: '20px',
    background: 'linear-gradient(135deg, #E3F2FD, #BBDEFB, #90CAF9)',
    borderRadius: '10px',
    boxShadow: '0 8px 32px rgba(144, 202, 249, 0.15)',
  },

  searchContainer: {
    position: 'relative',
  },

  searchInput: {
    width: '100%',
    padding: '16px 20px 16px 50px',
    borderRadius: '16px',
    border: '2px solid rgba(255, 255, 255, 0.8)',
    fontSize: '1rem',
    outline: 'none',
    transition: 'all 0.3s ease',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    color: '#1976D2',
    '&:focus': {
      border: '2px solid #90CAF9',
      boxShadow: '0 4px 20px rgba(144, 202, 249, 0.2)',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
    },
    '&::placeholder': {
      color: '#64B5F6',
    }
  },

  searchIcon: {
    position: 'absolute',
    left: '16px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#1976D2',
    transition: 'color 0.3s ease',
  },

  currentWeatherGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px',
    margin: '15px 0',
  },

  weatherTile: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: '20px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    border: '2px solid rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(10px)',
    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 8px 24px rgba(144, 202, 249, 0.25)',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      border: '2px solid #90CAF9',
    }
  },

  tileIcon: {
    marginBottom: '12px',
    color: '#1976D2',
    fontSize: '28px',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.1)',
    }
  },

  tileValue: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#1976D2',
    marginBottom: '4px',
    transition: 'color 0.3s ease',
  },

  tileLabel: {
    fontSize: '0.9rem',
    color: '#64B5F6',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },

  forecastContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '12px',
    overflowX: 'auto',
    padding: '15px 5px',
    '-webkit-overflow-scrolling': 'touch',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      display: 'none',
    }
  },

  forecastTile: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: '16px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '90px',
    border: '2px solid rgba(255, 255, 255, 0.8)',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 6px 20px rgba(144, 202, 249, 0.2)',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      border: '2px solid #90CAF9',
    }
  },

  dayLabel: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#1976D2',
    marginBottom: '8px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },

  weatherIcon: {
    marginBottom: '8px',
    color: '#1976D2',
    fontSize: '24px',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.1)',
    }
  },

  temperature: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#1976D2',
    display: 'flex',
    gap: '6px',
    alignItems: 'center',
    '& span:last-child': {
      color: '#64B5F6',
      fontSize: '0.9rem',
    }
  },

  '@media (max-width: 768px)': {
    container: {
      padding: '15px',
    },
    currentWeatherGrid: {
      gridTemplateColumns: '1fr',
      gap: '12px',
    },
    forecastContainer: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    }
  },

  '@media (max-width: 480px)': {
    forecastContainer: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    }
  }
};

export default styles;