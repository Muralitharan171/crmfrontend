import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {env} from './config'

const Login = () => {
    const navigate = useNavigate()
    const formik = useFormik({
    initialValues : {
      email : "",
      password : ""
    }, 
    validate : (values) => {
          let errors = {}
          if(values.email === ""){
              errors.email = "please Enter Your email"
          }
          if(values.password === ""){
            errors.password = "please Enter your password"
          }
          return errors
    },
    onSubmit: async (values) =>{
      try {
        const loginData = await axios.post(`${env.api}/login`,values);
        if (loginData.status === 200) {
          navigate("/Portal")
          window.localStorage.setItem("app-token",loginData.data.token)
        } else {
          
        }
      } catch (error) {
        alert(error.response.data.message)
      }
    }
  })
  return (
    <div className="bg-gradient-primary">
    <div className="container">

      {/* <!-- Outer Row --> */}
      <div className="row justify-content-center">

        <div className="col-xl-10 col-lg-12 col-md-9">

          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              {/* <!-- Nested Row within Card Body --> */}
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Welcome To User Page !</h1>
                    </div>
                    <form className="user" onSubmit={formik.handleSubmit}>
                      <div className="form-group">
                        <input type="email" className="form-control form-control-user"
                        id={`${formik.errors.email ? `input-error`: ``} `}
                          placeholder="Enter Email Address..."
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          name='email' />
                          <span style={{ color: "red" }}>{formik.errors.email}</span>
                      </div>
                      <div className="form-group">
                        <input type="password" className="form-control form-control-user"
                        id={`${formik.errors.password ? `input-error`:``}`}
                          placeholder=" Enter Your Password"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          name='password' /> 
                          <span style={{ color: "red" }}>{formik.errors.password}</span>
                      </div>
                      <div className="form-group">
                        <div className="custom-control custom-checkbox small">
                          <label className="custom-control-label" >Login Valid only 10 Minits</label>
                        </div>
                      </div>
                      <input  type="submit" className="btn btn-primary btn-user btn-block"  value={"Login"} disabled={!formik.isValid}/>
                      <hr />
                      <a href="index.html" className="btn btn-google btn-user btn-block">
                        <i className="fab fa-google fa-fw"></i> Login with Google
                      </a>
                      <a href="index.html" className="btn btn-facebook btn-user btn-block">
                        <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                      </a>
                    </form>
                    <hr />
                    <div className="text-center">
                      <Link className="small" to="/Registerui">Create an Account!</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  </div>
  )
}

export default Login