import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../comps/Spinner'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData
  
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

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  if (isLoading) { 
    return <Spinner />
  }


  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please create an account</p>
      </section>  
      <section className='form'>
        <form onSubmit={onSubmitMethod}>
          <div className="form-group">
            <input type="text" name="email" id="email" className='form-control' value={email} placeholder='Enter your email' onChange={onChangeMethod} />
          </div>
          <div className="form-group">
            <input type="password" name="password" id="password" className='form-control' value={password} placeholder='Enter your password' onChange={onChangeMethod} />
          </div>
          <div>
            <button type="submit" className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login