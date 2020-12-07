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
       <Layout authenticated={authenticated}>
          <Switch>
              <Route exact path='/' component={(props)=>(
                
                    <AboutUs {...props}/>
                  
              )}/>
              <Route toggleAuthenticated={toggleAuthenticated} path='/login' component={(props)=>(
              
                  <LogIn {...props}/>
                
              )}/>
              <Route path='/signup' component={(props)=>(
              
                    <SignUp {...props}/>
                
              )}/>    
              <ProtectedRoute authenticated={authenticated} exact path='/board' component={(props)=>(
              
                  {/* <ViewBoard {...props}/> */}
              
              )}/>
              <ProtectedRoute authenticated={authenticated} path='/profile/create' component={(props)=>(
              
                  {/* <CreateProfile {...props}/> */}
                
              )}/>
            </Switch>
       </Layout>
    </div>
      )
    
}

export default withRouter(Router)
