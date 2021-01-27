import React from 'react';
import { useState } from 'react';
import Project from './Project.js';

function Portfolio()
{
    return(
        <section className = "Portfolio-container">
            <header>
                <h4> Software Development Projects</h4>
            </header>
            <Project title="hey" website="_blank" image="title.jpg" projectText="words"/>
        </section>
    )
}

export default Portfolio;