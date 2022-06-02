import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { showMostBookedHotels } from '../redux/actions/hotelsAction';


const FeatureProperties = () => {
      const { hotels } = useSelector((state) => state.hotelsReducer);
      const dispatch = useDispatch();

      useEffect(() => {
            dispatch(showMostBookedHotels())
      }, [dispatch])

      return (
            <div className="fp">
                  {hotels?.map((hotel) => (
                        <div className="fp__item" key={hotel._id}>
                              <img
                                    src={hotel.photos[0]}
                                    alt="hotel"
                                    className="fp__img"
                              />
                              <span className="fp__name">{hotel.name}</span>
                              <span className="fp__city">{hotel.country}</span>
                              <span className="fp__price">Starting from ${hotel.cheapestPrice}</span>
                              <div className="fp__rating">
                                    <button>{hotel.rating}</button>
                                    <span>Excellent</span>
                              </div>
                        </div>
                  ))}
            </div>
      )
}

export default FeatureProperties