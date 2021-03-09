import React from 'react';




//Design concept in Red Notebook
function Resume(props)
{
    if (props.activeCheck === "Resume") return(
        <section className="Resume-Container">
        <h2> Resume </h2>
        <h2 className="underlined"> Skills </h2>
        <div className = "CaptionedImage">
            <img width="150px" height="150px"/>
            <p className = "caption"> Skills - experience </p>
        </div>
        <div className = "CaptionedImage">
            <img width="150px" height="150px"/>
            <p className = "caption"> Skills - experience </p>
        </div>
        <div className = "CaptionedImage">
            <img width="150px" height="150px"/>
            <p className = "caption"> Skills - experience </p>
        </div>
        <div className = "CaptionedImage">
            <img width="150px" height="150px"/>
            <p className = "caption"> Skills - experience </p>
        </div>
        <div className = "CaptionedImage">
            <img width="150px" height="150px"/>
            <p className = "caption"> Skills - experience </p>
        </div>
        <div className = "CaptionedImage">
            <img width="150px" height="150px"/>
            <p className = "caption"> Skills - experience </p>
        </div>
        <div className = "CaptionedImage">
            <img width="150px" height="150px"/>
            <p className = "caption"> Skills - experience </p>
        </div>
        <div className = "CaptionedImage">
            <img width="150px" height="150px"/>
            <p className = "caption"> Skills - experience </p>
        </div>
        </section>
       
    )
    else return(
        <p></p>
      )
}

export default Resume;