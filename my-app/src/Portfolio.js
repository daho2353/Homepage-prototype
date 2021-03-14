import React from 'react';
import Project from './Project.js';
import ReactPlayer from "react-player";

const videoStyle = {
    display: 'inline-block',
    width: '300px',
};
function Portfolio(props)
{
    if (props.activeCheck === "Portfolio") return(
        <section className = "Portfolio-container">
            <h2> Software Development Projects</h2>
            <Project title="Discord Bot" size="large" website="https://github.com/daho2353/Discord-Bot" image="title.jpg" projectText="words" />
            <div className="project-container">
                <h1> A Space Bear Adventure</h1>
                <ReactPlayer url="https://youtu.be/ie4Q3VwbWSA" style={videoStyle} width="500px" />
                <p> Project Description </p>
            </div>
            <Project title="Arduino Projects" size="large" website="_blank" image="title.jpg" projectText="words" />
            <Project title="Connect 4" size="large" website="_blank" image="title.jpg" projectText="words" />
            <Project title="Discover M(you)sic (senior captsone)" size="large" website="_blank" image="title.jpg" projectText="words" />
            <Project title="Pico 8 - Ice Puzzles" size="large" website="_blank" image="title.jpg" projectText="words" />
            <Project title="Dark Soul Fan Wiki" size="large" website="_blank" image="title.jpg" projectText="words" />
            <Project title="Matching Game" size="large" website="_blank" image="title.jpg" projectText="words" />
            <Project title="Javascript Clock" size="large" website="_blank" image="title.jpg" projectText="words" />
            <Project title="My previous home page" size="large" website="_blank" image="title.jpg" projectText="words" />
            <br/>
            <Project title="Github Group Practice" size="small" website="_blank" image="title.jpg" projectText="words" />
            <Project title="Bash Terminal Practice" size="small" website="_blank" image="title.jpg" projectText="words" />
            <Project title="Parralax Gaming History" size="small" website="_blank" image="title.jpg" projectText="words" />
            <Project title="Event Listener Practice" size="small" website="_blank" image="title.jpg" projectText="words" />
            <Project title="Firebase and Forms Practice" size="small" website="_blank" image="title.jpg" projectText="words" />
            <Project title="HTML Forms Practice" size="small" website="_blank" image="title.jpg" projectText="words" />
            <Project title="Dom Manipulation" size="small" website="_blank" image="title.jpg" projectText="words" />
            <Project title="React To-Do List" size="small" website="_blank" image="title.jpg" projectText="words" />
            <Project title= "Flexbox Practice" size="small" website="_blank" image="title.jpg" projectText="words" />
            <Project title= "Pico 8 - Tiny Games" size="small" website="_blank" image="title.jpg" projectText="words" />
            <Project title="Bitsy - Tiny Games" size="small" website="_blank" image="title.jpg" projectText="words" />
            <Project title="Unity SHMUP" size="small" website="_blank" image="title.jpg" projectText="words" />
        </section>
    )
    else return(
        <p></p>
      )
}
export default Portfolio;
