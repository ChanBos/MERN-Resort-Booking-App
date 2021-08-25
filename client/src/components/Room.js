// Imported React library.
import React, { useState } from "react";
// Imported components from React Bootstrap.
import { Row, Col, Button, Modal, Carousel, Image } from "react-bootstrap";
// Importing AOS Animate on Scroll Library and the scripts and styles.
import AOS from "aos";
import "aos/dist/aos.css";
// Imported link from React Router Dom.
import { Link } from "react-router-dom";

// Initializing the AOS functionality and setting the duration of the animation.
AOS.init({
  duration: 1000,
});

/**
 * Set the initial state of the modal to not show.
 * Set the handlers to show the modal once the handleShow() function is called (boolean = true) and to not show
 * once the onHide() function is called (boolean = false).
 * Added the AOS animation to the parent row of this component.
 * Props: name, maxCount, type, description.
 * Iterating over the data via map() to return the images as a carousel.
 * Only showing the "Book Now" button if the to- and fromDate has been selected.
 * @returns The data results with buttons that allows a user to view additional information via a modal with images that are displayed in
 * carousels.
 */

const Room = ({ room, fromDate, toDate }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Row className="bs" data-aos="fade-up">
      <Col className="col-md-5">
        <Image src={room.imageUrls[0]} alt="Room" className="smallimg" fluid />
      </Col>

      <Col className="col-md-5 shortdes">
        <h4 className="roomheading">{room.name}</h4>
        <b>
          <p>Accommodates: {room.maxCount} Guests</p>
          <p>Type: {room.type}</p>
        </b>

        <div id="bookbutton">
          {fromDate && toDate && (
            <Link to={`/booking/${room._id}/${fromDate}/${toDate}`}>
              <Button className="appbutton" variant="success">
                Book Now
              </Button>
            </Link>
          )}
          <Button onClick={handleShow} className="appbutton" variant="success">
            View Details
          </Button>
        </div>
      </Col>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="xl"
      >
        <Modal.Header closeButton>
          <h5>{room.name}</h5>
        </Modal.Header>
        <Modal.Body id="roomdetails">
          <Carousel variant="dark">
            {room.imageUrls.map((url, i) => {
              return (
                <Carousel.Item key={i}>
                  <img className="d-block w-100 bigimg" src={url} alt="Room" />
                </Carousel.Item>
              );
            })}
          </Carousel>
          <Col>
            <p className="roomdescription">
              <b>Type:</b> {room.type}
            </p>
            <p className="roomdescription">
              <b>Accommodates:</b> {room.maxCount} Guests
            </p>
            <p className="roomdescription">
              <b>Rent Per Day:</b> R {room.rentPerDay.toFixed(2)}
            </p>
            <p>{room.description}</p>
          </Col>
        </Modal.Body>
      </Modal>
    </Row>
  );
};

// Exporting Room.js to Home.js.
export default Room;
