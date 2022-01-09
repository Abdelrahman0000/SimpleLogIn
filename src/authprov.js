import React from "react";
import { useEffect, useState } from "react/cjs/react.development";

export const Authcontext=React.createContext();
export default function Authprovider(Props){
const [auth,setAuth]=useState({})
useEffect(()=>{
    const token =localStorage.getItem('token');
const email =localStorage.getItem('email');
if(email){
setAuth({
    email,token
})
}
},[])
    return(
        <Authcontext.Provider value={{auth,setAuth}}>{Props.children}</Authcontext.Provider>
    )
} 
