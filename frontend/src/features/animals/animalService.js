import axios from "axios";

const API_URL = '/api/animals'

//Create new Animal
const createAnimal = async (animalData, token) => { 
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.post(API_URL, animalData, config)

  return response.data
}

const animalService = {
  createAnimal,
}

export default animalService