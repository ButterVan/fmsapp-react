import React from 'react'
import './List.css'

const AnimalListEntry = ({item}) => {
  return (
    <div className='AnimalListEntry'>
      <div className='AnimalListEntryContents'>
        <div>{item.sex}</div>
        <div>{item.sId}</div>
        <div>{item.eId}</div>
        <div>{item.breed}</div>
      </div>
    </div>
  )
}

export default AnimalListEntry