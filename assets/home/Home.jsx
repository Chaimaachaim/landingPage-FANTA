import React from "react";
import About from "../about/About"
import Contact from "../contact/Contact"
import "./Home.css"
import fanta from "./Fanta-Strawberry.jpg"
import { useHistory } from "react-router-dom";
const Home =()=>{
    let history=useHistory();
    return(
        <div className="ff">
        <div className="home">
            <div className="name1">
            <h1>fanta-strawb</h1></div>
            <div className="name2">
           strawberry
           </div>
          
           <div className="juice">
           <img src={fanta} alt=""/>
           </div>
            
           <button onClick={()=>{
            history.push("/Contact");
           }}
           className="btn1">Contact Us</button>
           </div> 
           <About/>
    <Contact/>
   
    </div>
    )
}
export default Home 