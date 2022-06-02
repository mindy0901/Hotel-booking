import { useEffect, useState } from "react";
import { hotelInputs } from "../formSource";
import { useDispatch, useSelector } from "react-redux";
import { createHotel } from "../redux/actions/hotelAction";
import { useNavigate } from "react-router-dom";
import { showRooms } from "../redux/actions/roomAction";
import axios from "axios";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const initialState = {
      name: "",
      type: "",
      country: "",
      address: "",
      title: "",
      desc: "",
      rating: 1,
      distance: 0,
      cheapestPrice: 1,
      featured: false
};

const NewHotel = () => {
      const { rooms, loading } = useSelector((state) => state.roomsReducer)
      const hotel = useSelector((state) => state.hotelReducer)
      const [files, setFiles] = useState(null);
      const [form, setForm] = useState(initialState);
      const [selectedRooms, setSelectedRooms] = useState([]);
      const dispatch = useDispatch();
      const navigate = useNavigate();

      useEffect(() => {
            dispatch(showRooms())
      }, [dispatch])

      const handleChange = (e) => {
            setForm({ ...form, [e.target.id]: e.target.value });
      }

      const handleSelect = (e) => {
            const value = Array.from(
                  e.target.selectedOptions,
                  (option) => option.value
            );
            setSelectedRooms(value);
      };

      const handleClick = async (e) => {
            e.preventDefault();
            if (files !== null) {
                  const list = await Promise.all(Object.values(files).map(async (file) => {
                        const data = new FormData();
                        data.append("file", file);
                        data.append("upload_preset", "itikml7r");

                        const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dqzcvunv5/image/upload", data);
                        const { url } = uploadRes.data;
                        return url;
                  }));
                  const newHotel = { ...form, rooms: selectedRooms, photos: list };
                  dispatch(createHotel(newHotel, navigate));
            } else {
                  const newHotel = { ...form, rooms: selectedRooms, photos: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" };
                  dispatch(createHotel(newHotel, navigate));
            }
      };

      return (
            <div className="new">
                  <Sidebar />
                  <div className="new__container">
                        <Navbar />
                        <div className="top">
                              <h1>Add New Hotel</h1>
                        </div>
                        <div className="bottom">
                              <div className="left">
                                    <img alt="" src={files
                                          ? URL.createObjectURL(files[0])
                                          : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                    } />
                              </div>
                              <div className="right">
                                    <form>
                                          <div className="form__input">
                                                <label htmlFor="file">
                                                      Image: <DriveFolderUploadOutlinedIcon className="icon" />
                                                </label>
                                                <input
                                                      type="file"
                                                      id="file"
                                                      multiple
                                                      onChange={(e) => setFiles(e.target.files)}
                                                      style={{ display: "none" }}
                                                />
                                          </div>
                                          {hotelInputs.map((input) => (
                                                <div className="form__input" key={input.id}>
                                                      <label>{input.label}</label>
                                                      <input
                                                            id={input.id}
                                                            onChange={handleChange}
                                                            type={input.type}
                                                            placeholder={input.placeholder}
                                                            min={input.min}
                                                      />
                                                </div>
                                          ))}
                                          <div className="form__input">
                                                <label>Featured</label>
                                                <select id="featured" onChange={handleChange}>
                                                      <option value={false}>No</option>
                                                      <option value={true}>Yes</option>
                                                </select>
                                          </div>
                                          <div className="select__rooms">
                                                <label>Rooms</label>
                                                <select id="rooms" multiple onChange={handleSelect}>
                                                      {loading
                                                            ? "Loading rooms..."
                                                            : rooms &&
                                                            rooms.map((room) => (
                                                                  <option key={room._id} value={room._id}>
                                                                        {room.title}
                                                                  </option>
                                                            ))}
                                                </select>
                                          </div>
                                          <button onClick={handleClick}>
                                                {hotel.loading ? "Creating..." : "Send"}
                                          </button>
                                    </form>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default NewHotel;
