// Requiring Mongoose.
const mongoose = require("mongoose");
// Importing Moment to manage dates.
const moment = require("moment");
// Importing Stripe.
// Requiring dotenv.
const payConfig = require("../config/app.config");
const Stripe = require("stripe")(payConfig.STRIPE_KEY);
// Importing UUID.
const { v4: uuidv4 } = require("uuid");
uuidv4();
// Requiring the schemas that has been created in the bookingModel.js file and also the roomsModel.js schema.
const Booking = require("../models/bookingModel.js");
const Room = require("../models/roomsModel.js");

/**
 * POST/ CREATE:
 * @required  Body properties: room, roomId, userId, fromDate, toDate, totalAmount, totalDays, transactionId
 * @param {*} req Creating a new post request with the booking data.
 * @param {*} res Data for a specific room that has been booked.
 * @returns Data of the room that has been booked or an error message should the request be unsuccessful.
 * Formatted the toDate and fromDate's formats using Moment.
 * Updating the room's currentBookings schema using the room's id. Pushing the new data to currentBookings.
 */

exports.roomBookingController = async (req, res) => {
  const { room, userId, fromDate, toDate, totalAmount, totalDays, token } =
    req.body;

  try {
    const customer = await Stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const payment = await Stripe.charges.create(
      {
        amount: totalAmount * 100,
        customer: customer.id,
        currency: "zar",
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );

    if (payment) {
      try {
        const newBooking = new Booking({
          room: room.name,
          roomId: room._id,
          userId,
          fromDate: moment(fromDate).format("DD-MM-YYYY"),
          toDate: moment(toDate).format("DD-MM-YYYY"),
          totalAmount,
          totalDays,
          transactionId: "1234",
          status: "booked",
        });

        await newBooking.save(async (err, booking) => {
          const oldroom = await Room.findOne({ _id: room._id });

          oldroom.currentBookings.push({
            bookingId: booking._id,
            fromDate: moment(fromDate).format("DD-MM-YYYY"),
            toDate: moment(toDate).format("DD-MM-YYYY"),
            userId: userId,
            status: booking.status,
          });
          await oldroom.save();
        });

        res.send("Payment Successful. Your room has been booked.");
      } catch (error) {
        return res.status(400).json({ message: error });
      }
    } else {
      res.send("Payment failed.");
    }
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong." + error });
  }
};

/**
 * POST/ CREATE:
 * @required Body properties: room, roomId, userId, fromDate, toDate, totalAmount, totalDays, transactionId
 * @param {*} req Creating a new booking request with the user's id details.
 * @param {*} res Data for a specific user's booking that matches the user's id.
 * @returns Data of the user's bookings that matches the id of the request input or an error message should the
 * request be unsuccessful.
 */

exports.userBookingsController = async (req, res) => {
  const { userId } = req.body;
  try {
    const bookings = await Booking.find({ userid: userId }).sort({ _id: -1 });
    res.send(bookings);
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }
};

/**
 * POST/ CREATE:
 * @required  Body properties: room, roomId, userId, fromDate, toDate, totalAmount, totalDays, transactionId
 * @param {*} req Creating a new cancellation request with the booking and room's id.
 * @param {*} res Data for a specific booking that matches the id with a new status, cancelled.
 * @returns Data of the specific cancelled booking that matches the id of the request input or an error message should the
 * request be unsuccessful.
 */

exports.cancelBookingController = async (req, res) => {
  const { bookingId, roomId } = req.body;
  try {
    const bookingItem = await Booking.findOne({ _id: bookingId });
    bookingItem.status = "cancelled";
    await bookingItem.save();
    const room = await Room.findOne({ _id: roomId });
    const bookings = room.currentBookings;
    const temp = bookings.filter(
      (booking) => booking.bookingId.toString() !== bookingId
    );
    room.currentBookings = temp;
    await room.save();
    res.send("Cancellation Successful.");
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong." + error });
  }
};

/**
 * GET/ READ:
 * @required Body properties: room, roomId, userId, fromDate, toDate, totalAmount, totalDays, transactionId
 * @param {*} req Creating a new post request with the user's id details.
 * @param {*} res Data for a specific user's booking that matches the user's id.
 * @returns Data of the user's bookings that matches the id of the request input or an error message should the
 * request be unsuccessful.
 */

// Searching for bookings via the user's id. If successful, the bookings will be listed on the bookings tab. If an error occurs, the error will
// be returned.
exports.userIdBookingsController = async (req, res) => {
  const { userid } = req.body;
  try {
    const bookings = await Booking.find({ userid: userid }).sort({ _id: -1 });
    res.send(bookings);
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong." + error });
  }
};

/**
 * GET/ READ:
 * Requesting all the bookings' information from MongoDB and returning the response with the information.
 * @required  Content.
 * @param {*} req Getting the array of bookings.
 * @param {*} res Copy of the content (copyContent).
 * @returns A list of the current bookings that are already written or an error should a problem arrise.
 */

exports.getAllBookingsController = async (req, res) => {
  try {
    const bookings = await Booking.find({});
    res.send(bookings);
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong." + error });
  }
};
