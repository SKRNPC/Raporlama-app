import React from 'react';

const GlobalContext = React.createContext({
  showEventModal: false,
  setShowEventModal: () => {},
  selectedFile: null,
  setSelectedFile: () => {},
  value: {
    startDate: new Date(),
  },
  setValue: () => {},
  showLaborantModal: false,
  setShowLaborantModal: () => {},
});

export default GlobalContext;
