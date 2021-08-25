// Imported React library and hooks.
import React, { useState, useEffect } from "react";
// Requiring Axios.
import axios from "axios";
// Imported components from React Bootstrap.
import { Col } from "react-bootstrap";
// Imported components.
import Error from "../components/Error";
import Loader from "../components/Loader";

/**
 * Set the initial states of the props.
 * Getting the bookings' data via the the useEffect() hook and the Axios GET method from http://localhost:8080/api/bookings/getallbookings.
 * The page's loading is set to true from it's initial state of being false, then once the data is returned or an error occurs to false.
 * If all is in order the list of bookings will be displayed. If an error occurs an error will be displayed.
 * Utilizing the map() method to iterate over the array and to return the data.
 */

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await (
          await axios.get("/api/bookings/getallbookings")
        ).data;
        setBookings(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    })();
  }, []);

  return (
    <Col className="col-md-11">
      <h1>Bookings</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <div>
          <table className="table table-bordered table-dark">
            <thead className="bs">
              <tr>
                <th>Booking Id:</th>
                <th>Userid:</th>
                <th>Room:</th>
                <th>From:</th>
                <th>To:</th>
                <th>Status:</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => {
                return (
                  <tr key={booking._id}>
                    <td>{booking._id}</td>
                    <td>{booking.userId}</td>
                    <td>{booking.room}</td>
                    <td>{booking.fromDate}</td>
                    <td>{booking.toDate}</td>
                    <td>{booking.status}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </Col>
  );
};

// Exporting Bookings.js to Admin.js.
export default Bookings;
