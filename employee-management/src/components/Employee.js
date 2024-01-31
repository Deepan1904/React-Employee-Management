import React from 'react'
import { useNavigate } from "react-router-dom";


const Employee = ({employee,deleteEmployee}) => {

  const navigate = useNavigate();

  const editEmployeeByID = (e,id) => {
    e.preventDefault();
    navigate(`/update/${id}`);

  };
  return (
    <tr>
    <td className="py-2 px-4 border-b text-center">{employee.fname}</td>
    <td className="py-2 px-4 border-b text-center">{employee.lname}</td>
    <td className="py-2 px-4 border-b text-center">{employee.email}</td>
    <td className="py-2 px-4 border-b text-center">
    <a
          onClick={(e,id) => editEmployeeByID(e,employee.email) }
          className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">
          Edit
        </a>
        <a
          onClick={(e,id) => deleteEmployee(e,employee.email)}
          className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer">
          Delete
        </a>
    </td>
</tr>
  )
}

export default Employee