
const styles = {
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding:"10px",
    gap: '15px',
  },

  searchContainer: {
    position: 'relative',
  },

  searchInput: {
    width: '100%',
    padding: '10px 15px 10px 40px',
    borderRadius: '8px',
    border: '1px solid #e0e0e0',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },

  searchIcon: {
    position: 'absolute',
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#666',
  },

  currentWeatherGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '10px',
    margin: '10px 0',
  },

  weatherTile: {
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.2s ease',
    cursor: 'pointer',
    border: '1px solid #eee',
  },

  tileIcon: {
    marginBottom: '8px',
    color: '#007bff',
  },

  tileValue: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#333',
  },

  tileLabel: {
    fontSize: '0.8rem',
    color: '#666',
    marginTop: '4px',
  },

  forecastContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '8px',
    overflowX: 'auto',
    padding: '10px 0',
  },

  forecastTile: {
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '80px',
    border: '1px solid #eee',
  },

  dayLabel: {
    fontSize: '0.8rem',
    fontWeight: 'bold',
    color: '#666',
    marginBottom: '5px',
  },

  weatherIcon: {
    marginBottom: '5px',
  },

  temperature: {
    fontSize: '0.9rem',
    fontWeight: 'bold',
    color: '#333',
  },
};


  export default styles