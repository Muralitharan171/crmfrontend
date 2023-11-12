import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { env } from './config'

const Adminview = () => {
    const params = useParams()

    const [searchParams, setSearchParams] = useSearchParams()
    console.log(...searchParams)
  
    const [adminData, setAdminData] = useState({})
  
    useEffect(() => {
      loadUser()
    }, [])
  
    let loadUser = async () => {
      try {
        let admin = await axios.get(
          `${env.api}/admin/${params.id}`,{
            headers : {
                'authorization' : window.localStorage.getItem("app-token")
            }
        }
          )
        setAdminData(admin.data)
      } catch (error) {
  
      }
  
    }
  return (
    <>
    <div className="card text-left text-opacity ml-4 mr-4" style={{color :"black" , fontSize : "40px"}}>
      <div className="card-header">
        Admin Id : {adminData._id}
      </div>
      <div className="card-body ml-5 mr-5 bg-warning" style={{fontSize : "20px"}}>
        <h5 className="card-title">Name : {adminData.name}</h5>
        <h5 className="card-title">Position : {adminData.position}</h5>
        <h5 className="card-title">Office : {adminData.office}</h5>
        <h5 className="card-title">Age : {adminData.age}</h5>
        <h5 className="card-title">Start Date : {adminData.startdate}</h5>
        <h5 className="card-title">Salarey : ${adminData.salarey}</h5>
      </div>
      
    </div>
  </>
  )
}

export default Adminview