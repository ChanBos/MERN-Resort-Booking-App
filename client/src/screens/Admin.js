// Imported React library and hooks.
import React from "react";
// Importing tabs from Ant Design.
import { Tabs } from "antd";
// Imported components from React Bootstrap.
import { Row } from "react-bootstrap";
// Imported components.
import AddRoom from "../components/AddRoom";
import Rooms from "../components/Rooms";
import Bookings from "../components/Bookings";
import Users from "../components/Users";
// Constructing the tab pane froms tabs from Ant Design.
const { TabPane } = Tabs;

/**
 * Created an Admin page that displays all of the following components: Bookings, Rooms, AddRooms, Users.
 * All these components are shown via tabs and a tabpane.
 */

const Admin = () => {
  return (
    <div className="ml-3">
      <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
        Admin Panel
      </h2>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Bookings" key="1">
          <Row>
            <Bookings />
          </Row>
        </TabPane>
        <TabPane tab="Rooms" key="2">
          <Row>
            <Rooms />
          </Row>
        </TabPane>
        <TabPane tab="Add Room" key="3">
          <AddRoom />
        </TabPane>
        <TabPane tab="Users" key="4">
          <Users />
        </TabPane>
      </Tabs>
    </div>
  );
};

// Exporting Admin.js to App.js.
export default Admin;
