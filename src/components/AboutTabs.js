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
                    Tab content for Home
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