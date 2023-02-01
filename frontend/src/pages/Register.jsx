import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../comps/Spinner'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => { 
    if (isError) { 
      // toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())

  }, [user, isError, isSuccess, isLoading, message, navigate, dispatch])

  const onChangeMethod = (e) => { 
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmitMethod = (e) => { 
    e.preventDefault()

    if (password !== password2) {
      // toast.error('Passwords do not match')
    }
    else { 
      const userData = {
        name,
        email,
        password,
      }

      dispatch(register(userData))
    }
  }

  if (isLoading) { 
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>  
      <section className='form'>
        <form onSubmit={onSubmitMethod}>
          <div className="form-group">
            <input type="text" name="name" id="name" className='form-control' value={name} placeholder='Enter your name' onChange={onChangeMethod} />
          </div>
          <div className="form-group">
            <input type="text" name="email" id="email" className='form-control' value={email} placeholder='Enter your email' onChange={onChangeMethod} />
          </div>
          <div className="form-group">
            <input type="password" name="password" id="password" className='form-control' value={password} placeholder='Enter your password' onChange={onChangeMethod} />
          </div>
          <div className="form-group">
            <input type="password" name="password2" id="password2" className='form-control' value={password2} placeholder='Confirm password' onChange={onChangeMethod}  />
          </div>
          <div>
            <button type="submit" className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register