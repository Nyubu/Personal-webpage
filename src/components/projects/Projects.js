import React from 'react';
import './Projects.css';

import project_img1 from './projects-img/project_img1.jpg';
import project_img2 from './projects-img/project_img2.jpg';
import project_img3 from './projects-img/project_img3.jpg';
import project_img4 from './projects-img/project_img4.jpg';
import project_img5 from './projects-img/project_img5.jpg';
import project_img6 from './projects-img/project_img6.jpg';

function Projects() {

    return (
        <section className="section--projects" id="work">
            <h2 className="section__title--projects">My Work</h2>
            <p className="section__subtitle section__subtitle--projects">A selection of my range of work</p>

            <div className="projects">
                {/* Portfolio item 01 */}
                <div className="project-container">
                    <a href="#" target="blank" className="project">
                        <img src={project_img1} alt="" className="project__img"/>
                        <h3 className="project__title">Elegant Glass Website</h3>                                                                     
                        <p className="project__tools">HTML & CSS</p>   
                    </a>
                </div>
                {/* Portfolio item 02 */}
                <div className="project-container">
                    <a href="#" target="blank" className="project">
                        <img src={project_img2} alt="" className="project__img"/>
                        <h3 className="project__title">Project title</h3>
                        <p className="project__tools">HTML & CSS</p>   
                    </a>
                {/* Portfolio item 03 */}</div>
                <div className="project-container">
                    <a href="https://github.com/Nyubu/flask-blog"  target="blank" className="project">
                        <img src={project_img3} alt="" className="project__img"/>
                        <h3 className="project__title">Blog Site from Scratch</h3>
                        <p className="project__tools">Python, Flask, Sqlite</p>   
                    </a>
                </div>
                {/* Portfolio item 04 */}
                <div className="project-container">
                    <a href="#" target="blank" className="project">
                        <img src={project_img4} alt="" className="project__img"/>
                        <h3 className="project__title">Project title</h3>
                        <p className="project__tools">HTML & CSS</p>   
                    </a>
                </div>
                {/* Portfolio item 05 */}
                <div className="project-container">
                    <a href="#" target="blank" className="project">
                        <img src={project_img5} alt="" className="project__img"/>
                        <h3 className="project__title">Project title</h3>
                        <p className="project__tools">HTML & CSS</p>   
                    </a>
                </div>
                {/* Portfolio item 06 */}
                <div className="project-container">
                    <a href="#" target="blank" className="project">
                        <img src={project_img6} alt="" className="project__img"/>
                        <h3 className="project__title">Project title</h3>
                        <p className="project__tools">HTML & CSS</p>   
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects
