import React from "react";
import{MdLocalPhone,MdPlace, MdEmail}from "react-icons/md";
import "./Contact.css"
const Contact =()=>{
    return (
    <div className="contact">
     <div className="parag">
        <h1>Contact Us</h1>
        <p>Contact us dor Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
        </div>
     <div className="icons">
        <a className="icn1" href="https://goo.gl/maps/jrtxrUsdws3X6Qhi7">
            <MdPlace  color="#cc0000" fontSize="30px"/>
        </a>
        <a className="icn1" >
            <MdLocalPhone color="#cc0000" fontSize="30px"/>
            <p>+213 0792212110</p>
        </a>

        <a className="icn1">
            <MdEmail color="#cc0000" fontSize="30px"/>
            <p>Shaimaashaimaa203@gmail.com</p>
        </a>
      

     </div>

    </div>
    )
}
export default Contact 