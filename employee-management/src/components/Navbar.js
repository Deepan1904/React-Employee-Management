import React from 'react'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-800">
        <div className="h-16 flex items-center ">
        <a onClick={() => navigate("/")} className="text-white font-bold hover:text-sky-400">Employee Management</a>
        </div>
    </div>
  )
}

export default Navbar