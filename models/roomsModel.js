// Requiring Mongoose.
const mongoose = require("mongoose");

/**
 * Created a model, defining the schema of the rooms in order to save and retrieve data.
 * Set the type of the name, type and description to strings, the maxCount and rent per day to numbers, the image urls and
 * current bookings to arrays and added timestamps to show when the information has been updated.
 */

const roomSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    maxCount: {
      type: Number,
      required: true,
    },
    rentPerDay: {
      type: Number,
      required: true,
    },
    imageUrls: {
      type: [],
    },
    currentBookings: {
      type: [],
    },
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Exporting roomShema to server.js.
module.exports = mongoose.model("Room", roomSchema);
