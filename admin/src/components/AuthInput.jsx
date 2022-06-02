import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const AuthInput = ({ name, type, handleChange, handleShowPassword, placeholder, checkPassword }) => {
      return (
            <div className="auth__input">
                  <input
                        name={name}
                        type={type}
                        onChange={handleChange}
                        placeholder={placeholder}
                        onKeyUp={checkPassword}
                  />
                  {name === 'password' && (
                        <div onClick={handleShowPassword} className="auth__icon">
                              {type === 'password'
                                    ? <FontAwesomeIcon icon={faEye} />
                                    : <FontAwesomeIcon icon={faEyeSlash} />}
                        </div>
                  )}
            </div>
      )
}

export default AuthInput