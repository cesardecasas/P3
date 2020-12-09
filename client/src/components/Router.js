import React, { useEffect,useState} from 'react'
import { Switch,Route, withRouter } from "react-router-dom"
import ProtectedRoute  from './ProtectedRoute';
import SignUp  from '../pages/SignUp';
import LogIn  from '../pages/Login';
import AboutUs from '../pages/AboutUs';
import __CheckSession  from '../services/UserServices';
import Layout from './Layout';
import Home from '../pages/Home'
import MyBoards from '../pages/MyBoards'
import NewBoard from '../pages/NewBoard'
import BoardTask from '../pages/BoardTask'


const Router  = (props) => {

    const [currentUser,setCurrentUser]=useState(null)
    const [authenticated,setAuthenticated]=useState(false)
    
    let a=()=> props.history.push('/home')
    let b=()=> props.history.push('/')

    const verifyTokenValid = async () => {
        const token = localStorage.getItem('token')
        
        if (token) {
          try {
            const session = await __CheckSession()
            console.log('session', session)
            setAuthenticated(true)
            setCurrentUser(session.user)
            console.log(session.user);
            a()
            
          } catch (error) {
            console.log(error);
            setCurrentUser(null)
            setAuthenticated(false)
            localStorage.clear()
            b()
          }
        }
      }
    
     const toggleAuthenticated = (value, user, done) => {
       setAuthenticated(value)
       currentUser(user)
       
      }
    
      useEffect(()=>{
          verifyTokenValid()
      },[authenticated])

      return(
        <div>
       <Layout 
        authenticated={authenticated} 
        currentUser={currentUser}
        setAuthenticated={setAuthenticated}
      >
          <Switch>
              <Route 
              exact path='/' 
              component={ props => 
                  <AboutUs {...props}/>
              }/>

              <Route 
              toggleAuthenticated={toggleAuthenticated} 
              path='/login' 
              component={ props => 
                  <LogIn {...props} toggleAuthenticated={toggleAuthenticated}  currentUser={currentUser}  />
              }/>

              <Route 
              path='/signup' 
              component={ props => 
                  <SignUp {...props}/>
              }/>


              <ProtectedRoute 
                authenticated={authenticated}
                currentUser={currentUser}
                exact path='/myboards'
                component={props=><MyBoards {...props}/>}
              />


              <ProtectedRoute
               authenticated={authenticated}
               currentUser={currentUser}  
              exact path='/new-board' 
              component={ props => 
                  <NewBoard {...props}/>
              }/>   

              <ProtectedRoute
               authenticated={authenticated}
               currentUser={currentUser}  
               exact path='/home' 
               component={props=>
                <Home {...props} authenticated={authenticated}
                currentUser={currentUser}  />
               }/>

               <ProtectedRoute 
               authenticated={authenticated}
               currentUser={currentUser}
               exact path='/board'
               component={props=>
              <BoardTask {...props} authenticated={authenticated}
              currentUser={currentUser}/>
              }/>

            </Switch>
       </Layout>
    </div>
      )
    
}

export default withRouter(Router)
