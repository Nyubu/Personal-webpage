import React from 'react'
import './Tools.css'
import ToolWrapper from './ToolWrapper'
import java_logo from './tools-img/java-logo.png'
import htmlcss_logo from './tools-img/htmlcss-logo.png'
import javascript_logo from './tools-img/javascript-logo.png'
import sql_logo from './tools-img/sql-logo.png'
import mongoDB_logo from './tools-img/mongodb-logo.png'
import postgres_logo from './tools-img/postgres-logo.png'
import react_logo from './tools-img/react-logo.png'
import flask_logo from './tools-img/flask-logo.png'
import python_logo from './tools-img/python-logo.png'
import postman_logo from './tools-img/postman-logo.png'
import jira_logo from './tools-img/jira-logo.png'
import jenkins_logo from './tools-img/jenkins-logo.png'
import vscode_logo from './tools-img/vscode-logo.png'
import netbeans_logo from './tools-img/netbeans-logo.png'
import git_logo from './tools-img/git-logo.png'
import graphql_logo from './tools-img/graphql-logo.png'
import docker_logo from './tools-img/docker-logo.png'
import redis_logo from './tools-img/redis-logo.png'
import urql_logo from './tools-img/urql-logo.png'
import typegraphql_logo from './tools-img/typegraphql-logo.png'
import typeorm_logo from './tools-img/typeorm-logo.png'
import typescript_logo from './tools-img/typescript-logo.png'
import nodejs_logo from './tools-img/nodejs-logo.png'
import nextjs_logo from './tools-img/nextjs-logo.png'

