import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendarDays, faCar, faMapLocation, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { NEW_SEARCH } from '../redux/constantsType/actionType';

const INITIALSTATE = {
      adults: 1,
      children: 0,
      rooms: 1,
}

const Header = ({ type }) => {
      const [date, setDate] = useState([{
            startDate: new Date(), endDate: new Date(), key: 'selection'
      }]);
      const [openDate, setOpenDate] = useState(false);
      const [options, setOptions] = useState(INITIALSTATE);
      const [openOptions, setOpenOptions] = useState(false);
      const [country, setCountry] = useState("");
      const dispatch = useDispatch();
      const navigate = useNavigate();

      const handleOptions = (name, operation) => {
            setOptions((prev) => {
                  return {
                        ...prev,
                        [name]: operation === "+" ? options[name] + 1 : options[name] - 1,
                  }
            })
      }

      const handleSearch = () => {
            dispatch({ type: NEW_SEARCH, payload: { country, date, options } });
            navigate("/hotels");
      }

      return (
            <div className='header'>
                  <div className={type === "hotels" ? "header__container list" : "header__container"}>
                        <div className="header__items">
                              <div className="header__items__item active">
                                    <FontAwesomeIcon icon={faBed} className="header__items__item__icon" />
                                    <span>Stays</span>
                              </div>
                              <div className="header__items__item">
                                    <FontAwesomeIcon icon={faPlane} className="header__items__item__icon" />
                                    <span>Flights</span>
                              </div>
                              <div className="header__items__item">
                                    <FontAwesomeIcon icon={faCar} className="header__items__item__icon" />
                                    <span>Car Rentals</span>
                              </div>
                              <div className="header__items__item">
                                    <FontAwesomeIcon icon={faTaxi} className="header__items__item__icon" />
                                    <span>Airport Taxis</span>
                              </div>
                              <div className="header__items__item">
                                    <FontAwesomeIcon icon={faBed} className="header__items__item__icon" />
                                    <span>Attractions</span>
                              </div>
                        </div>
                        {type !== "hotels" &&
                              <>
                                    <h1 className="header__title">
                                          A lifetime of discounts? It's Genius.
                                    </h1>
                                    <p className="header__desc">
                                          Get rewarded for your travels – unlock instant savings of 10% or more with a free <b>Luxbooking</b> account
                                    </p>
                                    <button className="header__btn">
                                          Sign in / Register
                                    </button>
                                    <div className="header__search">
                                          <div className="header__search__item">
                                                <FontAwesomeIcon
                                                      className="header__search__item__icon"
                                                      icon={faMapLocation}
                                                />
                                                <input
                                                      className="header__search__item__input"
                                                      type="text"
                                                      placeholder="Where are you going?"
                                                      onChange={e => setCountry(e.target.value)}
                                                />
                                          </div>
                                          <div className="header__search__item date__range">
                                                <FontAwesomeIcon
                                                      className="header__search__item__icon"
                                                      icon={faCalendarDays}
                                                />
                                                <span onClick={() => setOpenDate(!openDate)}>
                                                      {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")} `}
                                                </span>
                                                {openDate &&
                                                      <DateRange
                                                            className="header__search__item__date"
                                                            onChange={(item) => setDate([item.selection])}
                                                            ranges={date}
                                                            minDate={new Date()}
                                                      />
                                                }
                                          </div>
                                          <div className="header__search__item options" >
                                                <FontAwesomeIcon
                                                      className="header__search__item__icon"
                                                      icon={faPerson}
                                                />
                                                <span onClick={() => setOpenOptions(!openOptions)}>
                                                      {`${options.adults} Adult, ${options.children} Children, ${options.rooms} Room `}
                                                </span>
                                                {openOptions &&
                                                      <div className="header__search__item__options">
                                                            <div className="header__search__item__options__item">
                                                                  <span>Adult</span>
                                                                  <div className="header__search__item__options__item__counter">
                                                                        <button onClick={() => handleOptions("adults", "-")} disabled={options.adults <= 1}>-</button>
                                                                        <span>{options.adults}</span>
                                                                        <button onClick={() => handleOptions("adults", "+")} disabled={options.adults >= 50}>+</button>
                                                                  </div>

                                                            </div>
                                                            <div className="header__search__item__options__item">
                                                                  <span>Children</span>
                                                                  <div className="header__search__item__options__item__counter">
                                                                        <button onClick={() => handleOptions("children", "-")} disabled={options.children <= 0}>-</button>
                                                                        <span>{options.children}</span>
                                                                        <button onClick={() => handleOptions("children", "+")} disabled={options.children >= 100}>+</button>
                                                                  </div>
                                                            </div>
                                                            <div className="header__search__item__options__item">
                                                                  <span>Room</span>
                                                                  <div className="header__search__item__options__item__counter">
                                                                        <button onClick={() => handleOptions("rooms", "-")} disabled={options.rooms <= 1}>-</button>
                                                                        <span>{options.rooms}</span>
                                                                        <button onClick={() => handleOptions("rooms", "+")} disabled={options.rooms >= 9}>+</button>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                }
                                          </div>
                                          <div className="header__search__item">
                                                <button className="header__btn" onClick={handleSearch}>
                                                      Search
                                                </button>
                                          </div>
                                    </div>
                              </>
                        }
                  </div>
            </div>
      )
}

export default Header