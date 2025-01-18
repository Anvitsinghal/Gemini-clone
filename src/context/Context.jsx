import { createContext, useState } from "react";
import run from "../config/gemini";

export const context= createContext();
const ContextProvider=(props)=>{

    const [input,setinput]=useState("");
    const [recentprompt,setrecentprompt]=useState("");
    const[prevprompt,setprevprompt]=useState([]);
    const[showresult,setshowresult]=useState(false);
    const[loading,setloading]=useState(false);
    const[resultdata,setresultdata]=useState("");

       const delaypara=(index,nextword)=>{
          setTimeout(() => {
             setresultdata(prev=>prev+nextword);
          }, 95*index);
       }

        const onsent=async (prompt)=>{
            setresultdata("");
            setloading(true);
            setshowresult(true);
            setrecentprompt(input);
            setprevprompt(prev=>[...prev,input]);
            const response= await run(input);
            let responsearray=response.split("**");
            let newarray="";
            for(let i=0;i<responsearray.length;i++){
                if(i==0|| i%2!==1){
                    newarray+=responsearray[i];
                }
                else{
                    newarray+="<b>"+ responsearray[i]+"</b>";
                }
            }
            let newresponse2=newarray.split("*").join("</br>");
            // setresultdata(newresponse2);
            let finalresult = newresponse2.split(" ");
            for(let i=0;i<finalresult.length;i++){
                delaypara(i,finalresult[i]+" ");
            }
            setloading(false);
            setinput("");
        }
        
    const contextvalue={
            prevprompt,
            setprevprompt,
            onsent,
            setresultdata,
            setrecentprompt,
            recentprompt,
            showresult,
            loading,
            resultdata,
            input,
            setinput

    }
    return (
        <context.Provider value={contextvalue}>
            {props.children}
        </context.Provider>

    );
}
export default ContextProvider;