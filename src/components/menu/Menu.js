import React from 'react'
import './Menu.css'

// Components 
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tabs'
import Services from '../services/Services';
import Aboutme from '../aboutme/Aboutme';
import Tools from '../tools/Tools';
import Blog from '../blog/Blog';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';
import Notes from '../notes/Notes';

function Menu() {
    return (
        <div id="tabs" className="menu">
            <Tabs defaultActiveKey="home" 
                id="tabs"	
            >

                <Tab eventKey="home" title="Home">

                <Notes />   

                    {/* My Services */}
                    <Services />
                    
                    {/* My Tools */}
                    <Tools />                    
                                    
                    {/* About Me */}
                    <Aboutme />
        
                </Tab>

                <Tab eventKey="projects" title="Projects">
                    
                    <Projects />   

                </Tab>

                <Tab eventKey="blog" title="Blog">

                    <Blog />   
                    
                </Tab>

                <Tab eventKey="notes" title="Notes">

                    <Notes />
                    
                </Tab>

                <Tab eventKey="contact" title="Contact">

                    <Contact />   
                    
                </Tab>
            </Tabs>
        </div >
    )

    
    
}



export default Menu;