// React Imports
import React, { Component } from 'react';

// CSS Import
import '../assets/css/main.css';

// Component Imports
import Summary from './Portfolio/Summary';
import Skills from './Portfolio/Skills';
import Experience from './Portfolio/Experience';
import Education from './Portfolio/Education';
import Contact from './Portfolio/Contact';
import Certifications from './Portfolio/Certifications';
import Achievements from './Portfolio/Achievements';
import Github from './Portfolio/Github';

class App extends Component {
  componentDidMount() {
    // Remove is-preload class to reveal content
    const body = document.querySelector('body');
    if (body) {
      setTimeout(() => {
        body.classList.remove('is-preload');
      }, 100);
    }

    // Initialize scrolly if jQuery is available
    if (window.jQuery && window.jQuery.fn.scrolly) {
      window.jQuery('.scrolly').scrolly();
    }
  }

  render() {
    return (
      <div className="App">
        {/* Sidebar */}
        <section id="sidebar">
          <div className="inner">
            <nav>
              <ul>
                <li><a href="#intro">About Me</a></li>
                <li><a href="#one">Skills</a></li>
                <li><a href="#two">Experience</a></li>
                <li><a href="#three">Education</a></li>
                <li><a href="#achievements">Achievements</a></li>
                <li><a href="#five">Certifications</a></li>
                <li><a href="#github">GitHub</a></li>
                <li><a href="#four">Contact</a></li>
              </ul>
            </nav>
          </div>
        </section>

        {/* Wrapper */}
        <div id="wrapper">
          <Summary />
          <Skills />
          <Experience />
          <Education />
          <Achievements />
          <Certifications />
          <Github />
          <Contact />
        </div>

        {/* Footer */}
        <footer id="footer" className="wrapper style1-alt">
          <div className="inner">
            <ul className="menu">
              <li>&copy; Untitled. All rights reserved.</li><li>Images: <a href="http://unsplash.com">Unsplash</a></li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;