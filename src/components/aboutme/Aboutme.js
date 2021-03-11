import React from 'react'
import './Aboutme.css'
// import aboutme_picture from './dev-sam-aboutme.jpg';
// import aboutme_picture from './profile4.jpg';

function Aboutme() {

    return (
        <section className="about-me" id="about">
            <h2 className="section__title section__title--about">Who I am</h2>
            <p className="section__subtitle section__subtitle--about">Developer based in Dallas, TX</p>

            <div className="about-me__body">
                <p>I am a full-stack developer from Dallas, TX. I studied software engineering and mathematics from the University of Texas
                    at Dallas. I am both driven and self-motivated, and I am constantly experimenting with new technologies and techniques.
                </p>
                <p> 
                    I am very passionate about Web Development, and strive to better myself as a developer, and the development community as a whole.
                    When I'm not programming, I enjoy learning to speak new languages and practicing guitar.</p>
            </div>

            {/* <img className="about-me__img"/> */}
        </section>
    )
}

export default Aboutme