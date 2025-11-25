import React from 'react';
import { useSelector } from 'react-redux';

const Certifications = () => {
    const data = useSelector(state => state.resume);

    return (
        <section id="five" className="wrapper style2 fade-up" style={{ margin: '0 auto 0 auto' }}>
            <div className="inner" style={{ margin: '0 auto 0 auto' }}>
                <h2>Certifications</h2>
                <div className="features">
                    {data.certifications.map((cert, index) => (
                        <section
                            key={index}
                            style={{
                                padding: '2em',
                                textAlign: 'center',
                                animation: `scaleIn 0.6s ease forwards`,
                                animationDelay: `${index * 0.2}s`,
                                opacity: 0
                            }}
                        >
                            <span className="image fit" style={{ maxWidth: '150px', margin: '0 auto 2em auto' }}>
                                <img src={`${process.env.PUBLIC_URL}/images/${cert.image}`} alt={cert.name} style={{ objectFit: 'contain', maxHeight: '150px' }} />
                            </span>
                            <h3>{cert.name}</h3>
                            <p>
                                {cert.issuer} | {cert.date}
                            </p>
                        </section>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;

