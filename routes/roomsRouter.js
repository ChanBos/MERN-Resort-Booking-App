// Requiring Express.
const express = require("express");
// Requiring Router from Express.
const router = express.Router();
// Requiring controllers from the controllers folder's roomController.js.
const rooms = require("../controllers/roomController.js");

router.post("/getroombyid", rooms.roomByIDController);
router.post("/addroom", rooms.addRoomController);
router.get("/getall", rooms.getAllController);
router.delete("/delete/:id", rooms.removeOneController);

// Exporting controllers to server.js.
module.exports = router;
