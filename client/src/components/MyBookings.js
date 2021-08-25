// Imported React library and hooks.
import React, { useState, useEffect } from "react";
// Requiring Axios.
import axios from "axios";
// Importing tags from Ant Design.
import { Tag } from "antd";
// Imported components from React Bootstrap.
import { Row, Col, Button } from "react-bootstrap";
// Importing Sweet Alert 2.
import Swal from "sweetalert2";
// Imported components.
import Loader from "../components/Loader";
import Error from "../components/Error";

/**
 * Set the initial states of the props.
 * Getting the users' data via the the useEffect() hook and the Axios POST method from http://localhost:8080/api/bookings/getuserbookings.
 * The page's loading is set to false from it's initial state of being true.
 * If all is in order the list of users will be displayed. If an error occurs an error will be displayed.
 * Utilizing the map() method to iterate over the array and to return the data.
 * The user is able to cancel the booking by changing the status of the booking. This is achieved using the Axios POST method from
 * http://localhost:8080/api/bookings/cancelbooking. If successful the status will be changed successfully. If an error ocuurs this will be displayed
 * to the user. The alerts are shown via Sweet Alert modal functionality.
 * Utilized the Ant Design tags to display the statuses. Red if cancelled and green if booked.
 * Returning the payment amount to two decimal places using the toFixed() method.
 */

const MyBookings = () => {
  const [myBookings, setMyBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await (
          await axios.post("/api/bookings/getuserbookings", {
            userid: JSON.parse(localStorage.getItem("currentUser"))._id,
          })
        ).data;
        setMyBookings(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    })();
  }, []);

  const cancelBooking = async (bookingId, roomId) => {
    try {
      setLoading(true);
      const result = (
        await axios.post("/api/bookings/cancelbooking", { bookingId, roomId })
      ).data;
      setLoading(false);
      Swal.fire("Success!", "The booking has been cancelled.", "success").then(
        (result) => {
          window.location.href = "/profile";
        }
      );
    } catch (error) {
      Swal.fire("Error", "Something went wrong.", "error");
      setLoading(false);
    }
  };

  return (
    <div>
      <Row id="mybookingsrow">
        <Col className="col-md-6">
          {loading ? (
            <Loader />
          ) : error ? (
            <Error />
          ) : (
            myBookings.map((booking) => {
              return (
                <div className="bs">
                  <h5>{booking.room}</h5>
                  <p>
                    <b>Booking ID:</b> {booking._id}
                  </p>
                  <p>
                    <b>Transaction ID:</b> {booking.transactionId}
                  </p>
                  <p>
                    <b>Check-in Date:</b> {booking.fromDate}
                  </p>
                  <p>
                    <b>Check-out Date:</b> {booking.toDate}
                  </p>
                  <p>
                    <b>Payment Amount:</b> R {booking.totalAmount.toFixed(2)}
                  </p>
                  <p>
                    <b>Booking Status:</b>
                    {booking.status === "cancelled" ? (
                      <Tag color="orange">Cancelled</Tag>
                    ) : (
                      <Tag color="green">Confirmed</Tag>
                    )}
                  </p>
                  {booking.status !== "cancelled" && (
                    <Button
                      onClick={() => {
                        cancelBooking(booking._id, booking.roomId);
                      }}
                      className="appbutton"
                      variant="success"
                    >
                      Cancel Booking
                    </Button>
                  )}
                </div>
              );
            })
          )}
        </Col>
      </Row>
    </div>
  );
};

// Exporting MyBookings.js to Profile.js.
export default MyBookings;
