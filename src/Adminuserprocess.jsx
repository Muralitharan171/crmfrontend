import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { env } from './config'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPenSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Adminuserprocess = () => {
    const [adminusers,setAdminusers] = useState ([])
    const [isLoading,setLoading] = useState(false)

    useEffect (() => {
      loadData ()
    },[])
    let loadData = async () => {
        setLoading (true);
        let adminusers = await axios.get(
            `${env.api}/adminusers`,{
                headers : {
                    'authorization' : window.localStorage.getItem("app-token")
                }
            }
            );
        setAdminusers (adminusers.data);
        setLoading(false);
    };

    let userDelete = async (id) => {
        try {
            let ask = window.confirm("Are you sure ! Do you want Delete this Data ?");
            if (ask){
                await axios.delete(
                    `${env.api}/user/${id}`,{
                        headers : {
                            'authorization' : window.localStorage.getItem("app-token")
                        }
                    }
                    )
            };
            loadData ()
           } catch (error) {

        }
    }
  return (
    // <!-- Begin Page Content -->
    <div className="container-fluid">

    {/* <!-- Page Heading --> */}
    {/* <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Users</h1>
        <Link to="/portal/Create-User" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
            className="fas fa-download fa-sm text-white-50"></i> Create User</Link>
    </div> */}
  {
    isLoading ? 
    <button className="btn btn-primary" style={{fontSize:"50px"}} type="button" disabled>
    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    Loading...
    </button> :  
    
    <div className="card shadow mb-4">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">User Data</h6>
        </div>
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" >
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                            <th>Status</th>
                            <th>User Status update</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>SN</th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                            <th>Status</th>
                            <th>User Status Update</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        {
                            adminusers.map((adminuser,index)=>{
                                  return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{adminuser.name}</td>
                            <td>{adminuser.position}</td>
                            <td>{adminuser.office}</td>
                            <td>{adminuser.age}</td>
                            <td>{adminuser.startdate}</td>
                            <td>${adminuser.salarey}</td>
                            <td>{adminuser.status}</td>
                            <td>
                                <Link to={`/Portal/Users/${adminuser._id}`} className='btn btn-sm btn-warning mr-2'><FontAwesomeIcon icon={faEye}></FontAwesomeIcon> </Link>
                                <Link  to={`/Adminportal/Adminuserprocess/Edit/${adminuser._id}`} className='btn btn-sm btn-primary mr-2'><FontAwesomeIcon icon={faPenSquare}></FontAwesomeIcon> </Link>
                                {/* <button onClick={()=>{userDelete(adminuser._id)}} className='btn btn-sm btn-danger mr-2'><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon> </button> */}
                            </td>
                        </tr>
                                  )
                            })
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  }

   

</div>
// <!-- /.container-fluid -->
  )
}

export default Adminuserprocess