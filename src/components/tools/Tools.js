import React from 'react'
import './Tools.css'
import java_logo from './tools-img/java-logo.jpg'
import mongoDB_logo from './tools-img/mongodb-logo.png'
import postgres_logo from './tools-img/postgres-logo.png'
import reactjs_logo from './tools-img/reactjs-logo.jpg'
import flask_logo from './tools-img/flask-logo.png'
import python_logo from './tools-img/python-logo.png'
import postman_logo from './tools-img/postman-logo.png'

function Tools() {

    return (
        <section className="my-tools" id="my-tools">
            <h2 className="section__title section__title--tools">Tools I Use</h2>    
                            
            <h2 className="section__subtitle section__subtitle--tools">Languages</h2>   
            <div className="tools">
                <div className="tool">                    
                    <img className="tool__img" src={java_logo} alt="java logo" />
                    <h3 className="tool-title">Java</h3>
                    <p className="tool-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat.</p>
                </div>
                <div className="tool">
                    <img className="tool__img" src={python_logo} alt="python logo" />
                    <h3 className="tool-title">Python3</h3>
                    <p className="tool-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat.</p>
                </div>
                <div className="tool">
                    <img className="tool__img" src={python_logo} alt="python logo" />
                    <h3 className="tool-title">Python3</h3>
                    <p className="tool-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat.</p>
                </div>
                <div className="tool">
                    <img className="tool__img" src={python_logo} alt="python logo" />
                    <h3 className="tool-title">Python3</h3>
                    <p className="tool-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat.</p>
                </div>
            </div>
            <h2 className="section__subtitle section__subtitle--tools">Databases</h2> 
            <div className="tools">
                <div className="tool">
                    <img className="tool__img" src={mongoDB_logo} alt="mongodb logo" />
                    <h3 className="tool-title">MongoDB</h3>
                    <p className="tool-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat.</p>
                </div>
                <div className="tool">
                    <img className="tool__img" src={postgres_logo} alt="postgres logo" />
                    <h3 className="tool-title">PostgreSQL</h3>
                    <p className="tool-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat.</p>
                </div>                                
            </div>
            <h2 className="section__subtitle section__subtitle--tools">Frameworks</h2> 
            <div className="tools">                    
                <div className="tool">
                    <img className="tool__img" src={reactjs_logo} alt="reactjs logo" />
                    <h3 className="tool-title">ReactJS</h3>
                    <p className="tool-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat.</p>
                </div>
                <div className="tool">
                    <img className="tool__img" src={flask_logo} alt="flask logo" />
                    <h3 className="tool-title">Flask</h3>
                    <p className="tool-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat.</p>
                </div>               
            </div>            
            <h2 className="section__subtitle section__subtitle--tools">Frameworks</h2> 
            <div className="tools">                    
                <div className="tool">
                    <img className="tool__img" src={postman_logo} alt="postman logo" />
                    <h3 className="tool-title">Postman</h3>
                    <p className="tool-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat.</p>
                </div>
            </div>
        </section>
    )
}

export default Tools;