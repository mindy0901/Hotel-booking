import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { format } from "date-fns"
import { DateRange } from 'react-date-range'
import SearchItems from '../components/SearchItems'
import { useDispatch, useSelector } from "react-redux"
import { showSearchResults } from '../redux/actions/hotelsAction'

const Hotels = () => {
      const { hotels } = useSelector((state) => state.hotelsReducer);
      const searchQuery = useSelector((state) => state.searchReducer);
      const dispatch = useDispatch();

      const [date, setDate] = useState(searchQuery.date);
      const [options, setOptions] = useState(searchQuery.options);
      const [country, setCountry] = useState(searchQuery.country);
      const [openDate, setOpenDate] = useState(false);
      const [min, setMin] = useState(undefined);
      const [max, setMax] = useState(undefined);
      const query = { country, min, max }
      console.log(query)

      useEffect(() => {
            dispatch(showSearchResults(query))
      }, [dispatch])

      const handleChange = (e) => {
            const name = e.target.name
            setOptions({
                  ...options,
                  [name]: e.target.value,
            })
      }

      const handleClick = (e) => {
            dispatch(showSearchResults(query))
      }

      return (
            <div className="hotels">
                  <Navbar />
                  <Header type="hotels" />
                  <div className="hotels__container">
                        <div className="hotels__wrapper">
                              <div className="hotels__search">
                                    <h1 className="hotels__search__title">
                                          Search
                                    </h1>
                                    <div className="hotels__search__item">
                                          <label htmlFor="">Destination</label>
                                          <input value={country} onChange={(e) => setCountry(e.target.value)} type="text" placeholder={country} />
                                    </div>
                                    <div className="hotels__search__item">
                                          <label htmlFor="">Check-in Date</label>
                                          <span onClick={() => setOpenDate(!openDate)}>
                                                {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")} `}
                                          </span>
                                          {openDate &&
                                                <DateRange
                                                      className="hotels__search__item__date"
                                                      onChange={item => setDate([item.selection])}
                                                      ranges={date}
                                                      minDate={new Date()}
                                                />
                                          }
                                    </div>
                                    <div className="hotels__search__item">
                                          <label htmlFor="">Options</label>
                                          <div className="hotels__search__item__option">
                                                <span className="hotels__search__item__text">Min price per night</span>
                                                <input onChange={(e) => setMin(e.target.value)} type="number" className="hotels__search__item__input" />
                                          </div>
                                          <div className="hotels__search__item__option">
                                                <span className="hotels__search__item__text">Max price per night</span>
                                                <input onChange={(e) => setMax(e.target.value)} type="number" className="hotels__search__item__input" />
                                          </div>
                                          <div className="hotels__search__item__option">
                                                <span className="hotels__search__item__text">Adults</span>
                                                <input onChange={handleChange} name="adults" min={1} type="number" className="hotels__search__item__input" placeholder={options.adults} />
                                          </div>
                                          <div className="hotels__search__item__option">
                                                <span className="hotels__search__item__text">Children</span>
                                                <input onChange={handleChange} name="children" min={0} type="number" className="hotels__search__item__input" placeholder={options.children} />
                                          </div>
                                          <div className="hotels__search__item__option">
                                                <span className="hotels__search__item__text">Rooms</span>
                                                <input onChange={handleChange} name="rooms" min={1} type="number" className="hotels__search__item__input" placeholder={options.rooms} />
                                          </div>
                                    </div>
                                    <button onClick={handleClick}>Search</button>
                              </div>
                              <div className="hotels__results">
                                    {hotels?.map((item) => (
                                          <SearchItems item={item} key={item._id} />
                                    ))}
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default Hotels