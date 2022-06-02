import express from "express";
import { updateUser, deleteUser, getUser, getUsers, } from "../controllers/userController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.delete("/:id", deleteUser);
router.put("/:id", updateUser);
router.get("/:id", getUser);
router.get("/", getUsers);

export default router;