import './App.css';
import React, { useContext} from 'react';
import Modal from './components/Modal';
import GlobalContext from './context/GlobalContext';
import Header from './components/Header';
import LaborantModal from './components/LaborantModal';
import SideBar from './components/SideBar';

function App() {
  const{showEventModal, showLaborantModal}=useContext(GlobalContext)

  return (
    <React.Fragment> 
      {showEventModal && <Modal/>}
      {showLaborantModal && <LaborantModal/>}
      
      <div  className="h-screen flex flex-col bg-blue-100">
      <Header/>
      <div className="flex flex-1">
      <SideBar/>
      </div>
      </div>
      
     
      
    </React.Fragment>
  );
}

export default App;
