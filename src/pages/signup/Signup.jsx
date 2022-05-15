import React from 'react'
import './signup.css'
import useForm from '../../pages/UseForm';
import { Link } from 'react-router-dom';
// import signUpValidate from './SignUpValidate';

const Signup = () => {
  const {handleChange, values, handleSubmit} = useForm();

  return (
    <div className="nutriverse__signup-container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Create a nutriverse account!</h1>
        <div className="form-input">
          <label htmlFor="username" className="form-label">Username
          </label>
          <input id="username"type="text" name="username" className='form-input' placeholder='Enter your username'value={values.username} onChange={handleChange} />
        </div>
        <div className="form-input">
          <label htmlFor="Email" className="form-label">Email
          </label>
          <input id="email"type="text" name="Email" className='form-input' placeholder='Enter your Email' value={values.email} onChange={handleChange}/>
        </div>
        <div className="form-input">
          <label htmlFor="password" className="form-label">Password
          </label>
          <input id="password" type="password" name="password" className='form-input' placeholder='Enter your password' value={values.password} onChange={handleChange}/>
        </div>
        <div className="form-input">
          <label htmlFor="confirmpassword" className="form-label">Confirm password
          </label>
          <input id="password2" type="password" name="confirmpassword" className='form-input' placeholder='Confirm password' value={values.password2} onChange={handleChange}/>
        </div>
        <div className="btn-signin">
          <button className="form-input-btn" type="submit">Submit</button>
          <span className="form-input-login">Or sign in <Link to="/signin">here</Link></span>
          </div>
      </form>
    
    </div>
  )
}

export default Signup
