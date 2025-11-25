import React from 'react';
import { useSelector } from 'react-redux';

const Education = () => {
    const data = useSelector(state => state.resume);

    return (
        <section id="three" className="wrapper style2 fade-up">
            <div className="inner">
                <h2>Education</h2>
                <div className="features">
                    {data.education.map((edu, index) => (
                        <section key={index}>
                            <span className="icon solid major fa-graduation-cap"></span>
                            <h3>{edu.degree}</h3>
                            <p>
                                {edu.institution}<br />
                                {edu.date}
                            </p>
                        </section>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
