import React from "react";
import "./About.css";
import img22 from "./LACTO.jpeg"
const About =()=>{
    return(
        <div className="about">
           <div className="left">
           
                <img src={img22} alt=""/>
                
          <div className="right">
           <h1>FANT-STR</h1>
          <h3><span>str</span>awebry</h3> 
           <p>Chez CollectionFanta, nous importons des saveurs de Fanta du monde <br/>entier pour en faire profiter nos clients français et européens.
Fanta chinois à la fleur de jasmin, Fanta japonais au yaourt ou encore Fanta tanzanien au miel<br/> nous importons les saveurs les plus étranges et originales.
Comment nous est venu à l'idée de vendre uniquement des saveurs de Fanta ?<br/>
C'est au mois d'août 2019 que nous avons . <br/>L'objectif de ce compte Instagram est de répertorier l'intégralité des saveurs de la marque de soda Fanta. Chaque publication représente une saveur de Fanta avec son image, son lieu de production, son histoire et son goût.

À ce jour, plus de 130 saveurs sont publiées, et il en manque encore beaucoup ! </p>
          
           </div>
           </div>
        </div>
    )
}
export default About