import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../redux/actions/authAction";
import { useNavigate } from "react-router-dom";
import { userInputs } from "../formSource";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import axios from "axios";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const initialState = {
      username: "",
      email: '',
      phoneNumber: "",
      password: '',
      city: "",
      country: "",
      isAdmin: false
};

const NewUser = () => {
      const [file, setFile] = useState(null)
      const [form, setForm] = useState(initialState);
      console.log(form.isAdmin)
      const dispatch = useDispatch();
      const navigate = useNavigate();

      const handleChange = (e) => {
            setForm({ ...form, [e.target.name]: e.target.value });
      }

      const handleClick = async (e) => {
            e.preventDefault();
            if (file !== null) {
                  const data = new FormData();
                  data.append("file", file);
                  data.append("upload_preset", "itikml7r");
                  const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dqzcvunv5/image/upload", data);
                  const { url } = uploadRes.data;
                  const newUser = { ...form, img: url };
                  dispatch(signUp(newUser, navigate));
            } else {
                  const newUser = { ...form, img: "https://i.ibb.co/MBtjqXQ/no-avatar.gif" };
                  dispatch(signUp(newUser, navigate));
            }
      };

      return (
            <div className="new">
                  <Sidebar />
                  <div className="new__container">
                        <Navbar />
                        <div className="top">
                              <h1>Add New User</h1>
                        </div>
                        <div className="bottom">
                              <div className="left">
                                    <img alt="" src={file
                                          ? URL.createObjectURL(file)
                                          : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                    } />
                              </div>
                              <div className="right">
                                    <form>
                                          <div className="form__input">
                                                <label htmlFor="file">
                                                      Image: <DriveFolderUploadOutlinedIcon className="icon" />
                                                </label>
                                                <input
                                                      type="file"
                                                      id="file"
                                                      onChange={(e) => setFile(e.target.files[0])}
                                                      style={{ display: "none" }}
                                                />
                                          </div>{userInputs.map((input) => (
                                                <div className="form__input" key={input.id}>
                                                      <label>{input.label}</label>
                                                      <input onChange={handleChange} type={input.type} placeholder={input.placeholder} name={input.name} />
                                                </div>
                                          ))}
                                          <div className="form__input">
                                                <label>Admin</label>
                                                <select name="isAdmin" onChange={handleChange}>
                                                      <option value={false}>No</option>
                                                      <option value={true}>Yes</option>
                                                </select>
                                          </div>
                                          <button onClick={handleClick}>Create User</button>
                                    </form>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default NewUser
