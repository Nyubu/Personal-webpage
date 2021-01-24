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
            
            <div className="tools-wrapper">
                <h2 className="section__subtitle section__subtitle--tools">Languages</h2>   
                <div className="tools tools-languages">
                    <img className="tool__img" src={java_logo} alt="java logo" />
                    <img className="tool__img" src={python_logo} alt="python logo" />
                    <img className="tool__img" src={python_logo} alt="python logo" />
                    <img className="tool__img" src={python_logo} alt="python logo" />
                </div>
            </div>
            <div className="tools-wrapper">
                <h2 className="section__subtitle section__subtitle--tools">Databases</h2> 
                <div className="tools tools-databases">
                    <img className="tool__img" src={mongoDB_logo} alt="mongodb logo" />
                    <img className="tool__img" src={postgres_logo} alt="postgres logo" />
                </div>
            </div>
            <div className="tools-wrapper">
                <h2 className="section__subtitle section__subtitle--tools">Frameworks</h2> 
                <div className="tools tools-frameworks">                    
                    <img className="tool__img" src={reactjs_logo} alt="reactjs logo" />
                    <img className="tool__img" src={flask_logo} alt="flask logo" />
                </div>            
            </div>
            <div className="tools-wrapper">
                <h2 className="section__subtitle section__subtitle--tools">Frameworks</h2> 
                <div className="tools tools-programs">                    
                    <img className="tool__img" src={postman_logo} alt="postman logo" />
                </div>
            </div>
        </section>
    )
}

export default Tools;