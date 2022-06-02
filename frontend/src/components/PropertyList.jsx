import React, { useEffect } from 'react';
import { typeImg } from "../constants/data";
import { useDispatch, useSelector } from "react-redux"
import { showHotelsCountByType } from '../redux/actions/hotelsAction';

const PropertyList = () => {
      const { countByType } = useSelector((state) => state.hotelsReducer);
      const dispatch = useDispatch();

      useEffect(() => {
            dispatch(showHotelsCountByType())
      }, [dispatch])

      return (
            <div className="pList">
                  {countByType?.map((item, index) => (
                        <div className="pList__item" key={index}>
                              <img src={typeImg[index].src} alt="cityType" className="pList__item__img" />
                              <div className="pList__item__titles">
                                    <h1>{item.type}</h1>
                                    <h2><b>{item.count}</b> {item.type} available</h2>
                              </div>
                        </div>
                  ))
                  }
            </div>
      );
};

export default PropertyList