import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";


function Footer() {
  return (
    <footer>

      <div className="footer-content">
        <h1>&copy; James Morris 2020</h1>
        {/* <p>
        <FontAwesomeIcon icon={faPhoneAlt}/>
            07728718314
        </p>
        <p>
        <FontAwesomeIcon icon={faEnvelope}/>
            jm2125@kent.ac.uk
        </p> */}
        <p id="copyright">All product names, logos, and brands are property of their respective owners. All company, product and service names used in this website are for identification purposes only. Use of these names,
          logos, and brands does not imply endorsement</p>
        <p id="liability">This app serves as merely a suggestive user tool and is not intended to replace professional hardware advice. I do not accept liability for any damage to hardware caused through the use of this tool. </p>
      </div>

      <ul>
        <li>
          <a href="#">
            <img src="./img/yt-logo.png" alt=""></img>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/jleomorris">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a target="_blank" href=".\CV_2020.pdf">
            <i className="far fa-file"></i>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/james-morris-62a66b166/">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
      </ul>
      
  </footer>
  )
}

export default Footer;