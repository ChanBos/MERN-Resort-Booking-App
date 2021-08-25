// Imported React library and hooks.
import React from "react";
// Imported components from React Bootstrap.
import { Row, Col, Image } from "react-bootstrap";

/**
 * Created an About page to display an image and a short description of the resort.
 * Added a link to the Activities page that will open in a new tab.
 */

const About = () => {
  return (
    <div id="aboutcontainer">
      <Row>
        <Col className="col-md-5">
          <Image
            src="https://i.ibb.co/G74BGJw/cauayan-island-resort-h5-Oy-Nk-Fb-OQ-unsplash.jpg"
            alt="Resort"
            fluid
            id="aboutimage"
          />
        </Col>
        <Col className="col-md-6">
          <h3 id="aboutheader">About Us</h3>
          <p>
            Situated in Tofo, Mozambique, we boast an attractive selection of
            private, ensuite cabins right on the unspoiled, sunny beaches. We
            cater for couples and business travelers, every suite kitted out for
            pure relaxation, away from the hustle and bustle of everyday life.
          </p>
          <p>
            Our facilities include, but are not limited to, a pool that is made
            for lazing in and around, a restaurant that serves everything from
            delicious croissants and coffee to sundowners and pub-grub and a
            whole lot more that you, as our guest, can enjoy. You will never
            have a dull moment. There is something for everyone.
          </p>
          <p>
            We host a party night every week on a Friday featuring some of the
            best local DJ's that will blow you away.
          </p>
          <p>
            We are within a stone-throw of the market, other restaurants, a
            massage parlour, and much, much more.
            <a href="/activities" target="_blank" id="aboutlink">
              Click here
            </a>
            to view some of the exciting activities around our beautiful resort.
          </p>
          <h5>We cannot wait to spoil you senseless on your next visit!</h5>
        </Col>
      </Row>
    </div>
  );
};

// Exporting About.js to App.js.
export default About;
