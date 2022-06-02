import express from "express";
import {
      countByCity,
      countByType,
      createHotel,
      deleteHotel,
      getHotel,
      getHotelRooms,
      getHotels,
      updateHotel,
} from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router();

router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/", getHotels);
router.get("/:id", getHotel);
router.get("/room/:id", getHotelRooms);

router.post("/", createHotel);
router.put("/:id", updateHotel);
router.delete("/:id", deleteHotel);

export default router;