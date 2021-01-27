import React from 'react';

function Resume()
{
    return(
        <section className="Resume-Container">
        <h2> Resume </h2>
            <section className="Education-Container"> 
                <h3> Education </h3>
                <img src="linked in icon" height="50px" width="50px"/> 
                <h4> University of Colorado Boulder </h4>
                <ul>
                    <li> -Major: Technology, Arts and Media in the School of engineering</li>
                    <li> -Minor: Computer Science  </li>
                </ul>
                <img src="github icon" height="50px" width="50px"/>
                <h4> Centaurus High School </h4>
                <ul>
                    <li> Graduated in the top 20% of my class</li>
                    <li> Graduated with an <a href="https://www.ibo.org/programmes/" target="_blank"> International Baccalaureate Diploma</a></li>
                    <li> Participated in a 4-year pre-engineering academy</li>
                </ul>
            </section>
            <section className="Work-Container">
                <h3> Work Experience </h3>
                <img src="gtt icon" height="50px" width="50px"/>
                <h4> GTT </h4>
                <h4> Network Analyst </h4>
                <h4> Nov 2020 - Present</h4>
                <ul>
                    <li> Tasks: </li>
                    <li> Answering phone calls from customers regarding inquiry's about their trouble tickets</li>
                    <li> Monitoring multiple trouble tickets simultaniously</li>
                    <li> Proactively engage with customers to troubleshoot networking issues</li>
                    <li> Troubleshooting basic networking issues as well as investigating issues I've never faced before</li>
                    <li> Working with team members from many different teams across the company to ensure the trouble tickets get updated correctly</li>
                    <li> Special note: I was trained with no prior networking experience and was able to work independently without supervision from the training staff after only 1 month with the company. I'm told that I am very easy to train!</li>
                </ul>
                <img src="cu icon" height="50px" width="50px"/>
                <h4> Office of Information Technology at the University of Colorado Boulder</h4>
                <h4> OIT Student Manager </h4>
                <h4> May 2019 - April 2020</h4>
                <ul>
                    <li> Tasks: </li>
                    <li> Managing the other students schedules and monitoring their tickets to check that procedures are being followed.</li>
                    <li> monitoring, managing, and maintaining lecture capture services for CU</li>
                    <li> updating, imaging, and troubleshooting recorders</li>
                    <li> Customer service regarding tickets </li>
                    <li> Service Now ticketing experience</li>
                    <li> Small coding projects</li>
                </ul>
                <h4> OIT Student Assistant</h4>
                <h4> July 2018 - May 2019 </h4>
                <ul>
                    <li> Tasks: </li>
                    <li> Same tasks as above minus the manegement of the other students. I was selected among my piers to become the next student manager after the current one had graduated. </li>
                </ul>
                <img src="Goodtimes icon" height="50px" width="50px"/>
                <img src="Ross Icon" height="50px" width="50px"/>
                <img src="World Market Icon" height="50px" width="50px"/>
                <h4> Various Retail Jobs </h4>
                <ul>
                    <li> General Staff at:</li>
                    <li> Good Times: June 2015 - Sep 2015 </li>
                    <li> Ross Dress for Less: May 2017 - Sep 2017 </li>
                    <li> World Market: Sept 2017 - May 2018 </li>
                </ul>
            </section>
            <section className ="Skills-Container">
                <h4> Skills: </h4>
                <p> Icon, Skill, Experience </p>
                <p> Dedication, Problem Solving, Collaboration, Critical Thinking, Hard Work, Leadership</p>
            </section>
            <section className ="Extracurricular-Container">
                <h4> Extracurricular Activites </h4>
                <ul>
                    <li> Karate March 2008 - Jan 2012 (Achieved Black Belt)</li>
                    <li> Robotics Oct 2016 - Feb 2017 </li>
                    <li> Award winning marching band and winterline Aug 2013 - Apr 2015 </li>
                    <li> multiple community service projects </li>
                    <li> sold the rights to a board game idea, developed with a team 2019</li>
                </ul>
            </section>
            <section className ="References-Container">
                <h4> References: </h4>
                <ul>
                    <li> Shawn Hunter: Director of Operations-GNOC at GTT, 720-514-2651, shawn.hunter@gtt.net</li>
                    <li> Nicholas Stienkamp: Team Leader of OIT DLS Studios at CU Boulder, 303-735-5634, steinkamp@colorado.edu</li>
                </ul>
            </section>
        </section>
    )
}

export default Resume;