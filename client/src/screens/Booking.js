// Imported React library and hooks.
import React, { useState, useEffect } from "react";
// Requiring Axios.
import axios from "axios";
// Importing Moment to manage dates.
import moment from "moment";
// Importing Stripe Checkout.
import StripeCheckout from "react-stripe-checkout";
// Imported components from React Bootstrap.
import { Row, Col, Button } from "react-bootstrap";
// Importing AOS Animate on Scroll Library and the scripts and styles.
import AOS from "aos";
import "aos/dist/aos.css";
// Importing Sweet Alert 2.
import Swal from "sweetalert2";
// Imported components.
import Loader from "../components/Loader";
import Error from "../components/Error";
// Requiring the Stripe key from .env.
require("dotenv").config();

// Initializing the AOS functionality and setting the duration of the animation.
AOS.init({
  duration: 1000,
});
AOS.refresh();

/**
 * Set the initial states of the properties.
 * Utilized the useEffect() hook to get/ read the information from the database and respond displaying the data. If an error occurs the error
 * will be displayed.
 * Set loading to true before the data is returned and false after. Also set loading to false if there is an error.
 * Iterating over the data via map() to return the data that is imported from the Room component.
 * @returns A container with data displayed in rows and columns with a loading feature.
 */

function Booking({ match }) {
  const [room, setRoom] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [totalAmount, setTotalAmount] = useState();

  // Set the params and date formats (via Moment) of the roomId, fromDate and toDate.
  const roomId = match.params.roomId;
  const fromDate = moment(match.params.fromDate, "DD-MM-YYYY");
  const toDate = moment(match.params.toDate, "DD-MM-YYYY");

  // Calculating the amount of days that a guest will be staying at the accommodation by utilizing the moment duration function. It takes into
  // consideration the difference between the toDate and fromDate and calculates the total number of days. Adding one as one only leaves the
  // following day.
  const totalDays = moment.duration(toDate.diff(fromDate)).asDays() + 1;

  useEffect(() => {
    (async () => {
      if (!localStorage.getItem("currentUser")) {
        window.location.href = "/login";
      }

      try {
        setLoading(true);
        const data = (
          await axios.post("/api/rooms/getroombyid", {
            roomId: match.params.roomId,
          })
        ).data;
        setTotalAmount((data.rentPerDay * totalDays).toFixed(2));
        setRoom(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    })();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Created a function to post the booking's details along with the payment token that is generated with Stripe Checkout to
  // /api/bookings/bookroom should the user select to pay for the booking.
  const onToken = async (token) => {
    const bookingDetails = {
      room,
      userId: JSON.parse(localStorage.getItem("currentUser"))._id,
      fromDate,
      toDate,
      totalAmount,
      totalDays,
      token,
    };
    try {
      setLoading(true);
      const result = await axios.post("/api/bookings/bookroom", bookingDetails);
      setLoading(false);
      Swal.fire(
        "Success!",
        "The room has been booked successfully.",
        "success"
      ).then((result) => {
        window.location.href = "/bookings";
      });
    } catch (error) {
      setLoading(false);
      Swal.fire("Error.", error, "error");
    }
  };

  return (
    <Row className="justify-content-center mt-5 mb-5" data-aos="fade-up">
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <div>
          <Row className="col-md-14 mt-2 bs">
            <Col>
              <h4>{room.name}</h4>
              <img src={room.imageUrls[0]} alt="Room" className="bigimg" />
            </Col>
            <Col>
              <div>
                <hr />
                <h6>Booking Details:</h6>
                <hr />
                <b>
                  <p className="bookingdetails">
                    Name: {JSON.parse(localStorage.getItem("currentUser")).name}
                  </p>
                  <p className="bookingdetails">
                    From Date: {match.params.fromDate}
                  </p>
                  <p className="bookingdetails">
                    To Date: {match.params.toDate}
                  </p>
                  <p className="bookingdetails">
                    Accommodates: {room.maxCount} Guests
                  </p>
                </b>
              </div>
              <div>
                <hr />
                <h6>Amount:</h6>
                <hr />
                <b>
                  <p className="bookingdetails">Total Days: {totalDays}</p>
                  <p className="bookingdetails">
                    Rent per Day: R {room.rentPerDay.toFixed(2)}
                  </p>
                  <p className="bookingdetails">
                    Total Amount: R {totalAmount}
                  </p>
                </b>
              </div>
              <div id="paybutton">
                <StripeCheckout
                  amount={totalAmount * 100}
                  currency="ZAR"
                  token={onToken}
                  stripeKey={process.env.REACT_APP_STRIPE_KEY}
                >
                  <Button className="appbutton" variant="success">
                    Pay Now
                  </Button>
                </StripeCheckout>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </Row>
  );
}

// Exporting Bookings.js to App.js.
export default Booking;
