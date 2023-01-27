import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData

  const onChangeMethod = () => { 
    console.log('hi')
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
        <form action="">
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
            <input type="password" name="password2" id="password2" className='form-control' value={password2}onChange={onChangeMethod} />
          </div>
        </form>
      </section>
    </>
  )
}

export default Register