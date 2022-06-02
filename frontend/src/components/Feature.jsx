import React, { useEffect } from 'react';
import { showHotelsCountByCity } from '../redux/actions/hotelsAction';
import { useDispatch, useSelector } from "react-redux"
import { cityImg } from '../constants/data';

const Feature = () => {
      const { countByCity } = useSelector((state) => state.hotelsReducer);
      const dispatch = useDispatch();

      useEffect(() => {
            dispatch(showHotelsCountByCity("vietnam,korea,japan,etc"))
      }, [dispatch])

      return (
            <div className="feature">
                  <div className="feature__item">
                        <img src={cityImg[0].src} alt="vietnam" className="feature__item__img" />
                        <div className="feature__item__titles">
                              <h1>{cityImg[0].city}</h1>
                              <h2>{countByCity[0]} properties</h2>
                              
                        </div>
                  </div>
                  <div className="feature__item">
                        <img src={cityImg[1].src} alt="korea" className="feature__item__img" />
                        <div className="feature__item__titles">
                              <h1>{cityImg[1].city}</h1>
                              <h2>{countByCity[1]} properties</h2>
                        </div>
                  </div>
                  <div className="feature__item">
                        <img src={cityImg[2].src} alt="japan" className="feature__item__img" />
                        <div className="feature__item__titles">
                              <h1>{cityImg[2].city}</h1>
                              <h2>{countByCity[2]} properties</h2>
                        </div>
                  </div>
            </div>
      )
}

export default Feature