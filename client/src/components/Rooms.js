// Imported React library and hooks.
import React, { useState, useEffect } from "react";
// Requiring Axios.
import axios from "axios";
// Imported components.
import Error from "../components/Error";
import Loader from "../components/Loader";
import RemoveRoom from "../components/RemoveRoom";

/**
 * Set the initial states of the props.
 * Getting the rooms' data via the the useEffect() hook and the Axios GET method from http://localhost:8080/api/rooms/getall.
 * The page's loading is set to true from it's initial state of being false, then once the data is returned or an error occurs to false.
 * If all is in order the list of rooms will be displayed. If an error occurs an error will be displayed.
 * Utilizing the map() method to iterate over the array and to return the data.
 * Utlilized the toFixed() method to return the total with two decimal places.
 */

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await (await axios.get("/api/rooms/getall")).data;
        setRooms(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    })();
  }, []);

  return (
    <div className="col-md-11">
      <h1>Rooms</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <div>
          <table className="table table-bordered table-dark">
            <thead className="bs">
              <tr>
                <th>Room Id:</th>
                <th>Name:</th>
                <th>Type:</th>
                <th>Rent Per day:</th>
                <th>Max Count:</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room) => {
                return (
                  <tr>
                    <td>{room._id}</td>
                    <td>{room.name}</td>
                    <td>{room.type}</td>
                    <td>R {room.rentPerDay.toFixed(2)}</td>
                    <td>{room.maxCount}</td>
                    <td>
                      <RemoveRoom key={room._id} {...room} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

// Exporting Rooms.js to Admin.js.
export default Rooms;
