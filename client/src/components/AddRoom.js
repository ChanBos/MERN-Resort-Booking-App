// Imported React library and hooks.
import React, { useState } from "react";
// Requiring Axios.
import axios from "axios";
// Imported components from React Bootstrap.
import { Row, Col, Button } from "react-bootstrap";
// Imported Swal from sweetalert2.
import Swal from "sweetalert2";

/**
 * Set the initial states of the props.
 * Admin can add a new room by entering data for the following input sections: room, rentPerDay, maxCount, description, type,
 * image 1, 2, 3.
 * If all is in order the list of users will be displayed. If an error occurs an error will be displayed.
 * Called for the state to be set onChange().
 */

const AddRoom = (res) => {
  const [room, setRoom] = useState("");
  const [rentPerDay, setRentPerDay] = useState();
  const [maxCount, setMaxCount] = useState();
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");

  const addRoom = async () => {
    const roomobj = {
      room,
      rentPerDay,
      maxCount,
      description,
      type,
      image1,
      image2,
      image3,
    };

    try {
      const result = await axios.post("/api/rooms/addroom", roomobj);
      Swal.fire(
        "Success!",
        "The room has been created successfully.",
        "success"
      ).then((result) => {
        window.location.href = "/home";
      });
    } catch (error) {
      Swal.fire("Error", "Something went wrong.", "error");
    }
  };
  return (
    <Row>
      <Col className="col-md-5">
        <input
          type="text"
          className="form-control mt-1"
          placeholder="Name"
          value={room}
          onChange={(e) => {
            setRoom(e.target.value);
          }}
        />

        <input
          type="text"
          className="form-control mt-1"
          placeholder="Rent Per Day"
          value={rentPerDay}
          onChange={(e) => {
            setRentPerDay(e.target.value);
          }}
        />

        <input
          type="text"
          className="form-control mt-1"
          placeholder="Accommodates"
          value={maxCount}
          onChange={(e) => {
            setMaxCount(e.target.value);
          }}
        />

        <input
          type="text"
          className="form-control mt-1"
          placeholder="Description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </Col>

      <Col className="col-md-6">
        <input
          type="text"
          className="form-control mt-1"
          placeholder="Type"
          value={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control mt-1"
          placeholder="Image URL 1"
          value={image1}
          onChange={(e) => {
            setImage1(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control mt-1"
          placeholder="Image URL 2"
          value={image2}
          onChange={(e) => {
            setImage2(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control mt-1"
          placeholder="Image URL 3"
          value={image3}
          onChange={(e) => {
            setImage3(e.target.value);
          }}
        />
        <div className="mt-1 text-right">
          <Button
            className="btn btn-primary appbutton"
            variant="success"
            onClick={addRoom}
          >
            ADD ROOM
          </Button>
        </div>
      </Col>
    </Row>
  );
};

// Exporting AddRoom.js to Admin.js.
export default AddRoom;
