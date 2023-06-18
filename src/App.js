import './App.css';
import React, { useContext} from 'react';
import Modal from './components/Modal';
import GlobalContext from './context/GlobalContext';
import CreateButton from './components/CreateButton';
import Header from './components/Header';
import AddLaborantButton from './components/AddLaborantButton';
import LaborantModal from './components/LaborantModal';


function App() {
  const{showEventModal, showLaborantModal}=useContext(GlobalContext)

  return (
    <React.Fragment> 
      {showEventModal && <Modal/>}
      {showLaborantModal && <LaborantModal/>}
      
     <div className="h-screen flex flex-col bg-blue-100">
      <Header/>
      <CreateButton/>
      <AddLaborantButton/>
      </div>
     
      
    </React.Fragment>
  );
}

export default App;
