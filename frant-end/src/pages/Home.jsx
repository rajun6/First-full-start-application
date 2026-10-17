import React from "react";
import Nav from "../components/Nav";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [nots, setnots] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/nots")
      .then((res) => {
        setnots(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Nav />
      {
        nots.map((not) => (
          <div key={not._id} className="w-full h-40 bg-gray-200 rounded-lg p-4 mb-4">
            <h1 className="text-2xl font-bold">{not.title}</h1>
            <p className="text-gray-600">{not.description}</p>
          </div>
        ))
      }
    </>
  );
};

export default Home;
