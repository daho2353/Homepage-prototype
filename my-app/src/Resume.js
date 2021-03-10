import React from 'react';
import WorkTile from './WorkTile.js'

//Design concept in Red Notebook

let workTasks = ["test", "test", "test"];
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
            <h2 className="underlined"> Work Experience </h2>
            <WorkTile desc= "test" task1="task1" task2="task2" task3="task3" task4="task4"/>
            <WorkTile desc= "test" task1="task1" task2="task2" task3="task3" task4="task4"/>
            <WorkTile desc= "test" task1="task1" task2="task2" task3="task3" task4="task4"/>
            <WorkTile desc= "test" task1="task1" task2="task2" task3="task3" task4="task4"/>
        </section>
       
    )
    else return(
        <p></p>
      )
}

export default Resume;