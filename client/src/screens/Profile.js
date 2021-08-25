// Imported React library and hooks.
import React, { useEffect } from "react";
// Importing tabs from Ant Design.
import { Tabs } from "antd";
// Imported components.
import MyBookings from "../components/MyBookings";
// Constructing the tab pane froms tabs from Ant Design.
const { TabPane } = Tabs;

/**
 * Created a Profile page that also displays the MyBookings component.
 * Getting the current user from local storage by parsing the data.
 * If there is no user the user will be redirected to the login page.
 * Displaying the following data: Name, Email Address, isAdmin.
 * Displaying the data via tabs and a tabpane.
 */

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    if (!user) {
      window.location.href = "/login";
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="userinfo">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Profile" key="1">
          <h3>My Profile</h3>
          <br />
          <h5>Name: {user.name}</h5>
          <h5>Email Address: {user.email}</h5>
        </TabPane>
        <TabPane tab="Bookings" key="2">
          <MyBookings />
        </TabPane>
      </Tabs>
    </div>
  );
};

// Exporting Profile.js to App.js.
export default Profile;
