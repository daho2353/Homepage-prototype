import React from 'react';

function Project(props)
{
    return(
        <section className ="Project-Container">
            <h1> {props.title} </h1>
            <a href={props.website}><img src={props.image} height ="50px" width="50px"/></a>
            <p> {props.projectText}</p>
        </section>
    )
}

export default Project;