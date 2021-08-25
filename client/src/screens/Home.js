// Imported React library and hooks.
import React, { useState, useEffect } from "react";
// Requiring Axios.
import axios from "axios";
// Imported components from React Bootstrap.
import { Container, Row, Col, FormControl } from "react-bootstrap";
// Importing the date picker from Ant Design and their CSS.
import { DatePicker } from "antd";
import "antd/dist/antd.css";
// Importing Moment to manage dates.
import moment from "moment";
// Imported components.
import Room from "../components/Room";
import Loader from "../components/Loader";

/**
 * Set the initial states of the properties.
 * Utilized the useEffect() hook to get/ read the information from the database and respond displaying the data. If an error occurs the error
 * will be displayed.
 * Set loading to true before the data is returned and false after. Also set loading to false if there is an error.
 * Utlized the Ant Design library to add a from/ to date picker. Utilizing position 0 of the array to list the from date and position 1 for the
 * to date. Utilizing Moment to adjust the format of the dates. The dates will be updated via the onChange() function.
 * Iterating over the data via map() to return the data that is imported from the Room component.
 * @returns A container with data displayed in rows and columns with a loading feature.
 */

const Home = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [duplicateHotels, setDuplicateHotels] = useState();
  const [searchKey, setSearchKey] = useState("");
  const [type, setType] = useState("all");
  const { RangePicker } = DatePicker;

  const filterByDate = (dates) => {
    setFromDate(moment(dates[0]).format("DD-MM-YYYY"));
    setToDate(moment(dates[1]).format("DD-MM-YYYY"));

    // Checking whether the selected dates are in between or equal to the booked from- or toDate. If it is, the room will be removed from that
    // specified date range's available options.
    let temp = [];
    for (let room of duplicateHotels) {
      let availability = false;
      for (let booking of room.currentBookings) {
        if (room.currentBookings.length) {
          if (
            !moment(moment(dates[0]).format("DD-MM-YYYY")).isBetween(
              booking.fromDate,
              booking.toDate
            ) &&
            !moment(moment(dates[1]).format("DD-MM-YYYY")).isBetween(
              booking.fromDate,
              booking.toDate
            )
          )
            if (
              moment(dates[0]).format("DD-MM-YYYY") !== booking.fromDate &&
              moment(dates[0]).format("DD-MM-YYYY") !== booking.toDate &&
              moment(dates[1]).format("DD-MM-YYYY") !== booking.fromDate &&
              moment(dates[1]).format("DD-MM-YYYY") !== booking.toDate
            ) {
              availability = true;
            }
        }
      }
      if (availability || room.currentBookings.length === 0) {
        temp.push(room);
      }
      setHotels(temp);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const rooms = (await axios.get("/api/rooms/getall")).data;
        setHotels(rooms);
        setDuplicateHotels(rooms);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    })();
  }, []);

  const filterBySearch = () => {
    const dupDate = duplicateHotels.filter((room) =>
      room.name.toLowerCase().includes(searchKey)
    );
    setHotels(dupDate);
  };

  const filterByType = (e) => {
    setType(e);
    if (e !== "all") {
      const dupDate = duplicateHotels.filter((room) =>
        room.type.toLowerCase().includes(e.toLowerCase())
      );
      setHotels(dupDate);
    } else {
      setHotels(duplicateHotels);
    }
  };

  return (
    <Container className="App">
      <Row className="mt-5 bs" id="filtercontainer">
        <Col className="col.md.3">
          <RangePicker
            format="DD-MM-YYYY"
            onChange={filterByDate}
            className="filterinputs datepicker"
          />
        </Col>

        <Col className="col.md.5">
          <FormControl
            type="text"
            placeholder="Search Rooms..."
            className="filterinputs"
            value={searchKey}
            onChange={(e) => {
              setSearchKey(e.target.value);
            }}
            onKeyUp={filterBySearch}
          />
        </Col>

        <Col className="col.md.3 typefilter">
          <select
            id="dropdown-basic-button"
            className="filtersection"
            title="Filter Options By..."
            value={type}
            onChange={(e) => {
              filterByType(e.target.value);
            }}
          >
            <option value="all">All</option>
            <option value="delux">Delux</option>
            <option value="non-delux">Non-Delux</option>
          </select>
        </Col>
      </Row>

      <Row className="justify-content-center mt-5 mb-5">
        {loading ? (
          <Loader />
        ) : (
          hotels.map((room, i) => {
            return (
              <Col className="col-md-9 mt-2" key={i}>
                <Room room={room} fromDate={fromDate} toDate={toDate} />
              </Col>
            );
          })
        )}
      </Row>
    </Container>
  );
};

// Exporting Home.js to index.js.
export default Home;
