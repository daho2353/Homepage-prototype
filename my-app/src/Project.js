import React from 'react';


function Project(props)
{
    
    if (props.size === "large") return (
        <section className ="project-container">
            <h1> {props.title} </h1>
            <a href={props.website}><img src={props.image} height ="300px" width="500px"/></a>
            <p className="project-description"> {props.projectText}</p>
        </section>
    )
    else return (
        <section className ="project-container">
            <h1> {props.title} </h1>
            <a href={props.website}><img src={props.image} height ="100px" width="100px"/></a>
            <p className="project-description"> {props.projectText}</p>
        </section>

    ) 

} 

export default Project;