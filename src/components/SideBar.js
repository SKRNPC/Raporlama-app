import React from 'react'
import AddLaborantButton from './AddLaborantButton'


export default function SideBar() {
  return (
    <aside className='border p-5 w-72 bg-yellow-100'>
        <div className='mb-1'>
        <AddLaborantButton/>
        </div>
    </aside>
  )
}
