import React from 'react';
import Portrait from './img/Portrait.png';
import LinkedInIcon from './img/LinkedInIcon.png';
import GithubIcon from './img/GithubIcon.png'

function Home(props)
{
    if (props.activeCheck === "Home") return(
    <section className="Home-Container">
    <h2> About me </h2>
    <img src={Portrait} height="300px" width="300px" alt="profile image"/> 
    <p> Hello, and welcome to my website, my name is Damian Howard. I am graduate from the University of Colorado Boulder. I studied for a degree in technology, arts and media with a minor in computer science. I hope to one day work on front-end development projects where I can put both my creative and technical skills to work. Please take a look at my Resume and Portfolio to see my skills at work!
        <br/> <br/>
        Contact Information:
        <br/>
        Email: daho2353@colorado.edu
    </p>
    <a href="https://www.linkedin.com/in/damian-howard-801906174/"><img class="icon" src={LinkedInIcon} height="50px" width="50px"/></a>
    <a href="https://github.com/daho2353"><img class="icon" src={GithubIcon} height="50px" width="50px"/></a>
  </section>
    )
  else return(
    <p></p>
  )
}

export default Home;