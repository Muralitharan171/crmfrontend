import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Createuser from './Createuser';
import './css/sb-admin-2.css'
import Dashboard from './Dashboard';
import Edituser from './Edituser';
import Login from './Login';
import Portal from './Portal';
import Registerui from './Registerui'
import Users from './Users';
import Userview from './Userview';
import Adminlogin from './Adminlogin';
import Createadminregister from './Createadminregister';
import Adminportal from './Adminportal';
import Admins from './Admins';
import Adminview from './Adminview';
import Adminuserprocess from './Adminuserprocess';
import Editadmin from './Editadmin';
import Createadmin from './Createadmin';
import Mainpage from './Mainpage';
import Editadminuser from './Editadminuser';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Mainpage></Mainpage>}></Route>
      <Route path='/Userlogin' element={<Login></Login>}></Route>
      <Route path='/Registerui' element={<Registerui></Registerui>}></Route>
      <Route path='/Portal' element={<Portal></Portal>}>
        <Route path='Dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='Users' element={<Users></Users>}></Route>
        <Route path='Users/:id' element={<Userview></Userview>}></Route>
        <Route path='Users/Edit/:id' element={<Edituser></Edituser>}></Route>
        <Route path='Create-user' element={<Createuser></Createuser>}></Route>
      </Route>
      <Route path='/Adminlogin' element={<Adminlogin></Adminlogin>}></Route>
      <Route path='/Createadminregister' element={<Createadminregister></Createadminregister>}></Route>
      <Route path='/Adminportal' element={<Adminportal></Adminportal>}>
        <Route path='Adminuserprocess' element={<Adminuserprocess></Adminuserprocess>}></Route>
        <Route path='Adminuserprocess/Edit/:id' element={<Editadminuser></Editadminuser>}></Route>
        <Route path='Admins' element={<Admins></Admins>}></Route>
        <Route path='Admins/:id' element={<Adminview></Adminview>}></Route>
        <Route path='Admins/Edit/:id' element={<Editadmin></Editadmin>}></Route>
        <Route path='Create-admin' element={<Createadmin></Createadmin>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
