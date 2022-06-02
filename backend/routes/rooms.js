import express from "express";
import {
      createRoom,
      deleteRoom,
      getRoom,
      getRooms,
      updateRoom,
      updateRoomAvailability,
} from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/:hotelid", createRoom);
router.put("/availability/:id", updateRoomAvailability);
router.delete("/:id", deleteRoom);
router.put("/:id", updateRoom);
router.get("/:id", getRoom);
router.get("/", getRooms);

export default router;