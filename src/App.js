import './App.css';
import {signup} from "./firebase"
import {useRef, useState} from "react"


export default function App() {
//estado
const [loading,setLoading] =useState(false);

//se hace referencia a inputs
  const emailRef = useRef();
  const passwordRef= useRef();

const handleSignup = async()=>{

setLoading(true);
    try{
      await signup(emailRef.current.value,passwordRef.current.value)

    }catch{
      alert('Error');
    }

setLoading(false);
 
}
//

  return (
    <div id="App"> 
    <div id="fields">
    <input ref={emailRef} placeholder='Email'/>
    <input ref={passwordRef} type="password" placeholder='Password'/>
    </div>
    <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}
