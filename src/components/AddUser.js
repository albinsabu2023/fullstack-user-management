import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const [loading, isLoading] = useState(false);
  const [formData, setFormdata] = useState({
    username: "",
    password: "",
    email: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const res = axios.post(`${process.env.REACT_APP_API}/adduser`, formData);
      isLoading(true);
      console.log(res);
      setFormdata({
        email: "",
        password: "",
        username: "",
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
    isLoading(false);
  };
  return (
    <div
      className="bg-gray-200 items-center justify-center  flex flex-col h-screen "
      onSubmit={handleSubmit}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <h1 className="text-4xl text-green-400 font-semibold">adding..</h1>
        </div>
      ) : (
        <form
          action=""
          className="flex flex-col items-center justify-center  shadow-lg  bg-white m-5  p-3 h-90 "
        >
          <input
            type="text"
            placeholder="enter username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="p-3 outline-none bg-gray-200 rounded-md m-3 w-80"
          />
          <input
            type="text"
            placeholder="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="p-3 outline-none bg-gray-200 rounded-md  m-3 w-80"
          />
          <input
            type="email"
            placeholder="enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 outline-none bg-gray-200 rounded-md m-3  w-80"
          />
          <div className="flex ">
            <button
              className=" bg-blue-800 text-white py-3 px-8 rounded-md m-1"
              type="submit"
            >
              add
            </button>
            <button
              className=" bg-red-600 text-white py-3 px-8 rounded-md m-1"
              onClick={() => navigate("/")}
            >
              cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default AddUser;
