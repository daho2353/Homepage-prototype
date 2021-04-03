import React from 'react';

function SkillTile(props){
    return(
        <section className="skill-tile">
           <div className = "CaptionedImage">
                <img src={props.src} width= "150px" height="150px"/>
                <p className = "caption"> {props.desc} <br/> {props.experience} </p>
            </div>
        </section>
    );
}

export default SkillTile;