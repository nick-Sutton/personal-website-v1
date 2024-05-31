import React from "react";
import "../styles/AboutTabs.css"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


const ExperienceTabs = () => {
    return (
        <div>
            <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="home" title="Job1">
                    Tab content for Home
                </Tab>
                <Tab eventKey="profile" title="Job2">
                    Tab content for Profile
                </Tab>
                <Tab eventKey="contact" title="Job3">
                    Tab content for Contact
                </Tab>
            </Tabs>
        </div>
    );
  }

  export default ExperienceTabs;