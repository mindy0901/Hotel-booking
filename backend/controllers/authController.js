import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const register = async (req, res, next) => {
      const { username, password, phoneNumber, email, city, country, isAdmin, img } = req.body;
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      const newUser = new User({
            username: username,
            password: hash,
            email: email,
            phoneNumber: phoneNumber,
            country: country,
            city: city,
            img: img,
            isAdmin: isAdmin,
      });
      try {
            const oldUser = await User.findOne({ username });
            if (oldUser) return res.status(400).json({ message: "User already exists" });

            await newUser.save();
            res.status(201).json(newUser);
      } catch (err) {
            next(err);
      }
};

export const login = async (req, res, next) => {
      try {
            // FIND USER
            const user = await User.findOne({ username: req.body.username });
            if (!user) return next(createError(404, "User not found!"));

            // CHECK PASSWORD
            const isPasswordCorrect = await bcrypt.compare(
                  req.body.password,
                  user.password
            );
            if (!isPasswordCorrect) return next(createError(400, "Wrong password or username!"));

            // GIVE TOKEN
            const token = jwt.sign(
                  {
                        id: user._id,
                        isAdmin: user.isAdmin
                  },
                  process.env.JWT
            );

            // TOKEN TO COOKIE
            const { password, ...otherDetails } = user._doc;
            res
                  .cookie("access_token", token, {
                        httpOnly: true,
                  })
                  .status(200)
                  .json({ details: { ...otherDetails } });
      } catch (err) {
            next(err);
      }
};