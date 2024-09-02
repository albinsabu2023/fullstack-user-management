import React, { useEffect, useState } from "react";
import User from "./User";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Body() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API}/users`);
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/adduser");
  };

  return (
    <div className="bg-gray-300 h-screen overflow-y-scroll">
      <button
        onClick={handleClick}
        className="bg-blue-900 txt-3xl text-white rounded-md p-3 hover:bg-blue-700 m-4 "
      >
        Add User
      </button>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}

export default Body;
