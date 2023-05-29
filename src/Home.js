// Home.js

import React from 'react';
import './Home.css';

const Home = () => {
    const handleSquareClick = (aspect) => {
        const element = document.getElementById(aspect);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={"homediv"}>
            <h1>Welcome to My Self-Improvement Journey!</h1>
            <p>
                This website is all about my self-improvement journey. It covers the aspects I have been working on throughout the last 3 months.
            </p>
            <div className="square-row">
                <div onClick={() => handleSquareClick('screenTime')} className="square">
                    <div className="square-content">
                        <h2 className="square-title">Reducing Screen Time</h2>
                        <p className="square-description">How I reduced my screen time and became happier and more productive.</p>
                    </div>
                </div>
                <div onClick={() => handleSquareClick('routine')} className="square">
                    <div className="square-content">
                        <h2 className="square-title">Organizing my life</h2>
                        <p className="square-description">Discover the benefits of having a daily routine as well as a clean and organized living space.</p>
                    </div>
                </div>
                <div onClick={() => handleSquareClick('healthyDiet')} className="square">
                    <div className="square-content">
                        <h2 className="square-title">Diet & Sport</h2>
                        <p className="square-description">Explore the importance of sport and a nutritious diet for overall well-being.</p>
                    </div>
                </div>
                <div onClick={() => handleSquareClick('cleanliness')} className="square">
                    <div className="square-content">
                        <h2 className="square-title">Job Hunting & Website Skills</h2>
                        <p className="square-description">Get valuable tips for job hunting and interview preparation.</p>
                    </div>
                </div>
                <div onClick={() => handleSquareClick('findingJob')} className="square">
                    <div className="square-content">
                        <h2 className="square-title">Learning Dutch</h2>
                        <p className="square-description">Discover how to learn Dutch quickly and efficiently.</p>
                    </div>
                </div>
            </div>
            <p>The spring of 2023 has been less eventful than I had anticipated. The year began in a bad way, with an incredible dissapointment in college. I was ready
                to leave it all behind and start the minor semester in the Fontys University of Applied Sciences. Due to the schedule and the nature of this semester I
                knew I would have more free time than usual so I decided to work more hours and raise money for the summer holiday. Unfortunately, as soon as the semester
                started my work contract expired and I could not get a new job. This led me to spending this free time on myself, something I had not done in a very long time.
                I want to use this time to improve myself in as many aspects as possible, in order to be the professional man, student, and employee that I need to be. This website
                serves as a collection of aspects in which I will have improved, along with how my journey went. That way, everyone who finds themselves in my position in
                the future can take a look at the things I did right (or wrong) and get inspired by what I have achieved. The main themes I am going to talk about can be seen
                in the squares below. Simply click on one of them in order to read more about that topic:</p>
            <div id="screenTime">
                <h2>Reducing Screen Time</h2>
                <p>Content about reducing screen time goes here...</p>
            </div>
            <div id="routine">
                <h2>Having a Routine</h2>
                <p>Content about having a routine goes here...</p>
            </div>
            <div id="healthyDiet">
                <h2>Healthy Diet</h2>
                <p>Content about maintaining a healthy diet goes here...</p>
            </div>
            <div id="cleanliness">
                <h2>Cleanliness</h2>
                <p>Content about cleanliness goes here...</p>
            </div>
            <div id="findingJob">
                <h2>Finding a Job</h2>
                <p>Content about finding a job goes here...</p>
            </div>
        </div>
    );
};


export default Home;
