import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="bg-gray-800 text-white p-4">
        <h1 className="text-xl font-serif uppercase font-bold">raja</h1>
      </div>
      <div className=" w-1/2 flex justify-between text-white p-4">
        <Link to="/" className="p-2 hover:text-gray-300 bg-slate-600">Home</Link>
        <Link to="/create" className="ml-4 p-2 hover:text-gray-300 bg-slate-600">Create</Link>
      </div>
    </div>
  )
}

export default Nav