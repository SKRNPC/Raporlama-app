import React, {useState, useReducer}from 'react'
import GlobalContext from './GlobalContext'

function savedEventsReducer(state, {type, payload}){
  switch (type) {
      case 'push':
          return[...state, payload];
      case'update':
          return state.map(evt => evt.id === payload.id ? payload : evt)
      case 'delete':    
          return state.filter(evt => evt.id !== payload.id)
          default:
          throw new Error();
  }
}



function initEvents(){
    const storageEvents = localStorage.getItem('savedEvents')
    const parsedEvents = storageEvents ? JSON.parse(storageEvents) : []
    return parsedEvents 
}



export default function ContextWrapper(props) {
    const [showEventModal, setShowEventModal]=useState(false);
    const[showLaborantModal, setShowLaborantModal]= useState(false)
    const [selectedFile, setSelectedFile] = useState(null);
    const[selectedEvent, setSelectedEvent]= useState(false)
    const[savedEvents, dispatchCalEvent] = useReducer(
        savedEventsReducer, 
        [],
        initEvents 
        );
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
        setShowLaborantModal,
        selectedEvent,
        setSelectedEvent,
        dispatchCalEvent,
        savedEvents,
        
        
    
    }}>
      {props.children}
    </GlobalContext.Provider>
  )
}
