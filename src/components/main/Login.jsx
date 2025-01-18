// import React from 'react'
// import './Login.css'
// import PropTypes from 'prop-types'

// const Login = ({setlogedin , setnaam}) => {
//   return (
//     <div>
//   <h1 className="typing-effect">Welcome To GenIT</h1>
//   <div className="container">
//     <form >
//       <label>
//         Enter name: <input type="text" placeholder="Enter Name" onChange={(e)=>{setnaam(e.target.value)}}/>
//       </label>
//       <label>
//         Enter Email: <input type="email" placeholder="Enter Email" />
//       </label>
//       <label>
//         Enter Password: <input type="password" placeholder="Enter Password" />
//       </label>
//       <button onClick={()=>{
//         setlogedin(true);
//       }}>Submit</button>
//     </form>
//   </div>
// </div>

//   )
// }

// export default Login

import React from 'react';
import './Login.css';
import PropTypes from 'prop-types';

const Login = ({ setlogedin, setnaam }) => {
  return (
    <div className="login-wrapper">
      <h1 className="login-header-effect">Welcome To GenIT</h1>
      <div className="login-container">
        <form className="login-form">
          <label className="login-label">
            Enter Name: 
            <input 
              type="text" 
              placeholder="Enter Name" 
              className="login-input"
              onChange={(e) => { setnaam(e.target.value); }} 
            />
          </label>
          <label className="login-label">
            Enter Email: 
            <input 
              type="email" 
              placeholder="Enter Email" 
              className="login-input" 
            />
          </label>
          <label className="login-label">
            Enter Password: 
            <input 
              type="password" 
              placeholder="Enter Password" 
              className="login-input" 
            />
          </label>
          <button 
            className="login-button" 
            onClick={(e) => {
              e.preventDefault(); // Prevent page refresh
              setlogedin(true);
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  setlogedin: PropTypes.func.isRequired,
  setnaam: PropTypes.func.isRequired,
};

export default Login;

