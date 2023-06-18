import React, { useContext,} from 'react'
import GlobalContext from '../context/GlobalContext'

export default function CreateButton() {
  const{setShowEventModal}=useContext(GlobalContext)
  return (
    <div className='flex justify-start px-5 py-10'>
    <button onClick={()=> setShowEventModal(true)} className=' text-white bg-blue-300 hover:bg-blue-500 rounded focus:outline-none font-medium px-4 py-2 text-center mr-1'>
      Rapor oluştur
    </button>
   </div>
  )
}
