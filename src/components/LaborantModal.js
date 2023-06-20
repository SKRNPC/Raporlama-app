import React, { useContext,useState } from 'react'
import GlobalContext from '../context/GlobalContext'

export default function LaborantModal() {
    const{setShowLaborantModal,selectedEvent,dispatchCalEvent}=useContext(GlobalContext)
    const[inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
        const input = event.target.value;
        if (input.length > 7) {
          setInputValue(input.slice(0, 7));
        } else {
          setInputValue(input);
        }
      };
    const[name, setName]= useState(
        selectedEvent? selectedEvent.name: ""
    )
    const[surname, setSurname]= useState(
        selectedEvent? selectedEvent.surname: ""
    )
    
    function handleSubmit(e){
        e.preventDefault()
        const laborantEvent={
            name,
            surname,
            inputValue,
        }
        if(selectedEvent){
            dispatchCalEvent({ type: 'update', payload: laborantEvent})
        } else {
            dispatchCalEvent({ type: 'push', payload: laborantEvent})
        }
        setShowLaborantModal(false)
        }
    
    
    return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
        <form 
            className=' bg-blue-50 modal-content overflow-y-auto max-h-[500px] rounded-lg w-1/2'>
            <header className='bg-blue-300 px-4 py-4 flex justify-between items-center'>
                <div>
                    <p className=' ml-3 font-semibold text-violet-700'>Rapor oluştur</p>
                </div>
            
                <div>
                <button onClick={()=> setShowLaborantModal(false)}
                        className='flex justify-end '>
                <span className="material-icons-outlined text-gray-400 mr-1">close</span>
                </button>
            </div>
            </header>
            <div className='p-3'>
                <div className="grid grid-cols-1/5 items-end gap-y-7">
                <div></div>
                <input 
                    type="text"
                    name='name'
                    placeholder='Ad'
                    value={name}
                    required
                    className="pt-2 pl-2 border-0 text-gray-700 font-semibold pb-1 w-full border-b-2 border-gray-400 focus:outline-none focus:ring-1 focus:border-blue-200"
                    onChange={(e)=> setName(e.target.value)}
                />
                <input 
                    type="text"
                    name='surname'
                    placeholder='Soyad'
                    value={surname}
                    required
                    className="pt-2 pl-2 border-0 text-gray-700 font-semibold pb-1 w-full border-b-2 border-gray-400 focus:outline-none focus:ring-1 focus:border-blue-200"
                    onChange={(e)=> setSurname(e.target.value)}
                />
                <input
                    type="number"
                    required
                    name="id"
                    placeholder="Hastane Kimlik no"
                    minLength={7}
                    maxLength={7}
                    value={inputValue}
                    onInput={handleInputChange}
                    className="pt-2 pl-2 border-0 text-gray-700 font-semibold pb-1 w-full border-b-2 border-gray-400 focus:outline-none focus:ring-1 focus:border-blue-200"
                />
                </div>
            </div>
            <footer className=' flex justify-end border-t p-3 mt-5'>
                <button
                    type='submit' 
                    onClick={handleSubmit}
                    className='bg-yellow-200 hover:bg-yellow-400 px-6 py-2 rounded text-amber-900'>
                    Kaydet
                </button>
            </footer>
        </form>
    </div>
  )
}
