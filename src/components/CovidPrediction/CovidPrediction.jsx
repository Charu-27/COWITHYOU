import react,{useState} from "react";
import "./covidPrediction.css"
import CoWithYou from "../Donor/CoWithYou Logo.png"
import "./covidPrediction.css"
const CovidPrediction=()=>{
    const [date,setDate]=useState('');
    const[cases,setCases]=useState(null)
    const handleInputs=(e)=>{
        setDate(e.target.value)
    }
    const PostData=async (e)=>{
        e.preventDefault()
        const formdata=new FormData()
        formdata.append("date",date)
        console.log(date)
         const res= await fetch("        https://covid19mlapi.herokuapp.com/predict",{
            method:"POST",
            body:formdata
        })
        const data=await res.json();
        if(res.status===400||!data){
            window.alert("Not found!!");
        }
        else{
            console.log(res.status)
            console.log(data.cases)
            setCases(data.cases)
        }

    }
    return(
        <>
        <div className="container7">
        <div id="header7">
        <img className="Logo1"src={CoWithYou}></img>Namsthey SAVES your life... Shake hand SHAKES your life... 
        <img className="Logo2" src={CoWithYou}></img></div>
  
           <p id="paragraph"> Predicts the number of positive cases on a particular day using Machine Learning algorithms</p>
           <form method="POST" onSubmit={PostData} className="Predict" action="submit">
            <h1>Enter the Date  (YYYY-MM-DD)</h1>
            <input type="text" name="date"  id="date" value={date} placeholder="Enter Date" onChange={handleInputs}/>
            <button id="Predict2" type="submit">Predict</button>
           <div className="result"> <h2 id="result">{cases}</h2></div>
        
        <button className="MENU" onClick={()=>{window.location.href="/gateway"}}>Back to menu</button>
        </form>
        </div>
        </>
    )
}
export default CovidPrediction