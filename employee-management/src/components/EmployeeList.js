import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import EmployeeService from '../service/EmployeeService';
import Employee from './Employee';

const EmployeeList = () => {
  const navigate = useNavigate();

  const [loading,setLoading] = useState(true);
  const [employees,setEmployee] = useState(null);

  useEffect(() => {
    const fetchData = async () =>{
        setLoading(true);
        try{
            const response = await EmployeeService.getAllEmployee();
            setEmployee(response.data);

        } catch(error){
            console.log(error);
        }
        setLoading(false);
    };
    fetchData();
  }, []);

  const deleteEmployee = (e,id) => {
    e.preventDefault();

    EmployeeService.deleteEmployeeByID(id).then((res) => {
        if(employees)
        {
            setEmployee((prevElement) => {
                fetchData();
                return prevElement.filter((employee) => employee.id !== id);
            });
        }
    });
// After delete have to update the page
    const fetchData = async () =>{
        setLoading(true);
        try{
            const response = await EmployeeService.getAllEmployee();
            setEmployee(response.data);

        } catch(error){
            console.log(error);
        }
        setLoading(false);
    };
  };
  
  return (
    <div className='container mx-auto my-8'>
        <div className='h12'>
        <button type="button" 
                onClick={() => navigate("/addEmployee")}
                className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add Employee
        </button>
        <button type="button" 
                onClick={() => navigate("/")}
                className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Back
        </button>
        </div>
        <div className='flex shadow border-b'>
        <table className="min-w-full bg-white border border-gray-300">
            <thead>
                <tr>
                    <th className="py-2 px-4 border-b">First Name</th>
                    <th className="py-2 px-4 border-b">Last Name</th>
                    <th className="py-2 px-4 border-b">Email</th>
                    <th className="py-2 px-4 border-b">Action</th>
                </tr>
            </thead>
            {!loading && (
            <tbody>
                {employees.map((employee)=>(
                    <Employee employee={employee} key={employee.email}
                    deleteEmployee={deleteEmployee}></Employee>
                 ))}
            </tbody>
            )}
        </table>
        </div>
    </div>
  )
}

export default EmployeeList