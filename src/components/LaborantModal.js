import React, { useContext,useState } from 'react'
import GlobalContext from '../context/GlobalContext'

export default function LaborantModal() {
    const{setShowLaborantModal}=useContext(GlobalContext)
    const[inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
        const input = event.target.value;
        if (input.length > 7) {
          setInputValue(input.slice(0, 7));
        } else {
          setInputValue(input);
        }
      };
    return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
        <form className=' bg-blue-50 modal-content overflow-y-auto max-h-[500px] rounded-lg w-1/2'>
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
                    required
                    className="pt-2 pl-2 border-0 text-gray-700 font-semibold pb-1 w-full border-b-2 border-gray-400 focus:outline-none focus:ring-1 focus:border-blue-200"
                />
                <input 
                    type="text"
                    name='surname'
                    placeholder='Soyad'
                    required
                    className="pt-2 pl-2 border-0 text-gray-700 font-semibold pb-1 w-full border-b-2 border-gray-400 focus:outline-none focus:ring-1 focus:border-blue-200"
                />
                <input
                    type="text"
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
        </form>
    </div>
  )
}
