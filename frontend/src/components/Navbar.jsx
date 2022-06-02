import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { LOGOUT } from '../redux/constantsType/actionType';

const Navbar = () => {
      const { user } = useSelector((state) => state.authReducer);
      console.log(user)
      const dispatch = useDispatch();
      return (
            <div className='navbar'>
                  <div className="navbar__container">
                        <Link to="/">
                              <span>Luxbooking</span>
                        </Link>
                        {user
                              ? <div className="navbar__container__items">
                                    <div className="navbar__container__items__button">Hi {user?.username}</div>
                                    {user?.isAdmin &&
                                          <Link to="/admin">
                                                <div className="navbar__container__items__button">Admin Panel</div>
                                          </Link>
                                    }
                                    <div className="navbar__container__items__button" onClick={() => dispatch({ type: LOGOUT })}>Logout</div>
                              </div>
                              : <Link to="/auth">
                                    <div className="navbar__container__items">
                                          <div className="navbar__container__items__button">Register</div>
                                          <div className="navbar__container__items__button">Login</div>
                                    </div>
                              </Link>}
                  </div>
            </div>
      )
}

export default Navbar