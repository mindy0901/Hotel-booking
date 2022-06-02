import { useEffect, useState } from "react";
import { roomInputs } from "../formSource";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createRoom } from "../redux/actions/roomAction";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { showHotels } from "../redux/actions/hotelAction";

const initialState = {
      title: "",
      desc: "",
      price: 1,
      maxPeople: 1,
}

const NewRoom = () => {
      const { hotels, loading } = useSelector((state) => state.hotelReducer);
      const [form, setForm] = useState(initialState)
      const [rooms, setRooms] = useState([]);
      const [hotelId, setHotelId] = useState(undefined);
      console.log(hotelId)
      const dispatch = useDispatch();
      const navigate = useNavigate();

      useEffect(() => {
            dispatch(showHotels())
      }, [dispatch])

      const handleChange = (e) => {
            setForm({ ...form, [e.target.id]: e.target.value });
      };

      const handleClick = async (e) => {
            e.preventDefault();
            const roomNumbers = rooms.split(",").map((room) => (
                  { number: room }
            ));
            try {
                  dispatch(createRoom(hotelId, { ...form, roomNumbers: roomNumbers }, navigate))
            } catch (err) {
                  console.log(err);
            }
      };

      return (
            <div className="new">
                  <Sidebar />
                  <div className="new__container">
                        <Navbar />
                        <div className="top">
                              <h1>Add New Room</h1>
                        </div>
                        <div className="bottom">
                              <div className="right">
                                    <form>
                                          {roomInputs.map((input) => (
                                                <div className="form__input" key={input.id}>
                                                      <label>{input.label}</label>
                                                      <input
                                                            id={input.id}
                                                            type={input.type}
                                                            placeholder={input.placeholder}
                                                            onChange={handleChange}
                                                      />
                                                </div>
                                          ))}
                                          <div className="form__input">
                                                <label>Rooms</label>
                                                <textarea
                                                      onChange={(e) => setRooms(e.target.value)}
                                                      placeholder="101,102,103,..."
                                                />
                                          </div>
                                          <div className="form__input">
                                                <label>Choose a hotel</label>
                                                <select id="hotelId" onChange={(e) => setHotelId(e.target.value)} >
                                                      {loading
                                                            ? "Loading Hotels..."
                                                            : hotels &&
                                                            hotels.map((hotel) => (
                                                                  <option key={hotel._id} value={hotel._id}>{hotel.name}</option>
                                                            ))}
                                            
                                                </select>
                                          </div>
                                          <button onClick={handleClick}>Send</button>
                                    </form>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default NewRoom;
