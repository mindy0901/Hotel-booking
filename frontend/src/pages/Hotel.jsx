import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
      faCircleArrowLeft,
      faCircleArrowRight,
      faCircleXmark,
      faLocationDot,
} from "@fortawesome/free-solid-svg-icons";


import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MailList from '../components/MailList';
import { showHotelDetails } from '../redux/actions/hotelsAction';
import Reserve from '../components/Reserve';


const Hotel = () => {
      const { user } = useSelector((state) => state.authReducer);
      const { hotel } = useSelector((state) => state.hotelsReducer);
      const searchQuery = useSelector((state) => state.searchReducer);
      const [slideNumber, setSlideNumber] = useState(0);
      const [open, setOpen] = useState(false);
      const [openModal, setOpenModal] = useState(false);
      const dispatch = useDispatch();
      const location = useLocation();
      const navigate = useNavigate();
      const id = location.pathname.split("/")[2];

      useEffect(() => {
            dispatch(showHotelDetails(id))
      }, [dispatch]);

      const handleOpen = (i) => {
            setSlideNumber(i);
            setOpen(true);
            window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
            });
      };

      const handleMove = (direction) => {
            let newSlideNumber;
            if (direction === "l") {
                  newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
            } else {
                  newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
            }
            setSlideNumber(newSlideNumber)
      };

      const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
      const dayDifference = (date1, date2) => {
            const timeDiff = Math.abs(date2.getTime() - date1.getTime());
            const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
            return diffDays;
      }
      const totalDays = dayDifference(searchQuery.date[0].endDate, searchQuery.date[0].startDate);

      const handleClick = () => {
            if (user) {
                  setOpenModal(true);
            } else {
                  navigate("/login");
            }
      };

      return (
            <div className="hotel">
                  <Navbar />
                  <Header type="hotels" />
                  <div className="hotel__container">
                        {open && (
                              <div className="slider">
                                    <FontAwesomeIcon
                                          icon={faCircleXmark}
                                          className="close"
                                          onClick={() => setOpen(false)}
                                    />
                                    <FontAwesomeIcon
                                          icon={faCircleArrowLeft}
                                          className="arrow"
                                          onClick={() => handleMove("l")}
                                    />
                                    <div className="sliderWrapper">
                                          <img src={hotel.photos[slideNumber]} alt="" className="sliderImg" />
                                    </div>
                                    <FontAwesomeIcon
                                          icon={faCircleArrowRight}
                                          className="arrow"
                                          onClick={() => handleMove("r")}
                                    />
                              </div>
                        )}
                        <div className="hotel__wrapper">
                              <button onClick={handleClick} className="hotel__booking">Reserve or Book Now!</button>
                              <h1 className="hotel__name">{hotel?.name}</h1>
                              <div className="hotel__address">
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    <span>{hotel?.address}</span>
                              </div>
                              <span className="hotel__distance">
                                    Excellent location {hotel?.distance}m from center
                              </span>
                              <span className="hotel__price--highlight">
                                    Book a stay over ${hotel?.cheapestPrice} at this property and get a free airport taxi
                              </span>
                              <div className="hotel__imgs">
                                    {hotel?.photos?.map((photo, index) => (
                                          <div className="hotel__imgs__wrapper" key={index}>
                                                <img
                                                      onClick={() => handleOpen(index)}
                                                      src={photo}
                                                      alt="hotelPhoto"
                                                      className="hotel__img"
                                                />
                                          </div>
                                    ))}
                              </div>
                              <div className="hotel__details">
                                    <div className="hotel__details__texts">
                                          <h1 className="hotel__title">{hotel?.title}</h1>
                                          <p className="hotel__desc">{hotel?.desc}</p>
                                    </div>
                                    <div className="hotel__details__price">
                                          <h1>Details</h1>
                                          <span>Located in the real heart of Krakow, this property has anexcellent location score of 9.8!</span>
                                          <h2>
                                                <b>${totalDays * hotel.cheapestPrice * searchQuery.options.rooms || hotel.cheapestPrice} </b>
                                                ({totalDays <= 0 ? 1 : totalDays} Days and {totalDays - 1 < 0 ? 1 : totalDays - 1} Night)
                                          </h2>
                                          <button onClick={handleClick}>Reserve or Book Now!</button>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <MailList />
                  <Footer />
                  {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
            </div>
      )
}

export default Hotel