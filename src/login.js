import React , {useState}from "react";
import { useContext } from "react/cjs/react.development";
import {Authcontext} from "./authprov";
export function Loginf() {
const [email ,setEmail]=useState('');
const [password ,setPassword]=useState('');
const authme=useContext(Authcontext);
 
function login (e){
e.preventDefault();
if(password==='123'){
const token ='abc';
localStorage.setItem('token',token);
localStorage.setItem('email',email);
authme.setAuth({token,email});
}
else{
    alert('wrong type')
}
}


    return (
        <div>
            <h1>LOGIN</h1>
  <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control mb-3" placeholder="Email" />
  <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control mb-2" placeholder="Password" />
  <button className="btn btn-primary" type="submit" onClick={login}>Login</button>
        </div>
    )

}



