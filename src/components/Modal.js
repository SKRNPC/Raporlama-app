import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function Modal() {
    const{setShowEventModal,selectedFile, setSelectedFile, value, setValue}= useContext(GlobalContext)
  
    const handleModalClose = () => {
        setSelectedFile(null);
        setShowEventModal(false);
      };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
      };
    
    return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
        <form className=' bg-blue-50 modal-content overflow-y-auto max-h-[500px] rounded-lg w-1/2'>
            <header className='bg-blue-300 px-4 py-4 flex justify-between items-center'>
            <div>
                <p className=' ml-3 font-semibold text-violet-700'>Rapor oluştur</p>
            </div>
            <div>
                <button onClick={handleModalClose}
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
                    placeholder='Hastanın adı'
                    required
                    className="pt-2 pl-2 border-0 text-gray-700 font-semibold pb-1 w-full border-b-2 border-gray-400 focus:outline-none focus:ring-1 focus:border-blue-200"
                />
                <input 
                    type="text"
                    name='surname'
                    placeholder='Hastanın soy adı'
                    required
                    className="pt-2 pl-2 border-0 text-gray-700 font-semibold pb-1 w-full border-b-2 border-gray-400 focus:outline-none focus:ring-1 focus:border-blue-200"
                />
                <input 
                    type="number"
                    name='id'
                    placeholder='Hastanın Kimlik numarası'
                    required
                    className="pt-2 pl-2 border-0 text-gray-700 font-semibold pb-1 w-full border-b-2 border-gray-400 focus:outline-none focus:ring-1 focus:border-blue-200"
                />
                <input 
                    type="text"
                    name='tani'
                    placeholder='Hastalık tanısı'
                    required
                    className="pt-2 pl-2 border-0 text-gray-700 font-semibold pb-1 w-full border-b-2 border-gray-400 focus:outline-none focus:ring-1 focus:border-blue-200"
                />
                <input 
                    type="text"
                    name='açiklama'
                    placeholder='Tanı detayları'
                    required
                    className="pt-2 pl-2 border-0 text-gray-700 
                    font-semibold pb-1 w-full border-b-2 
                    border-gray-400 focus:outline-none focus:ring-1 
                    focus:border-blue-200"
                />
                <DatePicker className='pt-2 pl-2 border-0 text-gray-700 
                    font-semibold pb-1 w-full border-b-2 
                    border-gray-400 focus:outline-none focus:ring-1 
                    focus:border-blue-200'
                    selected={value.startDate}
                    onChange={(date) => setValue({ startDate: date })}
                    dateFormat="dd/MM/yyyy"
                />
                <input 
                    type="file" 
                    accept=".jpg, .jpeg, .png" 
                    onChange={handleFileChange} 
                    className='block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100 '
                />
                {selectedFile && (
                <div>
                <img src={URL.createObjectURL(selectedFile)} 
                    alt="Selected File" 
                    className="max-w-24 max-h-32" />
                </div>
                )}
                
                </div>
            </div>
        </form>
    </div>
  )
}

