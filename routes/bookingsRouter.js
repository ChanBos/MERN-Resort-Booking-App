// Requiring Express.
const express = require("express");
// Requiring Router from Express.
const router = express.Router();
// Requiring controllers from the controllers folder's roomController.js.
const bookings = require("../controllers/bookingController.js");

router.post("/bookroom", bookings.roomBookingController);
router.post("/getbookingsbyuserid", bookings.userIdBookingsController);
router.post("/getuserbookings", bookings.userBookingsController);
router.post("/cancelbooking", bookings.cancelBookingController);
router.get("/getallbookings", bookings.getAllBookingsController);

// Exporting controllers to server.js.
module.exports = router;
