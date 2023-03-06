import { useState }  from 'react'
import { useDispatch } from 'react-redux'
import createAnimal from '../features/animals/animalSlice'

const AnimalForm = () => {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => { 
    e.preventDefault()

    dispatch(createAnimal({text}))
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor='text'>Animal Id</label>
          <input type="text" name='text' id='text' value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className="form-group">
          <button className='btn btn-submit' type="submit">Add Animal</button>
        </div>

      </form>
    </section>
  )
}

export default AnimalForm