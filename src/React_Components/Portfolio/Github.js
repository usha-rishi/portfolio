import React from 'react';
import { useSelector } from 'react-redux';

const Github = () => {
    const data = useSelector(state => state.resume);
    const githubUrl = data.header.social && data.header.social.github ? data.header.social.github : 'https://github.com/';

    return (
        <section id="github" className="wrapper style2-alt fade-up">
            <div className="inner">
                <h2>GitHub</h2>
                <p>Check out my code repositories and contributions on GitHub. Portfolio project reflects my skill in React/Redux and JavaScript usage </p>
                <ul className="actions">
                    <li>
                        <a href={githubUrl} className="button primary icon brands fa-github" target="_blank" rel="noopener noreferrer">
                            View GitHub Profile
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Github;
