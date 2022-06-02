import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

export const createHotel = async (req, res, next) => {
      const newHotel = new Hotel(req.body);
      try {
            await newHotel.save();
            res.status(201).json(newHotel);
      } catch (err) {
            next(err);
      }
};

export const updateHotel = async (req, res, next) => {
      try {
            const updatedHotel = await Hotel.findByIdAndUpdate(
                  req.params.id,
                  { $set: req.body },
                  { new: true }
            );
            res.json(updatedHotel);
      } catch (err) {
            next(err);
      }
};

export const deleteHotel = async (req, res, next) => {
      const id = req.params.id
      try {
            await Hotel.findByIdAndDelete(id);
            res.status(200).json("Hotel has been deleted.");
      } catch (err) {
            next(err);
      }
};

export const getHotel = async (req, res, next) => {
      try {
            const hotel = await Hotel.findById(req.params.id);
            res.status(200).json(hotel);
      } catch (err) {
            next(err);
      }
};

export const getHotels = async (req, res, next) => {
      const { min, max, limit, ...others } = req.query;
      try {
            const hotels = await Hotel.find({
                  ...others,
                  cheapestPrice: { $gt: min || 0, $lt: max || 10000 },
            }).limit(limit);
            res.status(200).json(hotels);
      } catch (err) {
            next(err);
      }
};

export const getHotelRooms = async (req, res, next) => {
      const id = req.params.id
      try {
            const hotel = await Hotel.findById(id);
            const list = await Promise.all(
                  hotel.rooms.map((room) => {
                        return Room.findById(room);
                  })
            );
            console.log(list)
            res.status(200).json(list)
      } catch (err) {
            next(err);
      }
};

export const countByCity = async (req, res, next) => {
      const countries = req.query.cities.split(",", 3);
      try {
            const list = await Promise.all(
                  countries.map((country) => {
                        return Hotel.countDocuments({ country: country });
                  })
            );
            res.status(200).json(list);
      } catch (err) {
            next(err);
      }
};

export const countByType = async (req, res, next) => {
      try {
            const hotelCount = await Hotel.countDocuments({ type: "hotel" });
            const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
            const resortCount = await Hotel.countDocuments({ type: "resort" });
            const villaCount = await Hotel.countDocuments({ type: "villa" });
            const cabinCount = await Hotel.countDocuments({ type: "cabin" });

            res.status(200).json([
                  { type: "hotels", count: hotelCount },
                  { type: "apartments", count: apartmentCount },
                  { type: "resorts", count: resortCount },
                  { type: "villas", count: villaCount },
                  { type: "cabins", count: cabinCount },
            ]);
      } catch (err) {
            next(err);
      }
};

