import React from 'react'
import './Introduction.css'
// import profile_picture from './dev-sam-intro.jpg';
import profile_picture from './dev-sam-intro.jpg';

function Introduction() {

    return (
        <section className="intro" id="home">
            <h1 className="section__title section__title--intro">
                Hi, I am <strong>Sam Huynh</strong>            
            </h1>
            <p className="section__subtitle section__subtitle--intro">Full-stack Dev</p>
            <img src={profile_picture} alt="Sam Huynh" className="intro__img"/>
        </section>
    )
}

export default Introduction;