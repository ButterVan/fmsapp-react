import React from 'react'
import {useContext, motion} from 'react'
import AnimalContext from '../../../context/AnimalContext'
import AnimalListEntry from './AnimalListEntry'
import herdList from '../../../localData/localListData'

const List = () => {
  //Getting the data from a local list
  const animalList = herdList
return (
  <div className='List'>   
    {/* How do I loop through a list */}
      {animalList.map((item) => (
        // <motion.div key={item.id}>
          <AnimalListEntry key={item.id} item={item} />
        // </motion.div>
        ))}
  </div>
)}

export default List