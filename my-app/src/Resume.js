import React from 'react';
import SkillTile from './SkillTile.js';
import WorkTile from './WorkTile.js'
import ReactIcon from './img/ReactIcon.svg';
import JavaScriptIcon from './img/JavaScriptIcon.png';
import GTTIcon from './img/GTTLogo.png';
import HTMLIcon from './img/HTMLLogo.png';
import CSSIcon from './img/CSSIcon.png';

//Design concept in Red Notebook

let workTasks = ["test", "test", "test"];
function Resume(props)
{
    if (props.activeCheck === "Resume") return(
        <section className="Resume-Container">
            <h2> Resume </h2>
            <h2 className="underlined"> Skills </h2>
            <section className="skills">
                <SkillTile src={ReactIcon} desc = "React JS" experience="4 years"/>
                <SkillTile src={JavaScriptIcon} desc = "Javascript" experience ="6 years"/>   
                <SkillTile src={HTMLIcon} desc = "HTML" experience ="6 years"/> 
                <SkillTile src={CSSIcon} desc = "CSS" experience ="6 years"/>   
            </section>
            <h2 className="underlined"> Work Experience </h2>
            <WorkTile src={GTTIcon} desc= "test" task1="task1" task2="task2" task3="task3" task4="task4"/>
            <WorkTile desc= "test" task1="task1" task2="task2" task3="task3" task4="task4"/>
            <WorkTile desc= "test" task1="task1" task2="task2" task3="task3" task4="task4"/>
            <WorkTile desc= "test" task1="task1" task2="task2" task3="task3" task4="task4"/>
            <h2 className="underlined"> Education </h2>
            <div className="CaptionedImage">
                <img width="150px" height="150px"/>
                <p classname = "caption"> Univeristy of Colorado Boulder <br/> Major : Technology,Arts and Media <br/> Minor: Computer Science <br/> GPA: 3.1 </p>
            </div>
            <div className="CaptionedImage">
                <img width="150px" height="150px"/>
                <p classname = "caption"> Centaurus High School  <br/> International Baccalaureate Degree <br/> Pre-Engineering honors <br/>  Graduated top 20 % of my class </p>
            </div>
        </section>
       
    )
    else return(
        <p></p>
      )
}

export default Resume;