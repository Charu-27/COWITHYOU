import react from "react";
import CoWithYou from "./CoWithYou Logo.png"
import "./Gateway.css"
const Gateway=()=>{
    return(
        <>
        <div className="container3">
   <div id="header3">
        <img className="Logo13"src={CoWithYou}/>
        Namsthey SAVES your life... Shake hand SHAKES your life... 
        <img className="Logo23" src={CoWithYou}/>
   </div>

   <h2>Choose Your Option</h2>
   <div className="Options">
       <div >
       <a href="/Donor"><div className="OpDonor">
      </div></a>
      <h3 id="p1">DONOR</h3></div>
      <div>
       <a href="AboutUs"><div className="AboutUs">
       </div></a>
       <h3 id="p2">ABOUT US</h3>
       </div>
       <div >
       <a href="/Patient"><div className="OpPatient" ></div></a>
      <h3 id="p3"> PATIENTS</h3></div>
      <div>
      <a href="/Prediction"><div
       className="Prediction"></div>
       <h3 id="p4">Covid Prediction</h3>
       </a>
   </div></div>
   </div>
        </>
    )
}
export default Gateway