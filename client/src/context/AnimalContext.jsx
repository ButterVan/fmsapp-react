import React from 'react'
import { createContext, useState } from 'react'

const AnimalContext = createContext()

//This will hold all the methods for concerning animals
const AnimalProvider = ({children}) => {
  //This will hold one default value
  const [animal, setAnimal] = useState([
    {
    id: 1,
    eTag: "Y23",
    sTag: 123,
    sex: "cow",
    breed: "Sential"
    }
  ])

  return(
    <AnimalContext.Provider value={{
      animal
    }}>
      {children}
    </AnimalContext.Provider>
    );

}


export default AnimalContext