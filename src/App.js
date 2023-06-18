import './App.css';
import React, { useContext} from 'react';
import Modal from './components/Modal';
import GlobalContext from './context/GlobalContext';
import CreateButton from './components/CreateButton';



function App() {
  const{showEventModal}=useContext(GlobalContext)

  return (
    <React.Fragment> 
      {showEventModal && <Modal/>}
      
    <CreateButton/>
    </React.Fragment>
  );
}

export default App;
