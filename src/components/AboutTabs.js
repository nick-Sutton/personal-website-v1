import React from "react";
import "../styles/AboutTabs.css"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


const AboutTabs = () => {
    return (
        <div>
            <Tabs
                defaultActiveKey="profile"
                id="about-tabs"
                className="mb-3"
            >
                <Tab className="about-tab-button" eventKey="profile" title="Profile">
                    <div className="about-tab-content">
                        <p>
                            Hello, I'm Nick. I am a <b className="r">Computer Science</b> student, interested in <b className="g">Machine learning</b>, 
                            <b className="y"> low-level-systems</b>, and <b className="b">Robotics</b>.
                        </p>
                        <p>
                            My interest in computers started from a young by watching my brother play Super Mario 64 on an old CRT TV. 
                            That facination with pologyons has blesomned into a lifelong love of technology and software.
                        </p>
                    </div>
                </Tab>
                <Tab className="about-tab-button" eventKey="education" title="Education">
                    Tab content for Profile
                </Tab>
                <Tab className="about-tab-button" eventKey="interests" title="Interests">
                    
                    Tab content for Contact
                </Tab>
            </Tabs>
        </div>
    );
  }

  export default AboutTabs;