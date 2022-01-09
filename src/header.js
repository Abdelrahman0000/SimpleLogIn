import React from "react";

import { useContext } from "react/cjs/react.development";
import {Authcontext} from "./authprov";
export default function Header (){
function logout (){

  localStorage.removeItem('token');
  localStorage.removeItem('email');
  authme.setAuth({});

}

  const authme=useContext(Authcontext);
    return(
        
<nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1">React</span>
  <div>{authme.auth.email ?<div>
{authme.auth.email}
<button className="btn btn-danger btn-sm m-1" type="submit" onClick={logout}>Logout</button>
       
  </div>:  <span className="navbar-brand mb-0 text-end">you should login</span>}</div>
  </div>
</nav>
    )
} 