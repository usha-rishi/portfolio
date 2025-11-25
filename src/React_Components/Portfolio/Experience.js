import React from 'react';
import { useSelector } from 'react-redux';

const Experience = () => {
    const data = useSelector(state => state.resume);

    return (
        <section id="two" className="wrapper style3 fade-up">
            <div className="inner">
                <h2>Experience</h2>
                <div className="timeline-container">
                    <div className="timeline">
                        {data.experience.map((exp, index) => (
                            <div key={index} className="timeline-item">
                                <div className="timeline-content">
                                    <h3>{exp.title}</h3>
                                    <h4>{exp.company}</h4>
                                    <span className="date">{exp.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
