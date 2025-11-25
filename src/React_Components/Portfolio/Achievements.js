import React from 'react';
import { useSelector } from 'react-redux';

const Achievements = () => {
    const data = useSelector(state => state.resume);

    return (
        <section id="achievements" className="wrapper style3-alt fade-up">
            <div className="inner">
                <h2>Achievements</h2>
                <div className="features">
                    <section style={{ width: '100%', border: 'none', padding: '0' }}>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {data.achievements.map((achievement, index) => (
                                <li key={index} style={{
                                    marginBottom: '1.5em',
                                    paddingLeft: '2em',
                                    position: 'relative',
                                    fontSize: '1.1em',
                                    lineHeight: '1.6'
                                }}>
                                    <span style={{
                                        position: 'absolute',
                                        left: 0,
                                        top: '0.2em',
                                        color: '#4ae7ff'
                                    }}>
                                        <i className="fas fa-trophy"></i>
                                    </span>
                                    {achievement}
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
