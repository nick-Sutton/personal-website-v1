import React from "react";
import { ReactTyped } from 'react-typed';
import Button from 'react-bootstrap/Button';
import "../styles/About.css";
import meImage from '../assets/me2.jpg';
import FadeIn from "./FadeIn";

class About extends React.Component {
    constructor() {
      super();
      this.state = {
        expanded: true,
        activeKey: "1",
        visible: true,
      };
      this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(eventKey) {
      this.setState({
        activeKey: eventKey,
      });
    }
    render () {
      return(
        <div id="about">
          <FadeIn>
            <div className="section-header">
              <ReactTyped strings={["> about."]} typeSpeed={100} cursorChar="_"/>
            </div>
            <div className="hline"/>
            <div className="about-content">
              <img src={meImage} alt="me" className="about-image" />
              <div className="about-text">
                I am a <b className="r">Computer Science</b> student, interested in <b className="g">Machine learning</b>, 
                        <b className="y"> low-level-systems</b>, and <b className="b">Robotics</b>.
                
                My interest in computers started from a young by watching my brother play Super Mario 64 on an old CRT TV. 
                That facination with pologyons has blesomned into a lifelong love of technology and software.
                
                Education:
                -North Carolina State Unversity: BS, Computer Science
                Technologies:
                -C/C++,Python,Go-Lang,Java,C#,Javascript,OpenCV


                <div className="button-container">
                  <Button className="resume-button">Resume</Button>
                  <Button className="cv-button">CV</Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      )
    }
  }

  export default About;

  //Make the highlighted interests interactive in some way when hovered.