
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
import NoAccess from './pages/NoAccess';
import PrivateRouter from './components/PrivateRouter';
import AdminRouter from './components/AdminRouter';
import ForceRedirect from './components/ForceRedirect';
import store from './redux/store'
import jwt_decode from 'jwt-decode'
import { Logout, setUser } from './redux/actions/authActions';
import { useSelector } from 'react-redux';
import { setAuth } from './util/setAuth';
import ListUser from './components/ListUser';

import AllEmployees from "./components/AllEmployees";
import { AddEmployee } from './components/AddEmployee';
import EmployeeDetails from './components/EmployeeDetails';

 if(window.localStorage.jwt){
   const decode = jwt_decode(window.localStorage.jwt)
   store.dispatch(setUser(decode))
   setAuth(window.localStorage.jwt)
   const currentDate = Date.now / 1000

   if(decode.exp >  currentDate){
    store.dispatch(Logout()) 
   }
 }


function App() {
  const auth = useSelector(state => state.auth)
  const user = {
    isConnected: auth.isConnected,
    role: auth.user.role
  }
  return (
    <BrowserRouter>
    <div className="bg-light" style={{height: "100vh"}}>
     <Navbar user={user}/>
    <Routes>
        
    
     
          <Route path="/" element={
          <PrivateRouter user={user}>
            <Profile />
          </PrivateRouter>
        } />
               <Route path="/listuser" element={
          <PrivateRouter user={user}>
            <ListUser />
          </PrivateRouter>
        } />




<Route path="/listemployee" element={
          <PrivateRouter user={user}>
            <AllEmployees />
          </PrivateRouter>
        } />


<Route path="/addemplyee" element={
          <PrivateRouter user={user}>
            <AddEmployee />
          </PrivateRouter>
        } />


<Route path="/EmployeeDetails" element={
          <PrivateRouter user={user}>
            <EmployeeDetails  />
          </PrivateRouter>
        } />


          <Route path="/login" element={
          <ForceRedirect user={user}>
            <Login />
          </ForceRedirect>
        } />
          <Route path="/register" element={
          <ForceRedirect user={user}>
            <Register />
          </ForceRedirect>
        } />
          <Route path="/admin" element={
          <AdminRouter user={user}>
            <Admin />
          </AdminRouter>
        } />
          <Route path="*" element={<NotFound />} />
          <Route path="/noaccess" element={<NoAccess />} />
    </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
