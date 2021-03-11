import React from 'react';
import './Projects.css';

import project_img1 from './projects-img/ecommerce.PNG';
import project_img2 from './projects-img/glass.PNG';
import project_img3 from './projects-img/flaskblog.png';
import project_img4 from './projects-img/sermohub2.png';
import project_img5 from './projects-img/personal.PNG';
import project_img6 from './projects-img/dashboard.png';
import project_img7 from './projects-img/todo.PNG';

function Projects() {

    return (
        <section className="section--projects" id="work">
            <h2 className="section__title--projects">My Work</h2>
            <p className="section__subtitle section__subtitle--projects">A selection of my range of work</p>
            <div className="projects">
                
                <div className="project-container">
                    <a href="https://github.com/Nyubu/e-shop" target="blank" className="project">
                        <img src={project_img1} alt="" className="project__img"/>
                        <h3 className="project__title">E-Commerce Website</h3>
                        <p className="project__tools">Full-stack React, Postgres</p>   
                    </a>
                </div>
                <div className="project-container">
                    <a href="https://github.com/Nyubu/flask-blog"  target="blank" className="project">
                        <img src={project_img3} alt="" className="project__img"/>
                        <h3 className="project__title">Blog Site from Scratch</h3>
                        <p className="project__tools">Python, Flask, Sqlite</p>   
                    </a>
                </div>
                <div className="project-container">
                    <a href="https://github.com/Nyubu/sermohub" target="blank" className="project">
                        <img src={project_img4} alt="" className="project__img"/>
                        <h3 className="project__title">"Sermohub" forum</h3>
                        <p className="project__tools">Full-stack React, Postgres</p>   
                    </a>
                </div>
                <div className="project-container">
                    <a href="https://github.com/Nyubu/dashboard" target="blank" className="project">
                        <img src={project_img6} alt="" className="project__img"/>
                        <h3 className="project__title">Financial Dashboard</h3>
                        <p className="project__tools">Full-stack React, MongoDB</p>   
                    </a>
                </div>
                <div className="project-container">
                    <a href="https://github.com/Nyubu/Personal-webpage" target="blank" className="project">
                        <img src={project_img5} alt="" className="project__img"/>
                        <h3 className="project__title">Personal Page</h3>
                        <p className="project__tools">React, Javascript, Express</p>   
                    </a>
                </div>
                <div className="project-container">
                    <a href="https://github.com/Nyubu/glass-web" target="blank" className="project">
                        <img src={project_img2} alt="" className="project__img"/>
                        <h3 className="project__title">Elegant Glass Website</h3>                                                                     
                        <p className="project__tools">HTML & CSS</p>   
                    </a>
                </div>
                <div className="project-container">
                    <a href="https://github.com/Nyubu/todo" target="blank" className="project">
                        <img src={project_img7} alt="" className="project__img"/>
                        <h3 className="project__title">React Todo</h3>
                        <p className="project__tools">React, Javascript</p>   
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects
