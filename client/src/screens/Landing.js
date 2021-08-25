// Imported React library and hooks.
import React from "react";
// Imported components from React Bootstrap.
import { Image, Row, Col, Button } from "react-bootstrap";
// Importing AOS Animate on Scroll Library and the scripts and styles.
import AOS from "aos";
import "aos/dist/aos.css";
// Imported Link from Readt-router-dom.
import { Link } from "react-router-dom";

// Initializing the AOS functionality and setting the duration of the animation.
AOS.init({
  duration: 2000,
});

/**
 * Created a landing page for the application.
 * Added animations on the <h1> element (zoom-in) and the <h3> element (zoom-out).
 * Utilized React-router-dom's Link to create a button link to the home page.
 * @returns A page with two animated headers and a button that redirects the user to the home page.
 */

const Landing = () => {
  return (
    <Row id="landing">
      <Col className="col-md-12 landingcol">
        <Image
          src="https://i.ibb.co/FKySvT2/cauayan-island-resort-imap-1lq-T4o-unsplash2.png"
          alt="Casa de BoHo"
          fluid
          id="landingimage"
        />
        <div id="landingcontent">
          <h1 id="brandname" data-aos="zoom-in">
            Casa de Boho
          </h1>
          <h3 id="slogan">
            "Relaxation is the stepping stone to Tranquility."
          </h3>
          <Link to="/home">
            <Button id="landingbutton">Get Started</Button>
          </Link>
        </div>
      </Col>
    </Row>
  );
};

// Exporting Landing.js to App.js.
export default Landing;
