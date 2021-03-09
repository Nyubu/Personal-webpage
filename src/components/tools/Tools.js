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
import chakraui_logo from './tools-img/chakra-logo.png'
import ec2_logo from './tools-img/ec2-logo.png'
import s3_logo from './tools-img/s3-logo.png'

function Tools() {

    return (
        <section className="my-tools" id="my-tools">
            <h2 className="section__title section__title--tools">Tools I Use</h2>                                
            
            <div className="tools-wrapper">
                <div className="tools tools-languages">
                    <div className="section__subtitle-box">
                        <h2 className="section__subtitle section__subtitle--tools">Languages</h2>   
                    </div>
                    <div className="tools-row">
                        <ToolWrapper tooltip="This is a tooltip" title="Java" logo={java_logo}/>
                        <ToolWrapper tooltip="This is a tooltip" title="Python" logo={python_logo}/>
                        <ToolWrapper tooltip="This is a tooltip" title="Javascript" logo={javascript_logo}/>
                        <ToolWrapper tooltip="This is a tooltip" title="Typescript" logo={typescript_logo}/>
                        <ToolWrapper tooltip="This is a tooltip" title="HTML/CSS" logo={htmlcss_logo}/>
                        <ToolWrapper tooltip="This is a tooltip" title="SQL" logo={sql_logo}/>
                        <ToolWrapper tooltip="This is a tooltip" title="GraphQL" logo={graphql_logo}/>
                    </div>
                </div>
                
                <hr className="rounded"></hr>
                <div className="tools tools-frameworks">                    
                    <div className="section__subtitle-box">
                        <h2 className="section__subtitle section__subtitle--tools">Frameworks</h2> 
                    </div>
                    <div className="tools-row">
                        <ToolWrapper tooltip="This is a tooltip" title="ReactJS" logo={react_logo}/>
                        <ToolWrapper tooltip="This is a tooltip" title="Flask" logo={flask_logo}/>
                        <ToolWrapper tooltip="This is a tooltip" title="Next.js" logo={nextjs_logo}/>
                        <ToolWrapper tooltip="This is a tooltip" title="Express.js" logo={nodejs_logo}/>
                    </div>
                </div>            
                <hr className="rounded"></hr>
                <div className="tools tools-programs">                    
                    <div className="section__subtitle-box">
                        <h2 className="section__subtitle section__subtitle--tools">Libraries</h2> 
                    </div>
                    <div className="tools-row">
                        <ToolWrapper tooltip="This is a tooltip" title="Redis" logo={redis_logo}/>
                        <ToolWrapper tooltip="This is a tooltip" title="Typeorm" logo={typeorm_logo}/>
                        <ToolWrapper tooltip="This is a tooltip" title="URQL" logo={urql_logo}/>
                        <ToolWrapper tooltip="This is a tooltip" title="Chakra-UI" logo={chakraui_logo}/>
                        <ToolWrapper tooltip="This is a tooltip" title="TypeGraphQL" logo={typegraphql_logo}/>
                    </div>
                </div>
                <hr className="rounded"></hr>
                <div className="tools tools-databases">
                    <div className="section__subtitle-box">
                        <h2 className="section__subtitle section__subtitle--tools">Databases</h2> 
                    </div>
                    <div className="tools-row">
                        <ToolWrapper tooltip="This is a tooltip" title="MongoDB" logo={mongoDB_logo}/>
                        <ToolWrapper tooltip="This is a tooltip" title="Postgres" logo={postgres_logo}/>
                    </div>
                </div>
                <hr className="rounded"></hr>
                <div className="tools tools-utility">                    
                    <div className="section__subtitle-box">
                        <h2 className="section__subtitle section__subtitle--tools">Utility</h2> 
                    </div>
                    <div className="tools-row">
                        <ToolWrapper tooltip="This is a tooltip" title="AWS EC2" logo={ec2_logo}/>
                        <ToolWrapper tooltip="This is a tooltip" title="S3/Cloudfront" logo={s3_logo}/>
                        <ToolWrapper tooltip="This is a tooltip" title="VS Code" logo={vscode_logo}/>
                        <ToolWrapper tooltip="This is a tooltip" title="NetBeans" logo={netbeans_logo}/>
                        <ToolWrapper tooltip="This is a tooltip" title="Jira" logo={jira_logo}/>
                        <ToolWrapper tooltip="This is a tooltip" title="Jenkins" logo={jenkins_logo}/>
                        <ToolWrapper tooltip="This is a tooltip" title="Docker" logo={docker_logo}/>
                        <ToolWrapper tooltip="This is a tooltip" title="Postman" logo={postman_logo}/>
                        <ToolWrapper tooltip="This is a tooltip" title="Git" logo={git_logo}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tools;