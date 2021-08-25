// Requiring Mongoose.
const mongoose = require("mongoose");

/**
 * Created a model, defining the schema of the bookings in order to save and retrieve data.
 * Set the type of the room, roomId, userId, fromDate, toDate, transactionId and status to strings and totalAmount and totalDays to numbers and
 * added timestamps to show when the information has been updated.
 */

const bookingSchema = mongoose.Schema(
  {
    room: {
      type: String,
      required: true,
    },
    roomId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    fromDate: {
      type: String,
      required: true,
    },
    toDate: {
      type: String,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    totalDays: {
      type: Number,
      required: true,
    },
    transactionId: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "booked",
    },
  },
  {
    timestamps: true,
  }
);

// Exporting bookingShema to server.js.
module.exports = mongoose.model("Bookings", bookingSchema);
