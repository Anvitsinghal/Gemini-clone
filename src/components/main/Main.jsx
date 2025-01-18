import React, { useContext, useState } from 'react'
import './main.css'
import { assets } from '../../assets/assets'
import { context } from '../../context/Context'
import PropTypes from 'prop-types'

const Main = ({mode,setmode,naam}) => {
    const {onsent,recentprompt,showresult,loading,resultdata,setinput,input}=useContext(context);
    
  return (
    <>
    {mode==='dark'?  <div className="main">
    <div className="nav">
        <p>GenIT</p>
        <label>
  <input type="checkbox" onClick={()=>{if(mode==='light'){setmode('dark')} else{setmode('light')}}}/>
  {mode}  {/* This will render the text next to the checkbox */}
</label>

        <img src={assets.user_icon} alt="" />
    </div>

    <div className="main-container">
    {!showresult?<> <div className="greet">
            <p><span>Hello,{naam}</span></p>
            <p>How Can I Help You Today?</p>
        </div>
        <div className="cards">
        <div className="card">
                <p>Accepts text, images</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
                <p>Advanced reasoning</p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
                <p>Code generation</p>
                <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
                <p> Multilingual</p>
                <img src={assets.code_icon} alt="" />
            </div>
        </div></>:<><div className="result">
            <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentprompt}</p>
            </div>
            <div className="resultdata">
                <img src={assets.gemini_icon} alt="" />
                <p dangerouslySetInnerHTML={{__html:resultdata}}></p>
            </div>
            </div></>}
        <div className="main-bottom">
            <div className="search-box">
                <input type="text" value={input} onChange={(e)=>{setinput(e.target.value)}} placeholder='Enter a prompt here' onKeyDown={(e)=>{if(e.key==="Enter"){onsent();}}}/>
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon}alt="" />
                    <img  onClick={() => {onsent()}} src={assets.send_icon} alt="" />
                </div>
            </div>
            <p className="bottom-info">
            GenIT may display inaccurate info, including about people, so double-check its responses. Your privacy and GenIT Apps
            </p>
        </div>
    </div>
   </div>:<div className="main" style={{color:'white',backgroundColor:'black'}}>
    <div className="nav">
        <p>GenIT</p>
        <label style={{color:'white'}}>
  <input  type="checkbox" onClick={()=>{if(mode==='light'){setmode('dark')} else{setmode('light')}}}/>
  {mode}  {/* This will render the text next to the checkbox */}
</label>

        <img src={assets.user_icon} alt="" />
    </div>

    <div className="main-container">
    {!showresult?<> <div className="greet">
            <p><span>Hello,{naam}</span></p>
            <p>How Can I Help You Today?</p>
        </div>
        <div className="cards">
        <div className="card">
                <p>Accepts text, images</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
                <p>Advanced reasoning</p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
                <p>Code generation</p>
                <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
                <p> Multilingual</p>
                <img src={assets.code_icon} alt="" />
            </div>
        </div></>:<><div className="result">
            <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentprompt}</p>
            </div>
            <div className="resultdata">
                <img src={assets.gemini_icon} alt="" />
                <p dangerouslySetInnerHTML={{__html:resultdata}}></p>
            </div>
            </div></>}
        <div className="main-bottom">
            <div className="search-box">
                <input type="text" value={input} onChange={(e)=>{setinput(e.target.value)}} placeholder='Enter a prompt here' onKeyDown={(e)=>{if(e.key==="Enter"){onsent();}}}/>
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon}alt="" />
                    <img  onClick={() => {onsent()}} src={assets.send_icon} alt="" />
                </div>
            </div>
            <p className="bottom-info">
            GenIT may display inaccurate info, including about people, so double-check its responses. Your privacy and GenIT Apps
            </p>
        </div>
    </div>
   </div>}
 
   </>
  )
}

export default Main
