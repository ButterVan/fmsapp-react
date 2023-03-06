import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import animalService from './animalService'

const intialState = {
  animals: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

//Create new Animal
export const createAnimal = createAsyncThunk('animals/create', async (animalData, thunkAPI) => { 
  try {
    const token = thunkAPI.getState().auth.user.token
    return await animalService.createAnimal(animalData)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const animalSlice = createSlice({
  name: 'animal',
  intialState,
  reducers: {
    reset: (state) => intialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAnimal.pending, (state) => { 
      state.isLoading = true
      })
      .addCase(createAnimal.fulfilled, (state, action) => { 
        state.isLoading = false
        state.isSuccess = true
        state.goals.push(action.payload) //Redux toolkit helper
      })
      .addCase(createAnimal.rejected, (state, action) => { 
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  }
})

export const { reset } = animalSlice.actions
export default animalSlice.reducer