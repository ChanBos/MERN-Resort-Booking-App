// Imported React library and hooks.
import React, { useState, useEffect } from "react";
// Requiring Axios.
import axios from "axios";
// Imported components.
import Loader from "../components/Loader";
// Imported components from React Bootstrap
import { Col, Row, Button } from "react-bootstrap";
// Imported Swal from sweetalert2.
import Swal from "sweetalert2";

/**
 * Set the initial states of the props.
 * Getting the users' data via the the useEffect() hook and the Axios GET method from http://localhost:8080/api/users/getallusers.
 * The page's loading is set to false from it's initial state of being true.
 * If all is in order the list of users will be displayed. If an error occurs an error will be displayed.
 * Utilizing the map() method to iterate over the array and to return the data.
 * Added the EditUser component to allow an admin member to edit member details.
 * The users may be edited using their ids. The input sections will be updated onChange() via the axios PUT method and once the submit button
 * is clicked, the update method will be fired. If successful, the new data will be returned. If not, an error will be returned.
 */

const Users = () => {
  const [users, setUsers] = useState();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await (await axios.get("/api/users/getallusers")).data;
        setUsers(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    })();
  }, []);

  const updateOne = (e) => {
    e.preventDefault();

    axios
      .put(`/api/users/updateuser/${id}`, {
        Name: name,
        Email: email,
        isAdmin: isAdmin,
      })
      .then((response) => {
        Swal.fire(
          "Success!",
          "The User has been updated successfully.",
          response,
          "success"
        ).then(function () {
          window.location.reload();
        });
      })
      .catch((error) => {
        Swal.fire("Error.", error, "error").then(function () {
          window.location.reload();
        });
      });
  };

  return (
    <Row>
      {loading && <Loader />}

      <Col className="col-md-11">
        <table className="table table-bordered table-dark">
          <thead className="bs">
            <tr>
              <th>Id:</th>
              <th>Name:</th>
              <th>Email:</th>
              <th>Admin:</th>
            </tr>
          </thead>

          <tbody>
            {users &&
              users.map((user) => {
                return (
                  <tr>
                    <td>{user._id}</td>
                    <td>{user.Name}</td>
                    <td>{user.Email}</td>
                    <td>{user.isAdmin ? "Yes" : "No"}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </Col>

      <Col id="editusersection" className="col-md-11">
        <h5>Edit User</h5>
        <p>
          <b>Note:</b> All of the below fields are required in order to update
          the user successfully. Make sure that you have the matching user's ID
          and that you enter true or false in lowercase in the isAdmin section.
        </p>
        <Row>
          <table className="table table-bordered table-dark">
            <thead className="bs">
              <tr>
                <th>Id:</th>
                <th>Name:</th>
                <th>Email:</th>
                <th>Admin:</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td id="usertd1">
                  <input
                    className="usereditinput"
                    type="text"
                    placeholder="Enter ID"
                    value={id || ""}
                    onChange={(e) => setId(e.target.value)}
                  ></input>
                </td>
                <td id="usertd2">
                  <input
                    className="usereditinput"
                    type="text"
                    placeholder="Enter Name"
                    value={name || ""}
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </td>
                <td id="usertd3">
                  <input
                    className="usereditinput"
                    type="text"
                    placeholder="Enter Email"
                    value={email || ""}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </td>
                <td id="usertd4">
                  <input
                    className="usereditinput"
                    type="text"
                    placeholder="true or false"
                    value={isAdmin || ""}
                    onChange={(e) => setIsAdmin(e.target.value)}
                  ></input>
                </td>
              </tr>
            </tbody>
          </table>
          <Button
            className="appbutton"
            variant="success"
            type="button"
            title="Update a Car"
            onClick={(e) => updateOne(e)}
          >
            Submit Details
          </Button>
        </Row>
      </Col>
    </Row>
  );
};

// Exporting Users.js to Admin.js.
export default Users;
