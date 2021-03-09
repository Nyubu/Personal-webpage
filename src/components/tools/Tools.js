import React from 'react'
import './Tools.css'
import { databases, frameworks, languages, libraries, utility } from './ToolsMap'
import ToolWrapper from './ToolWrapper'

function Tools() {    

    return (
        <section className="my-tools" id="my-tools">
            <h2 className="section__title section__title--tools">Tools</h2>                                
            
            <div className="tools-wrapper">
                <div className="tools tools-languages">
                    <div className="section__subtitle-box">
                        <h2 className="section__subtitle section__subtitle--tools">Languages</h2>   
                    </div>
                    <div className="tools-row">
                        {
                            languages.map((lang) => (
                                <ToolWrapper tooltip={lang.tooltip} title={lang.title} logo={lang.logo}/>
                            ))
                        }
                    </div>
                </div>
                
                <hr className="rounded"></hr>
                <div className="tools tools-frameworks">                    
                    <div className="section__subtitle-box">
                        <h2 className="section__subtitle section__subtitle--tools">Frameworks</h2> 
                    </div>
                    <div className="tools-row">
                        {
                            frameworks.map((lang) => (
                                <ToolWrapper tooltip={lang.tooltip} title={lang.title} logo={lang.logo}/>
                            ))
                        }
                    </div>
                </div>            
                <hr className="rounded"></hr>
                <div className="tools tools-programs">                    
                    <div className="section__subtitle-box">
                        <h2 className="section__subtitle section__subtitle--tools">Libraries</h2> 
                    </div>
                    <div className="tools-row">
                        {
                            libraries.map((lang) => (
                                <ToolWrapper tooltip={lang.tooltip} title={lang.title} logo={lang.logo}/>
                            ))
                        }
                    </div>
                </div>
                <hr className="rounded"></hr>
                <div className="tools tools-databases">
                    <div className="section__subtitle-box">
                        <h2 className="section__subtitle section__subtitle--tools">Databases</h2> 
                    </div>
                    <div className="tools-row">

                        {
                            databases.map((lang) => (
                                <ToolWrapper tooltip={lang.tooltip} title={lang.title} logo={lang.logo}/>
                            ))
                        }
                    </div>
                </div>
                <hr className="rounded"></hr>
                <div className="tools tools-utility">                    
                    <div className="section__subtitle-box">
                        <h2 className="section__subtitle section__subtitle--tools">Utility</h2> 
                    </div>
                    <div className="tools-row">
                        {
                            utility.map((lang) => (
                                <ToolWrapper tooltip={lang.tooltip} title={lang.title} logo={lang.logo}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tools;