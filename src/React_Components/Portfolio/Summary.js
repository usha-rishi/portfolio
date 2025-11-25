import React from 'react';
import { useSelector } from 'react-redux';

const Summary = () => {
    const data = useSelector(state => state.resume);

    const knowledgeAreas = [

        '.NET Integration & Backend Lead',
        'Technical Product Manager',
        'Azure Cloud Solutions Architect',
        'Agile & Scrum Delivery Lead',
        'Senior Business Analyst'

    ];

    return (
        <section id="intro" className="wrapper style1 fullscreen fade-up">
            <div className="inner" style={{ textAlign: 'center' }}>
                <span className="image fit" style={{ maxWidth: '200px', margin: '0 auto 2em auto' }}>
                    <img src={`${process.env.PUBLIC_URL}/images/profile.jpg`} alt="Profile" style={{ borderRadius: '50%', border: '5px solid rgba(255, 255, 255, 0.15)' }} />
                </span>

                <h1>{data.header.name}</h1>

                {/* Sliding Text Animation */}
                <div className="sliding-text-container">
                    <span className="knowledge-prefix">Worked as </span>
                    <span className="sliding-text">
                        {knowledgeAreas.map((area, index) => (
                            <span key={index} className="text-slide" style={{ animationDelay: `${index * 3}s` }}>
                                {area}
                            </span>
                        ))}
                    </span>
                </div>

                {data.summary.map((paragraph, index) => (
                    <p key={index} style={{ textAlign: 'left', fontSize: '1em', marginBottom: '1em' }}>{paragraph}</p>
                ))}
                <ul className="actions">
                    <li><a href="#one" className="button scrolly">Learn more</a></li>
                </ul>
            </div>
        </section >
    );
};

export default Summary;
