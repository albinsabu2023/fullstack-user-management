import axios from "axios";
import React, { useState } from "react";

function User({ user }) {
  const [isActive, setIsActive] = useState(false);

  const [newUser, setNewUser] = useState({
    username: user.username,
    email: user.email,
    password: user.password,
  });

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_API}/delete/${id}`
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  const handleEdit = async (id) => {
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_API}/edit/${user.id}`,
        newUser
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  return (
    <div className="">
      <div
        className={`overflow-y-auto overflow-x-hidden fixed top-0 right-50 left-50 z-50 flex flex-col justify-center items-center  md:inset-0 h-[calc(100%-1rem)] h-200 w-200 bg-black bg-opacity-85  ${
          isActive ? "block" : "hidden"
        }`}
      >
        <form
          action=""
          className="flex flex-col text-black w-300 "
          onSubmit={handleEdit}
        >
          <input
            type="username"
            name="username"
            className=" p-3 outline-none bg-gray-200 rounded-md m-3 w-80"
            placeholder="username"
            value={newUser.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            className=" p-3 outline-none bg-gray-200 rounded-md m-3 w-80"
            placeholder="password"
            value={newUser.password}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            required={true}
            className=" p-3 outline-none bg-gray-200 rounded-md m-3 w-80"
            placeholder="email"
            value={newUser.email}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="text-white text-2xl  bg-black p-1 rounded-md m-2"
          >
            save
          </button>
          <button
            onClick={() => setIsActive(false)}
            className="text-white   bg-black p-1 rounded-md  m-2"
          >
            close
          </button>
        </form>
      </div>

      <div className=" p-2">
        <div className="flex justify-between p-4 bg-white">
          <h1>{user.username}</h1>
          <h1>{user.email}</h1>
          <div>
            <button
              onClick={() => setIsActive(!isActive)}
              className="bg-green-300 py-2 px-7"
            >
              edit
            </button>
            <button
              onClick={() => handleDelete(user.id)}
              className="bg-red-300 py-2 px-7"
            >
              delete
            </button>
          </div>
        </div>
      </div>
      {/* )} */}
    </div>
  );
}

export default User;
