import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import "../styles/Footer.css"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

class Footer extends React.Component {
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
        <div className="footer">
          <div className="foot-content">
            <div className="footer-icon-container">
              <div className="icon">
                <a href="https://www.linkedin.com/in/nicholas-sutton13/" target="_blank">
                  <FontAwesomeIcon icon={faLinkedin}/>
                </a>
              </div>
              <div className="icon">
                <a href="https://github.com/nick-Sutton" target="_blank">
                  <FontAwesomeIcon icon={faGithub}/>
                </a>
              </div>
              <div className="icon">
                <a href="https://x.com/OrangeOats" target="_blank">
                  <FontAwesomeIcon icon={faXTwitter}/>
                </a>
              </div>
              <div className="icon">
                <a href="mailto:nicksutton46@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope}/>
                </a>
              </div>
            </div>
            <div className="foot-text">Created by Nicholas Sutton. ©</div>
          </div>
        </div>
      )
    }
  }

  export default Footer;