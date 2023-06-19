import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

export default function AddLaborantButton() {
    const{setShowLaborantModal}=useContext(GlobalContext)
  return (
    <div className='flex justify-start px-1 py-1'>
    <button onClick={()=> setShowLaborantModal(true)} className=' text-white bg-blue-300 hover:bg-blue-500 rounded focus:outline-none font-medium px-4 py-2 text-center mr-1'>
      Laborant Ekle
    </button>
   </div>
  )
}
