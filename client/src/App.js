// Imported React library.
import React from "react";
// Imported stylesheet.
import "./App.css";
import "antd/dist/antd.css";
// Imported components from React Router Dom.
import { BrowserRouter, Route } from "react-router-dom";
// Imported components.
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// Imported screens.
import Landing from "./screens/Landing";
import Activities from "./screens/Activities";
import Home from "./screens/Home";
import Register from "./screens/Register";
import Login from "./screens/Login";
import About from "./screens/About";
import Profile from "./screens/Profile";
import Contact from "./screens/Contact";
import Admin from "./screens/Admin";
import Booking from "./screens/Booking";

/**
 * Created the App function and returning components to be exported to index.js.
 * Utilized BrowserRouter and Route from React-router-dom to navigate via links.
 * Added the React Bootstrap link.
 * @returns Application that returns all of the components.
 */

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossOrigin="anonymous"
      ></link>
      <Navbar />
      <BrowserRouter>
        <Route path="/home" exact component={Home} />
        <Route path="/" exact component={Landing} />
        <Route path="/activities" exact component={Activities} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/about" exact component={About} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/admin" exact component={Admin} />
        <Route
          path="/booking/:roomId/:fromDate/:toDate"
          exact
          component={Booking}
        />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

// Exporting App.js to index.js.
export default App;
