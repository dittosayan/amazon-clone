import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from './components/Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { useEffect } from 'react';


function App() {
  const [state,dispatch]=useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log(authUser);
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        }
        )
      }
      else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[]);

  return (
    <Router>
      <div className="app">
        <Switch>
          
          <Route path='/login'>
            <Login/>
          </Route>

          <Route exact path='/checkout'>
            <Header/>
            <Checkout/>
          </Route>

          <Route exact path='/'>
            <Header/>
            <Home/>
          </Route>

        </Switch>
      </div>
    </Router>

  );
}

export default App;
