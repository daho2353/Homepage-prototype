import React from 'react';

function Project(props)
{
    
    if (props.size === "large") return (
        <section className ="project-container">
            <h1> {props.title} </h1>
            <a href={props.website}><img src={props.image} height ="150px" width="150px"/></a>
            <p className="project-description"> {props.projectText}</p>
        </section>
    )
    else return (
        <section className ="project-container">
            <h1> {props.title} </h1>
            <a href={props.website}><img src={props.image} height ="50px" width="50px"/></a>
            <p className="project-description"> {props.projectText}</p>
        </section>

    ) 

} 

export default Project;