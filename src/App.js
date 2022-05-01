import './App.css';
import {signup} from "./firebase"
import {useRef} from "react"


export default function App() {
  const emailRef = useRef();
  const passwordRef= useRef();

const handleSignup = async()=>{
  await signup(emailRef.current.value,passwordRef.current.value)

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
