import React from 'react';
import { useSelector } from 'react-redux';

const Contact = () => {
    const data = useSelector(state => state.resume);

    return (
        <section id="four" className="wrapper style1 fade-up">
            <div className="inner">
                <h2>Contact Me</h2>
                <h3>Let's talk</h3>
                <p>Check out my LinkedIn profile and feel free to drop me a message and I would be happy to respond.</p>
                <div className="split style1">
                    <section>
                        <form method="POST" action="https://formsubmit.co/ananth.usha05@gmail.com">
                            <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
                            <input type="hidden" name="_captcha" value="false" />

                            <div className="fields">
                                <div className="field half">
                                    <label htmlFor="name">Your name:</label>
                                    <input type="text" name="name" id="name" placeholder="Enter your name" required />
                                </div>
                                <div className="field half">
                                    <label htmlFor="email">Your email address:</label>
                                    <input type="email" name="email" id="email" placeholder="Enter your email address" required />
                                </div>
                                <div className="field">
                                    <label htmlFor="message">Write your message here:</label>
                                    <textarea name="message" id="message" rows="5" placeholder="Enter your message" required></textarea>
                                </div>
                            </div>
                            <ul className="actions">
                                <li><button type="submit" className="button submit">Submit</button></li>
                            </ul>
                        </form>
                    </section>
                    <section>
                        <ul>
                            <li>
                                <h3>Email</h3>
                                <a href={`mailto:${data.header.email}`}>{data.header.email}</a>
                            </li>
                            <li>
                                <h3>Location</h3>
                                <span>Ontario, Canada</span>
                            </li>
                            <li>
                                <h3>Social</h3>
                                <ul className="icons">
                                    {data.header.social.linkedin && (
                                        <li><a href={data.header.social.linkedin} className="icon brands fa-linkedin"><span className="label">LinkedIn</span></a></li>
                                    )}
                                    {data.header.social.github && (
                                        <li><a href={data.header.social.github} className="icon brands fa-github"><span className="label">GitHub</span></a></li>
                                    )}
                                </ul>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Contact;
