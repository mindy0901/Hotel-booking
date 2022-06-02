import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux';
import { showHotelRooms } from '../redux/actions/hotelsAction';
import { useNavigate } from 'react-router-dom';
import { setRoomUnvailable } from '../redux/actions/roomsAction';

const Reserve = ({ setOpen, hotelId }) => {
      const { hotel } = useSelector((state) => state.hotelsReducer);
      const searchQuery = useSelector((state) => state.searchReducer);
      const [selectedRooms, setSelectedRooms] = useState([]);
      const dispatch = useDispatch();
      const navigate = useNavigate();

      useEffect(() => {
            dispatch(showHotelRooms(hotelId));
      }, [dispatch])

      const getDatesInRange = (startDate, endDate) => {
            const start = new Date(startDate);
            const end = new Date(endDate);
            const date = new Date(start.getTime());
            const dates = [];
            while (date <= end) {
                  dates.push(new Date(date).getTime());
                  date.setDate(date.getDate() + 1);
            }
            return dates;
      };
      // get dates code [4343, 43434, 4343, 4343, ...]
      const alldates = getDatesInRange(searchQuery.date[0].startDate, searchQuery.date[0].endDate);
      // check dates picked or not
      const isAvailable = (roomNumber) => {
            const isFound = roomNumber.unavailableDates.some((date) =>
                  alldates.includes(new Date(date).getTime())
            );
            return !isFound;
      };

      // checked room
      const handleSelect = (e) => {
            const checked = e.target.checked;
            const value = e.target.value;
            setSelectedRooms(
                  checked
                        ? [...selectedRooms, value]
                        : selectedRooms.filter((item) => item !== value)
            );
      };

      // update booked rooms 
      const handleClick = async () => {
            try {
                  await Promise.all(
                        selectedRooms.map((roomId) => {
                              dispatch(setRoomUnvailable(roomId, alldates))
                        })
                  );
                  setOpen(false);
                  navigate("/");
            } catch (error) { }
      };

      return (
            <div className="reserve">
                  <div className="reserve__container">
                        <FontAwesomeIcon
                              icon={faCircleXmark}
                              className="reserve__container__close"
                              onClick={() => setOpen(false)}
                        />
                        <div>
                        <span>Select your rooms Type:</span>
                        <span>Room Number</span>
                        </div>
                        {hotel.rooms?.map((room) => (
                              <div className="reserve__container__item" key={room._id}>
                                    <div className="reserve__container__item__info">
                                          <div className="reserve__container__item__title">{room.title}</div>
                                          <div className="reserve__container__item__desc">{room.desc}l Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum enim, voluptates voluptatem eveniet quasi quae illum laboriosam, sit quisquam quaerat laborum odit quas consectetur aliquid consequuntur vero quam at. Asperiores.</div>
                                          <div className="reserve__container__item__max">
                                                Max people: <b>{room.maxPeople}</b>
                                          </div>
                                          <div className="reserve__container__item__price">{room.price}</div>
                                    </div>
                                    <div className="reserve__container__item__rooms">
                                          {room.roomNumbers?.map((roomNumber) => (
                                                <div className="room" key={roomNumber._id}>
                                                      <label>{roomNumber.number}</label>
                                                      <input
                                                            type="checkbox"
                                                            value={roomNumber._id}
                                                            onChange={handleSelect}
                                                            disabled={!isAvailable(roomNumber)}
                                                      />
                                                </div>
                                          ))}
                                    </div>
                              </div>
                        ))}
                        <button onClick={handleClick} className="reserve__button">
                              Reserve Now!
                        </button>
                  </div>
            </div>
      )
}

export default Reserve