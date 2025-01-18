import React, { useContext } from 'react'
import './main.css'
import { assets } from '../../assets/assets'
import { context } from '../../context/Context'
const Main = () => {
    const {onsent,recentprompt,showresult,loading,resultdata,setinput,input}=useContext(context);
  return (
   <div className="main">
    <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
    </div>

    <div className="main-container">
    {!showresult?<> <div className="greet">
            <p><span>Hello,Anvit</span></p>
            <p>How Can I Help You Today?</p>
        </div>
        <div className="cards">
        <div className="card">
                <p>secesxerxre</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
                <p>qwertyui</p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
                <p>asdfghjkmnbvcxdfg</p>
                <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
                <p>poiuytfgvcftghbvcfghbvfgh</p>
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
                <input type="text" value={input} onChange={(e)=>{setinput(e.target.value)}} placeholder='Enter a prompt here'/>
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.menu_icon}alt="" />
                    <img  onClick={() => {onsent()}} src={assets.send_icon} alt="" />
                </div>
            </div>
            <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
            </p>
        </div>
    </div>
   </div>
  )
}

export default Main
