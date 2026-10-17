import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
const Create = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      title: formData.get("title"),
      description: formData.get("description"),
    };
    fetch("http://localhost:3000/nots", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Optionally, redirect or show a success message
        if (data) {
          alert("note created successfully!");
          navigate("/"); // Redirect to notifications page
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <>
      <Nav />
      <form
        onSubmit={handleSubmit}
        className="bg-slate-100 w-full max-w-md mx-auto p-4 rounded-lg shadow"
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="block w-full p-2 border border-gray-300 rounded mb-4"
        />
        <textarea
          name="description"
          placeholder="Description"
          className="block w-full p-2 border border-gray-300 rounded mb-4"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          create note
        </button>
      </form>
    </>
  );
};

export default Create;
