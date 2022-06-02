import React from 'react'
import { Link } from 'react-router-dom'

const search__items = ({ item }) => {
      return (
            <div className="search__item">
                  <img
                        src={item.photos[0]}
                        alt="hotelPhoto"
                        className="search__img"
                  />
                  <div className="search__desc">
                        <h1 className="search__title">{item.name}</h1>
                        <span className="search__distance">{item.distance}m from center</span>
                        <span className="search__taxi">Free airport taxi</span>
                        <span className="search__subtitle">
                              Studio Apartment with Air conditioning
                        </span>
                        <span className="search__features">
                              {item.desc}, Entire studio • 1 bathroom • 21m² 1 full bed
                        </span>
                        <span className="search__cancleOp">
                              Free cancellation
                        </span>
                        <span className="search__cancleOpSubtitle">
                              You can cancel later, so lock in this great price today!
                        </span>
                  </div>
                  <div className="search__details">
                        <div className="search__rating">
                              <span>Excellent</span>
                              <button>{item.rating || 8.9}</button>
                        </div>
                        <div className="search__details__texts">
                              <span className="search__price">${item.cheapestPrice}</span>
                              <span className="search__taxOp">Includes taxes and fees</span>
                              <Link to={`/hotels/${item._id}`}>
                                    <button className="search__checkBtn">See availability</button>
                              </Link>
                        </div>
                  </div>
            </div>
      )
}

export default search__items