import React from 'react';
import './Notes.css'

function Notes() {
    
    return (
        <section className="my-notes" id="notes">
            <h2 className="section__title section__title--notes">My Notes</h2>
            <p className="section__subtitle--notes">
                The following are notes I've taken over my early college years. Unfortunately, I've largely favored pen-and-paper
                notes as most of my curriculum was arguably more mathematics than it was computer science. Feel free to take a look. 
                I leave this here as an opportunity to pick my brain a little. 
            </p>
            <div className="notes">
                <div className="note-item">
                    <h3>Design & Development</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat.</p>
                </div>

                <div className="note-item">
                    <h3>Data Science</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat.</p>
                </div>

                <div className="note-item">
                    <h3>Database Administration</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat.</p>
                </div>
            </div> {/* services -*/}

            
        </section>
    )
}


export default Notes;