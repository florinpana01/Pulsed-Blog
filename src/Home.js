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
                <p>The amount of screen time almost daily has been worying for some time now. I knew for a long time that I needed to make a change but I took very little to no
                    measures over the years. While I was a kid, I was only allowed screen time during weekends and I could not do much with my phone anyway. Things changed in High
                    school when I got more freedom and I started studying ICT for the first time. I slowly started spending more and more time on my phone and on the computer.
                    Especially since leaving my home country I realized how bad the situation had become. This one is an incredibly important objective for me personally, since it
                    is an older problem and I absolutely need to fix this. In the following paragraphs I am going to talk about what I did to reduce my screen time, what worked and
                    what did not, and whether or not I managed to reach a good enough point by the end of this self-improvement journey.</p>
            </div>
            <div id="routine">
                <h2>Organizing my life</h2>
                <p>This is one of the objectives for which I already have a basis. I wanted to become more organized for a long time and sometimes it works, to a degree. The problem
                    is that I treat some issues more seriously than others and this good period does not last very long usually. I wanted to use this time to improve this aspect
                    and remain organized for as long as possible, not just occasionally. One aspect that has always been very organized are my finances. I have an Excel file in which
                    I write what I spend in each day, the category of the expenditure (holiday, food, rent, travel, etc), as well as my income for the respective month. I keep track
                    of every single transaction and have always took very good care of my finances. I wish to replicate the positive aspects of this in other areas of my life. I
                    started writing down my schedule for each day in an agenda. I also started with a morning routine and countinued with a dai;y routine. Everything starts with
                    making your bed in the morning...</p>
            </div>
            <div id="healthyDiet">
                <h2>Healthy Diet</h2>
                <p>Same time last year, I had the personal weight record. I gave up any exercise and adopted a sedentary lifestyle. During the summer I decided I had to change
                    something. The first sport I started practising again was mountain hiking. To my surprise, I went through the hikes with very high energy, which motivated me to
                    go further. Last autumn, when I came back to the Netherlands after the holiday, I went straight to the gym and did only cardio for two months. The weight loss was
                    incredible. After my body fat percentage got very low, the lowest it has been since COVID, I also started working out in order to gain muscle. The muscle mass
                    started to appear after a month and a half and then I had to stop all activity due to some health issues. For the most part, I managed to keep my weight stable,
                    but I had mostly lost my exercise and diet discipline, so I started gaining the wrong kind of weight again. Things are still under controll and significantly
                    better than last spring, and I will get back to the gym in a week.</p>
            </div>
            <div id="cleanliness">
                <h2>Job Hunting & Website Skills</h2>
                <p>I lost my job 2 weeks after the semester started. I knew I would have more free time than usual and I was excited by the prospect of making more money for the summer
                    holiday. However, my work contract expired and my boss never reached out to me about a new agreement. I have spent the next month applying for every junior web
                    developer job I could find, but without success. I realized that my CV was still flawed and needed some changes. Throughout this chapter I am going to talk about how I
                    improved my CV and writing skills for the motivation letter. I am also going to tal about how a LinkedIn profile has to be setup as well as some tips and tricks for
                    getting a new job. After what I said earlier, I might not be the most qqualified person to talk about getting jobs, but I have made a lot of progress and I included
                    this aspect under the self-improvement umbrella. Another good thing to have is a side project, preferably in the programming language in the job description. This shows
                    experience better than most things. This is the reason why this website exists. I wanted to learn the basics of React, since I have seen a lot of job openings for this
                    particular language.</p>
            </div>
            <div id="findingJob">
                <h2>Learning Dutch</h2>
                <p>It is almost 4 years since I started living in the Netherlands, and I still barely know Dutch. This is due partly because of the language difficulty, of course, and the
                    fact that most Dutch people know English anyway, but the main problem is that I did not bother to learn it. The first attempt came weeks before COVID. I signed up for a
                    Dutch course for beginners. After the second session, everything closed and we went into lockdown. The course did not have online sessions and just stopped. Almost a
                    year after that, I had to leave my room because I was only allowed to stay for a maximum of 18 months there. I put all my stuff in a storage facility and left the country,
                    doing the next three semesters remotely, for the large majority. Last autumn I came back and I finally found a place to stay again. I want to use the time i Have this
                    semester to finally learn the basics of this language. During this chapter i am going to talk about what learning means I have used, as well as what and how previous
                    knowledge helped me learn faster.</p>
            </div>
        </div>
    );
};


export default Home;
