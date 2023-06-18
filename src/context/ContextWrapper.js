import React, {useState}from 'react'
import GlobalContext from './GlobalContext'


export default function ContextWrapper(props) {
    const [showEventModal, setShowEventModal]=useState(false);
    const[showLaborantModal, setShowLaborantModal]= useState(false)
    const [selectedFile, setSelectedFile] = useState(null);
    const [value, setValue] = useState({ 
      startDate: new Date(), 
      }); 
    
    return (
    <GlobalContext.Provider
      value={{
        showEventModal,
        setShowEventModal,
        selectedFile,
        setSelectedFile,
        value,
        setValue,
        showLaborantModal,
        setShowLaborantModal
    
    }}>
      {props.children}
    </GlobalContext.Provider>
  )
}
