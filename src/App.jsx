

import './App.css'
import Login from './components/main/Login';
import Main from './components/main/Main'
import Sidebar from './components/sidebar/Sidebar'
import { useState } from 'react';


function App() {
 const[mode,setmode]=useState('dark');
 const [logedin,setlogedin]=useState(false);
 const [naam,setnaam]=useState("GenIT User");

  return (
    <>
    
    {logedin ? (
      <>
        <Sidebar mode={mode} />
        <Main mode={mode} setmode={setmode} naam={naam}/>
      </>
    ) : (
      <Login setlogedin={setlogedin} setnaam={setnaam} />
    )}
    
 
    
    </>
  )
}

export default App
