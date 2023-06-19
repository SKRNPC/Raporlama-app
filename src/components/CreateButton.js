import React, { useContext,} from 'react'
import GlobalContext from '../context/GlobalContext'

export default function CreateButton() {
  const{setShowEventModal}=useContext(GlobalContext)
  return (
    <div className='flex flex-row justify-start px-1 py-1'>
    <button onClick={()=> setShowEventModal(true)} className=' text-white bg-blue-300 hover:bg-blue-500 rounded focus:outline-none font-medium px-2 py-2 text-center  mr-2'>
      Rapor oluştur
    </button>
   </div>
  )
}
