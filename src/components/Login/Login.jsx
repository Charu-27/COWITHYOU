
import react,{useState} from "react";
import "./login.css";
import CoWithYou from "./CoWithYou Logo.png"
import "@chakra-ui/react"
import {FormControl,Input,InputGroup } from "@chakra-ui/react";
function Login()
{var flag;

 function validate(e) {
   let name=e.target.value;
   if(name.length==0)
{flag=0;}
else{flag=1;}
}

const [email,setEmail]=useState("");
const [password,setPassword]=useState("")

const LoginUser=async (e)=>{
  e.preventDefault()
  const res=await fetch("/Login",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
email,password
    })
  })
  const data=res.json();
  if(!data||res.status===400){
    window.alert("Invalid credentials")
  }
  else{
    window.alert("Succesfully LoggedIn")
    window.location.href="/gateway"
  }
}
  
   return(<>
   <div className="container">
   <div id="header">
        <img id="Logo1"src={CoWithYou}/>
        Namsthey SAVES your life...Shake hand SHAKES your life... 
        <img id="Logo2" src={CoWithYou}/>
   </div>
   <div className="form1">
          <form  class="FORM1" method="POST" action="submit" >
          <h3 id="heading"> LogIn to CoWithYou</h3>
         
          <div className="Email">
          E-MAIL</div>
          <FormControl isRequired>
            <InputGroup>
              <Input id="e-mail" type="email" placeholder="Enter your E-mail"  value={email} onChange={(e)=>setEmail(e.target.value)}mt={'2'} />
              </InputGroup></FormControl>
              <div className="Password">
              PASSWORD</div>
              <FormControl isRequired><InputGroup>
              <Input id="password" value={password} onChange={(e)=>setPassword(e.target.value)}type="password" placeholder="Enter your password"  mt={'2'} />
              </InputGroup></FormControl>
              <div id="button">
            <button className="button" type={'submit'} onClick={LoginUser} size="larger" mt={'8'} >
              Sign In
            </button>
            </div>
           <p id="link1"> <a href="/SignUp">Or
            Register Now!!</a></p>
          </form>
          </div>
          </div>
  </>
);}
export default Login;
