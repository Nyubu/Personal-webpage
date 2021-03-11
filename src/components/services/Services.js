import React from 'react'
import './Services.css'

function Services() {

    return (
        <section className="my-services" id="services">
            <h2 className="section__title section__title--services">Services</h2>
            <div className="services">
                <div className="service">
                    <h3 className="subsection__title--services" >Backend Development</h3>
                    <p>With proficiency in server-side development and database knowledge, 
                        I design and develop APIs leveraging a GraphQL ecosystem to efficiently deliver data that clients request. </p>
                </div>
                <div className="service">
                    <h3 className="subsection__title--services">Frontend Development</h3>
                    <p>I create responsive front-end applications with an attention to detail and performance.
                        My build process revolves around libraries such as ReactJS to develop creative and interactive user interfaces.</p>
                </div>
                <div className="service">
                    <h3 className="subsection__title--services">Deployment</h3>
                    <p>My deployment strategy makes use of containerization platforms such as Docker, allowing applications to be easily packaged, shipped, 
                        and run as lightweight, portable, and self-sufficient containers.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Services