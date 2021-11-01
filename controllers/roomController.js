// Requiring Mongoose.
const mongoose = require("mongoose");
// Requiring the schemas that has been created in the roomsModel.js file.
const Room = require("../models/roomsModel.js");

/**
 * POST/ CREATE:
 * @required  Body properties: _id
 * @param {*} req Creating a new post request with the room's id.
 * @param {*} res Data for a specific room that matches the requested id.
 * @returns Data of the room that matches the id of the request input or an error message should the
 * request be unsuccessful.
 */

exports.roomByIDController = async (req, res) => {
  const roomId = req.body.roomId;
  try {
    const room = await Room.findOne({ _id: roomId });
    res.json(room);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

/**
 * POST/ CREATE:
 * @required  Body properties: room, rentPerDay, maxCount, description, type, image 1, 2, 3.
 * @param {*} req Creating a new post request with the room's props.
 * @param {*} res Data for a specific room that has been added.
 * @returns Data of the room that is being added from the request input or an error message should the
 * request be unsuccessful.
 */
exports.addRoomController = async (req, res) => {
  const {
    room,
    rentPerDay,
    maxCount,
    description,
    type,
    image1,
    image2,
    image3,
  } = req.body;

  const newroom = new Room({
    name: room,
    rentPerDay,
    maxCount,
    description,
    type,
    imageUrls: [image1, image2, image3],
    currentBookings: [],
  });
  try {
    await newroom.save();
    res.send("New Room Added Successfully");
  } catch (error) {
    return res.status(400).json({ error });
  }
};

/**
 * GET/ READ:
 * Requesting all the rooms' information from MongoDB and returning the response with the information.
 * @required  Content.
 * @param {*} req Getting the array of rooms.
 * @param {*} res Copy of the content (copyContent).
 * @returns A list of the current rooms that are already written.
 */

exports.getAllController = async (req, res) => {
  try {
    const rooms = await Room.find({});
    res.json(rooms);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

/**
 * DELETE:
 * @required  Body properties: id.
 * @param {*} req Room with the matching id to be deleted.
 * @param {*} res Updated copy of the content (copyContent).
 * @returns List of rooms and a confirmation message is returned to confirm that the post has been deleted or an error message should the
 * request be unsuccessful.
 */

exports.removeOneController = (req, res) => {
  Room.findByIdAndRemove(req.params.id)
    .then((rooms) => res.json({ message: "Room deleted successfully.", rooms }))
    .catch((err) =>
      res.status(400).json({ message: "Error deleting the room.", err })
    );
};
