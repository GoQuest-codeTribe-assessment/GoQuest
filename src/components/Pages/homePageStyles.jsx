const styles = {
    container: {
      padding: '20px',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif',
    },

    topSection: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px',
      marginBottom: '20px',
      minHeight: '500px',
    },

    mapSection: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
    },

    weatherSection: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
    },

    activitiesSection: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      minHeight: '300px',
    },

    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '15px',
      color: '#333',
    },

    mapPlaceholder: {
      flex: 1,
      backgroundColor: '#f0f0f0',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#666',
      fontSize: '1.2rem',
    },

    weatherPlaceholder: {
      height: '100%',
      backgroundColor: '#f0f0f0',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#666',
      fontSize: '1.2rem',
    },

    activitiesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '15px',
      padding: '10px',
    },

    activityCard: {
      backgroundColor: '#f8f8f8',
      borderRadius: '8px',
      padding: '15px',
      minHeight: '150px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },

    // Media query for responsive design
    '@media (max-width: 768px)': {
      topSection: {
        gridTemplateColumns: '1fr',
      },
    },
  };

  export default styles