function Tools() {

    return (
        <section className="my-tools" id="my-tools">
            <h2 className="section__title section__title--tools">Tools I Use</h2>                                
            
            <div className="tools-wrapper">
                <h2 className="section__subtitle section__subtitle--tools">Languages</h2>   
                <div className="tools tools-languages">
                    <div className="tool" data-tool-tip="Java tool tip">
                        <div className="tool__img-wrapper">
                            <img className="tool__img" src={java_logo} alt="java logo" />
                        </div>
                        <p className="tool__name">Java</p>
                    </div>
                    <div className="tool">
                        <div className="tool__img-wrapper">
                            <img className="tool__img" src={python_logo} alt="python logo" />
                        </div>
                        <p className="tool__name">Python</p>
                    </div>                    
                    <div className="tool">
                        <div className="tool__img-wrapper">
                            <img className="tool__img" src={javascript_logo} alt="javascript logo" />
                        </div>
                        <p className="tool__name">Javascript</p>
                    </div>
                    <div className="tool">
                        <div className="tool__img-wrapper">
                            <img className="tool__img" src={typescript_logo} alt="typescript logo" />
                        </div>
                        <p className="tool__name">Typescript</p>
                    </div>
                    <div className="tool">
                        <div className="tool__img-wrapper">
                            <img className="tool__img" src={htmlcss_logo} alt="html/css logo" />
                        </div>
                        <p className="tool__name">HTML & CSS</p>
                    </div>
                    <div className="tool">
                        <div className="tool__img-wrapper">
                            <img className="tool__img" src={sql_logo} alt="sql logo" />
                        </div>
                        <p className="tool__name">SQL</p>
                    </div>
                    <ToolWrapper tooltip="This is a tooltip" title="GraphQL" logo={graphql_logo}/>
                </div>
                <div className="tools-row">
                    <div className="databases-wrapper">
                        <h2 className="section__subtitle section__subtitle--tools">Databases</h2> 
                        <div className="tools tools-databases">
                            <div className="tool">
                                <div className="tool__img-wrapper">
                                    <img className="tool__img" src={mongoDB_logo} alt="mongodb logo" />
                                </div>                        
                                <p className="tool__name">MongoDB</p>
                            </div>
                            <div className="tool">
                                <div className="tool__img-wrapper">
                                    <img className="tool__img" src={postgres_logo} alt="postgres logo" />
                                </div>
                                <p className="tool__name">Postgres</p>
                            </div>
                        </div>
                    </div>
                    <div className="frameworks-wrapper">
                        <h2 className="section__subtitle section__subtitle--tools">Frameworks</h2> 
                        <div className="tools tools-frameworks">                    
                            <div className="tool">
                                <div className="tool__img-wrapper">
                                    <img className="tool__img" src={react_logo} alt="reactjs logo" />
                                </div>
                                <p className="tool__name">ReactJS</p>
                            </div>
                            <div className="tool">
                                <div className="tool__img-wrapper">
                                    <img className="tool__img" src={flask_logo} alt="flask logo" />
                                </div>
                                <p className="tool__name">Flask</p>
                            </div>
                            <div className="tool">
                                <div className="tool__img-wrapper">
                                    <img className="tool__img" src={nextjs_logo} alt="next.js logo" />
                                </div>
                                <p className="tool__name">Next.js</p>
                            </div>
                            <div className="tool">
                                <div className="tool__img-wrapper">
                                    <img className="tool__img" src={nodejs_logo} alt="nodejs logo" />
                                </div>
                                <p className="tool__name">Express.js</p>
                            </div>
                        </div>            
                    </div>                
                </div>
                <h2 className="section__subtitle section__subtitle--tools">Libraries</h2> 
                <div className="tools tools-programs">                    
                    <div className="tool">
                        <div className="tool__img-wrapper">
                            <img className="tool__img" src={typegraphql_logo} alt="typegraphql logo" />
                        </div>
                        <p className="tool__name">TypeGraphQL</p>
                    </div>
                    <div className="tool">
                        <div className="tool__img-wrapper">
                            <img className="tool__img" src={redis_logo} alt="redis logo" />
                        </div>
                        <p className="tool__name">Redis</p>
                    </div>
                    <div className="tool">
                        <div className="tool__img-wrapper">
                            <img className="tool__img" src={typeorm_logo} alt="typeorm logo" />
                        </div>
                        <p className="tool__name">Typeorm</p>
                    </div>
                    <div className="tool">
                        <div className="tool__img-wrapper">
                            <img className="tool__img" src={urql_logo} alt="urql logo" />
                        </div>
                        <p className="tool__name">URQL</p>
                    </div>
                </div>
                <h2 className="section__subtitle section__subtitle--tools">Utility</h2> 
                <div className="tools tools-programs">                    
                    <div className="tool">
                        <div className="tool__img-wrapper">
                            <img className="tool__img" src={vscode_logo} alt="postman logo" />
                        </div>
                        <p className="tool__name">VS Code</p>
                    </div>
                    <div className="tool">
                        <div className="tool__img-wrapper">
                            <img className="tool__img" src={netbeans_logo} alt="netbeans logo" />
                        </div>
                        <p className="tool__name">NetBeans</p>
                    </div>
                    <div className="tool">
                        <div className="tool__img-wrapper">
                            <img className="tool__img" src={jira_logo} alt="jira logo" />
                        </div>
                        <p className="tool__name">Jira</p>
                    </div>
                    <div className="tool">
                        <div className="tool__img-wrapper">
                            <img className="tool__img" src={jenkins_logo} alt="jenkins logo" />
                        </div>
                        <p className="tool__name">Jenkins</p>
                    </div>
                    <div className="tool">
                        <div className="tool__img-wrapper">
                            <img className="tool__img" src={docker_logo} alt="docker logo" />
                        </div>
                        <p className="tool__name">Docker</p>
                    </div>
                    <div className="tool">
                        <div className="tool__img-wrapper">
                            <img className="tool__img" src={postman_logo} alt="postman logo" />
                        </div>
                        <p className="tool__name">Postman</p>
                    </div>
                    <div className="tool">
                        <div className="tool__img-wrapper">
                            <img className="tool__img" src={git_logo} alt="git logo" />
                        </div>
                        <p className="tool__name">Git</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tools;