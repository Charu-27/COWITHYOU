import react,{useEffect} from "react";
import './Patient.css';
import Card from "./Cards/Card"
import CoWithYou from "./CoWithYou Logo.png"
import { render } from "@testing-library/react";
import { useState } from 'react';
const Patient=()=>{
    const [data,setData]=useState([])
    var Data=[1,2,3,4,5];
    const getData=async ()=>{
        console.log("GETDATA")
        try{
            const res=await fetch("/Patient",{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            });
            setData(await res.json())
            if(!res.status===200){
                const err=new Error(res.error);
                throw err;
            }
        }catch(err){
            console.log(err)
        }
    }
    useEffect(() => {
        getData();
    },[])
    return(
        <>
         <div className="Container6" >
        <div className="header6">
        <img className="Logo1"src={CoWithYou}></img>Namsthey SAVES your life... Shake hand SHAKES your life... 
        <img className="Logo2" src={CoWithYou}></img></div>
        <div className="search_bar">
        <input type="text" placeholder="Search.." name="search" />
      <button type="submit"><i class="fa fa-search"></i></button>
         </div>
        <button className="MENU" onClick={()=>{window.location.href="/gateway"}}>Back to menu</button>
        <p id="intro">List of available Products</p>
        <div className="image"></div>
        
        {
            data.map((e)=>{
                render(
                <div>
                    <Card Pname={e.Pname} PMD={e.PMD} PED={e.PED} Contact={e.Contact} Description={e.PDescription}/>
                  </div>  
                )}
                    )
        }
      </div>
        </>
    )
}
export default Patient