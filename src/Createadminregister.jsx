import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { env } from './config'
import axios from 'axios'
import './App.css'

const CreateAdminRegister = () => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues : {
            firstname : "",
            lastname : "",
            email : "",
            password : "",
            repeatpassword : ""
        },
        validate : (values) => {
            let errors = {}
            if (values.firstname === "") {
                errors.firstname = "Please Enter Firstname"
            }
            if (values.lastname === "") {
                errors.lastname = "Please Enter Lastname"
            }
            if (values.email === "") {
                errors.email = "Please Enter Emailid"
            }
            if (values.password === "") {
                errors.password = "Please Enter Password"
            }
            if (values.repeatpassword === "") {
                errors.repeatpassword = "Please Enter Repeatpassword"
            }
            return errors
        },
        onSubmit : async (values) => {
            let createadminregister = await axios.post(`${env.api}/createadminregister`,values);
            alert("New Admin Account Registered")
            navigate('/Adminlogin')
        }
    })
  return (
    <div className="container">

        <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
                {/* <!-- Nested Row within Card Body --> */}
                <div className="row">
                    <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                    <div className="col-lg-7">
                        <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Create an Register Account!</h1>
                            </div>
                            <form className="user" onSubmit={formik.handleSubmit}>
                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <label style={{ color: "black"}}>First Name</label>
                                        <input type="text" className="form-control form-control-user" id={`${formik.errors.firstname ? `input-error` :``}`}
                                            placeholder="First Name" value={formik.values.firstname} onChange={formik.handleChange} name="firstname"/>
                                            <span style={{color:"red"}}>{formik.errors.firstname}</span>
                                    </div>
                                    <div className="col-sm-6">
                                        <label style={{color:"black"}}>Last Name</label>
                                        <input type="text" className="form-control form-control-user" id={`${formik.errors.lastname ? `input-error` :``}`}
                                            placeholder="Last Name" value={formik.values.lastname} onChange={formik.handleChange} name='lastname'/>
                                            <span style={{color:"red"}}>{formik.errors.lastname}</span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label style={{color:"black"}}>Email Address</label>
                                    <input type="email" className="form-control form-control-user" id={`${formik.errors.email ? `input-error` :``}`}
                                        placeholder="Email Address" value={formik.values.email} onChange={formik.handleChange} name='email'/>
                                        <span style={{color:"red"}}>{formik.errors.email}</span>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <label style={{color:"black"}}>Password</label>
                                        <input type="password" className="form-control form-control-user"id={`${formik.errors.password ? `input-error` :``}`} 
                                        placeholder="Password" value={formik.values.password} onChange={formik.handleChange} name='password'/>
                                        <span style={{color:"red"}}>{formik.errors.password}</span>
                                    </div>
                                    <div className="col-sm-6">
                                        <label style={{color:"black"}}>Repeat Password</label>
                                        <input type="password" className="form-control form-control-user" id={`${formik.errors.repeatpassword ? `input-error` :``}`} 
                                        placeholder="Repeat Password" value={formik.values.repeatpassword} onChange={formik.handleChange} name='repeatpassword'/>
                                        <span style={{color:"red"}}>{formik.errors.repeatpassword}</span>
                                    </div>
                                </div>
                                <input className="btn btn-primary btn-user btn-block" type={"submit"} value="Register Account" disabled={!formik.isValid} />
                                    
                            </form>
                            <hr/>
                            <div className="text-center">
                                <Link className="small" to="/Adminlogin">Already have an account? Login!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default CreateAdminRegister