import React from 'react';
import { useSelector } from 'react-redux';

const Skills = () => {
    const data = useSelector(state => state.resume);

    return (
        <section id="one" className="wrapper style2 fade-up">
            <div className="inner">
                <h2>Skills</h2>
                <div className="features">
                    {data.skills.map((skill, index) => (
                        <section key={index}>
                            <span className={`icon solid major ${skill.icon}`}></span>
                            <h3>{skill.category}</h3>
                            <p>{skill.items.join(', ')}</p>
                        </section>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
