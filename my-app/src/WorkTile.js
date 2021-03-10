import React from 'react';


function WorkTile(props){
    return(
        <section className ="work-tile">
                <img src={props.src} width="150px" height="150px"/>
                <button className="work-tile-button"> click me for info about this job </button>
                <p className="job-description">{props.desc} test</p>
                <h3> Work Tasks </h3>
                <p className="job-description"> - {props.task1} </p>
                <p className="job-description"> - {props.task2} </p>
                <p className="job-description"> - {props.task3} </p>
                <p className="job-description"> - {props.task4} </p>
        </section>
        );
    
}

export default WorkTile;



