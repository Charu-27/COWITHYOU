import react,{useState,useEffect} from "react";
import "./SignUp.css"
import CoWithYou from "./CoWithYou Logo.png"
import {useHistory} from "react-router-dom"
import "@chakra-ui/react"
import {FormControl,Input,InputGroup, Button } from "@chakra-ui/react";
const SignUp=()=>{
    var history=useHistory()
    const [user,setUser]=useState({
        name:null,
        email:null,
        phone:null,
        password:null,
        cpassword:null
    })
    let name,value
    const handleInputs=(e)=>{

        name=e.target.name;
        value=e.target.value
        if(!name||!value)
        window.alert("ERROR")
        else
        setUser({...user,[name]:value})
    }
    const PostData=async (e)=>{
        e.preventDefault()
        const {name,email,phone,password,cpassword}=user;
        const res=await fetch("/Register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,phone,password,cpassword
            })
        })
        const data=await res.json();
        if(res.status===400||!data){
            window.alert("Invalid registration");
            console.log("Invalid registration")
        }
        else{
            console.log(res.status)
            window.alert("Successful registration");
            console.log("Successful registration")
            console.log(history)
        }
    }
    return(
        <>
        <div className="container2">
        <div id="header2">
        <img className="Logo1"src={CoWithYou}></img>Namsthey SAVES your life... Shake hand SHAKES your life... 
        <img className="Logo2" src={CoWithYou}></img></div>
        
            <form method="POST"  className="form2">
               <div className="Details">
               <p id="heading2">Register on CoWithYou</p>
                <div id="name2">
                NAME:- </div> 
                <FormControl isRequired>
            <InputGroup>
                    <Input  type="text" name="name"  placeholder="Enter your name" value={user.name}onChange={handleInputs}/>
                   </InputGroup></FormControl>
                    <div id="email2">
                    EMAIL:-  </div>
                    <FormControl isRequired>
            <InputGroup>
                    <Input  type="email" name="email" placeholder="Enter your email" value={user.email}onChange={handleInputs}/>
                  </InputGroup></FormControl>
                    <div id="phone2" >
                    PHONE:-</div>
                    <FormControl isRequired>
            <InputGroup>
                    <Input type="Number" name="phone"  placeholder="Enter your phone" value={user.phone}onChange={handleInputs}/>
                    </InputGroup></FormControl>
                    <div id="password2">
                    PASSWORD</div>
                    <FormControl isRequired>
            <InputGroup>
                    <Input  type="text" name="password" id="password" placeholder="Enter your password" value={user.password}onChange={handleInputs}/>
                    </InputGroup></FormControl>
                    <div id="cpassword2">
                    CONFIRM PASSWORD </div>
                    <FormControl isRequired>
            <InputGroup>
                    <Input  type="text" name="cpassword" placeholder="Confirm your password" value={user.cpassword} onChange={handleInputs}/>
                  </InputGroup></FormControl>
                    <div id="Submit"> 
                    <input type='submit' name="signup" id="signup"  value="REGISTER" onClick={PostData} />
                    <a href="/Login" text-align="center"> Back to Login</a> </div>
                    </div>
                </form>
               
            </div>
            </>
    )
}
export default SignUp;