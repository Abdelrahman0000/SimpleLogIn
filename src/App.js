import React from "react";
import { useContext } from "react/cjs/react.development";
import Authprovider,{Authcontext} from "./authprov";
import Header from "./header";
import { Loginf } from "./login";

function App() {
  const authme=useContext(Authcontext);
  return (
    <div className="container">
      <Header />
     {authme.auth.email? <div>Welcome</div>: <Loginf />}
</div>
  );
}
function Appwithstore(){
  return(
    <Authprovider>
      <App />
    </Authprovider>
  )
}


export default Appwithstore;
