import react,{useState} from "react";
import "./donor.css"
import CoWithYou from "./CoWithYou Logo.png";
import "@chakra-ui/react"
import {FormControl,Input,InputGroup } from "@chakra-ui/react";
const Donor=()=>{
    const [pro,setProduct]=useState({
        Pname:null,
        PMD:null,
        PED:null,
        Contact:null,
        PDescription:null
    })
    let name,value
    const handleInputs=(e)=>{
        name=e.target.name;
        value=e.target.value
        setProduct({...pro,[name]:value})
    }
    const PostData=async (e)=>{
        e.preventDefault()
        const {Pname,PMD,PED,Contact,PDescription}=pro;
        const res=await fetch("/Donor",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                Pname,PMD,PED,Contact,PDescription
            })
        })
        const data=await res.json();
        console.log(data)
        if(res.status===400||!data){
            window.alert("Failed to Upload.Check the details you have filled and try again");
            console.log("Failed to Upload.Check the details you have filled and try again")
        }
        else{
            console.log(res.status)
            window.alert("Product uploaded successfully");
            console.log("Product uploaded successfully")
            window.location.reload(false)
        }
    }
    return(
        <>
        <div className="container4" >
        <div className="header4">
        <img id="Logo1"src={CoWithYou}></img>Namsthey SAVES your life... Shake hand SHAKES your life... 
        <img id="Logo2" src={CoWithYou}></img></div>
        <div className="Form3" >
        <div id="heading3">
        Upload product details on CoWithYou
        </div>
        
                <form method="POST" classname="form3" >
                <div id="P-name">
                Product Name:-  </div>
                <FormControl isRequired>
                <InputGroup>
                    <Input type="text" name="Pname"  id="Pname" placeholder="Enter product's name" value={pro.Pname}onChange={handleInputs}/>
                    </InputGroup></FormControl>
                    <div id="PMD">
                    Manufacturing Date:-   </div>
                    <FormControl isRequired>
                    <InputGroup>
                    <Input type="text" name="PMD" placeholder="Enter the product manufacture's date" value={pro.PMD}onChange={handleInputs}/>
                    </InputGroup></FormControl>
                    <div id="PED" >
                    Expiry date:-  </div>
                    <FormControl isRequired>
                    <InputGroup>
                    <Input type="text" name="PED"  placeholder="What is the expiry date of product" value={pro.PED}onChange={handleInputs}/>
                    </InputGroup></FormControl>
                    <div id="Contact-info">
                    Contact</div>
                    <FormControl isRequired>
                    <InputGroup>
                    <Input type="number" name="Contact" id="Contact" placeholder="Enter your contact number" value={pro.Contact}onChange={handleInputs}/>
                    </InputGroup></FormControl>
                    <div id="PDescription">
                    Product Description </div>
                    <FormControl isRequired>
                    <InputGroup>
                    <Input type="text" name="PDescription" placeholder="Describe your product in brief with all essential features." value={pro.PDescription} onChange={handleInputs}/>
                    </InputGroup></FormControl>
                    <div id="Submit">
                    <input type="submit" className="submit-detail" value="UPLOAD" onClick={PostData}/>
                    </div>
                    <a href="/gateway">Back to Menu</a>
                   
                </form>
                </div> 
                </div>

        </>
    )
}
export default Donor