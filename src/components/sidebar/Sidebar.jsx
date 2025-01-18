import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { context } from '../../context/Context';
const Sidebar = () => {
  const [extended,setextended]=useState(false);
  const {onSent,prevprompt,setprevprompt}=useContext(context);
  const toggle=()=>{
    if(extended==false){
      setextended(true);
    }
    else{
      setextended(false);
    }
  }
  return (
    <>   
     
   <div className="sidebar">
       <div className="top">
         <img onClick={toggle} className="menu "src={assets.menu_icon} alt="" />
           <div className="new-chat">
            <img src={assets.plus_icon} alt="" />
            {extended?<p>New Chat</p>:null}
           </div>
           {extended?<div className="recent">
            <p className="recent-title">Recent</p>

            {prevprompt.map((item,index)=>{
              return (
                <div className="recent-entry">
                <img src={assets.message_icon} alt="" />
                <p>{item.slice(0,15)} ...</p>
               </div>
              );
            })}

             

           </div>:null}
       </div>
       <div className="bottom">
       <div className="bottom-item  recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extended?<p>Help</p>:null}
                  </div>

                  <div className="bottom-item  recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extended?<p>Activity</p>:null}
                  </div>

                  <div className="bottom-item  recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extended?<p>Settings</p>:null}
                  </div>

       </div>

   </div>
   </>

  )
}

export default Sidebar
