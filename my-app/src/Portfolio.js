import React from 'react';
import Project from './Project.js';

function Portfolio(props)
{
    if (props.activeCheck === "Portfolio") return(
        <section className = "Portfolio-container">
            <h2> Software Development Projects</h2>
            <Project title="hey" website="_blank" image="title.jpg" projectText="words"/>
        </section>
    )
    else return(
        <p></p>
      )
}

export default Portfolio;