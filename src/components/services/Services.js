import React from 'react'
import './Services.css'

function Services() {

    return (
        <section className="my-services" id="services">
            <h2 className="section__title section__title--services">Services</h2>
            <div className="services">
                <div className="service">
                    <h3>Design & Development</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat.</p>
                </div> {/* service */}

                <div className="service">
                    <h3>Data Science</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat.</p>
                </div> {/* service */}

                <div className="service">
                    <h3>Database Administration</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat.</p>
                </div> {/* service */}
            </div> {/* services -*/}
        </section>
    )
}

export default Services