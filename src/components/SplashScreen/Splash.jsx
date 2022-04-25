import React,{useState,useEffect} from "react";
import "./Splash.css";
import "@chakra-ui/react"
import {Text} from "@chakra-ui/react";
import Typewriter from 'typewriter-effect';

function Splash(){
  useEffect(()=>{
    const timer=setTimeout(() => {
      document.getElementById("bg").style.display="none";
      window.location.href="/Login"
    }, 5000);
    return ()=>{clearTimeout(timer)}

  },[])
return(<> 

<div className="bg" id="bg">
  <div className="image1" alt=""/>
  
  <Text  className="text" >
  <Typewriter
  onInit={async (typewriter) => {
    typewriter.typeString('An Initiative by GGCT students').pause(5).start();
  }}
/>
     </Text>
</div>


  </>
)


}
export default Splash;