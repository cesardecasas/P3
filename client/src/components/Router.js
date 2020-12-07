import React, { useEffect,useState} from 'react'
import { Switch,Route, withRouter } from "react-router-dom"
import ProtectedRoute  from './ProtectedRoute';
import SignUp  from '../pages/SignUp';
import LogIn  from '../pages/Login';
import AboutUs from '../pages/AboutUs';
import __CheckSession  from '../services/UserServices';
import Layout from './Layout';


const Router  = (props) => {

    const [currentUser,setCurrentUser]=useState(null)
    const [authenticated,setAuthenticated]=useState(false)
    
    

    const verifyTokenValid = async () => {
        const token = localStorage.getItem('token')
        if (token) {
          try {
            const session = await __CheckSession()
            console.log('session', session)
            setAuthenticated(true)
            setCurrentUser(session.user)
            
          } catch (error) {
            setCurrentUser(null)
            setAuthenticated(false)
            localStorage.clear()
          }
        }
      }
    
     const toggleAuthenticated = (value, user, done) => {
        setAuthenticated(value)
        currentUser(user)
        
      }
    
      useEffect(()=>{
          verifyTokenValid()
      })

      return(
        <div>
        <Switch>
          <Route exact path='/' component={(props)=>(
              <Layout authenticated={authenticated}>
                <AboutUs {...props}/>
              </Layout>
          )}/>
          <Route toggleAuthenticated={toggleAuthenticated} path='/login' component={(props)=>(
            <Layout authenticated={authenticated}>
              <LogIn {...props}/>
            </Layout>
          )}/>
          <Route path='/signup' component={(props)=>(
              <Layout authenticated={authenticated}>
                <SignUp {...props}/>
              </Layout>
          )}/>    
          <ProtectedRoute authenticated={authenticated} exact path='/board' component={(props)=>(
            <Layout  authenticated={authenticated}>
              {/* <ViewBoard {...props}/> */}
            </Layout>
          )}/>
          <ProtectedRoute authenticated={authenticated} path='/profile/create' component={(props)=>(
            <Layout  authenticated={authenticated}>
              {/* <CreateProfile {...props}/> */}
              </Layout>
          )}/>
        </Switch>
    </div>
      )
    
}

export default Router
