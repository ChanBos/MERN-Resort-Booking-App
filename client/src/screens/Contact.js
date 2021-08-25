// Imported React library and hooks.
import React from "react";
// Imported components from React Bootstrap.
import { Row, Col, Button, Image, Form } from "react-bootstrap";
// Importing Font Awesome library.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

/**
 * Created a contact page to display the resort's contact details, an image and a operational control form submission.
 * Added links to social media accounts and to the location's map.
 * Set a row with three columns to display the sections.
 */

const Contact = () => {
  return (
    <div id="contactcontainer">
      <Row id="contactrow">
        <Col className="col-md-3">
          <h3 id="contactheader">Contact Us</h3>
          <h6>Contact Number:</h6>
          <p>+258 84 452 5456</p>
          <h6>Email Address:</h6>
          <p>casadeboho@gmail.com</p>
          <h6>Address:</h6>
          <p>
            South Tofinho Road, <br /> Praia do Tofo, <br /> 0000, <br />
            Mozambique
          </p>
          <h6>Go to Google Maps: </h6>
          <a
            href="https://www.google.com/maps/place/Beach+and+Ocean+Villas+Tofinho,+Praia+do+Tofo/@-23.8650154,35.5418718,14.75z/data=!4m18!1m9!3m8!1s0x0:0x9d4567868d430891!2sMozamBeat+Hotel!5m2!4m1!1i2!8m2!3d-23.8650318!4d35.5435764!3m7!1s0x1f21dd761ad95cdb:0x69b754ca56ad1c0c!5m2!4m1!1i2!8m2!3d-23.8622337!4d35.5500632"
            target="_blank"
            rel="noreferrer"
            id="contactmaplink"
          >
            <FontAwesomeIcon icon={faMapMarkedAlt} />
          </a>
          <h6 id="connectheader">Connect With Us:</h6>
          <Row>
            <Col className="col-md-2">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookSquare} />
              </a>
            </Col>
            <Col className="col-md-2">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagramSquare} />
              </a>
            </Col>
            <Col className="col-md-2">
              <a
                href="https://twitter.com/?lang=en"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTwitterSquare} />
              </a>
            </Col>
          </Row>
        </Col>
        <Col className="col-md-4">
          <Image
            src="https://i.ibb.co/JxrX08G/cauayan-island-resort-E-Fnoc-WHIlg-unsplash.jpg"
            alt="Cabin"
            fluid
            id="aboutimage"
          />
        </Col>
        <Col Col className="col-md-3">
          <Form
            action="mailto:casadeboho@gmail.com"
            method="post"
            type="text/plain"
          >
            <Form.Group className="form-group required">
              <Form.Label name="Name" className="control-label">
                Name and Surname{" "}
              </Form.Label>
              <Form.Control
                type="text"
                name="Name"
                required
                className="contactinput"
              />
            </Form.Group>
            <Form.Group className="form-group required">
              <Form.Label name="Email" className="control-label">
                Email Address{" "}
              </Form.Label>
              <Form.Control
                type="text"
                name="Email"
                required
                className="contactinput"
              />
            </Form.Group>
            <Form.Group className="form-group required">
              <Form.Label name="Contact" className="control-label">
                Contact Number{" "}
              </Form.Label>
              <Form.Control
                type="text"
                name="Contact"
                required
                className="contactinput"
              />
            </Form.Group>
            <Form.Group className="form-group required">
              <Form.Label name="Message" className="control-label">
                Message{" "}
              </Form.Label>
              <br />
              <textarea
                type="text"
                name="Message"
                id="contactmessage"
              ></textarea>
              <br />
              <div>
                <Button
                  type="submit"
                  value="submit"
                  className="appbutton"
                  variant="success"
                >
                  SUBMIT
                </Button>
              </div>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

// Exporting Contact.js to App.js.
export default Contact;
