import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const intialState = {
  animals: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

export const animalSlice = createSlice({
  name: 'animal',
  intialState,
  reducers: {
    reset: (state) => intialState
  }
})

export const { reset } = animalSlice.actions
export default animalSlice.reducer