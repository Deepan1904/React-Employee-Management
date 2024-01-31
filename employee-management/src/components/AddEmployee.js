import React, { useState } from 'react';
import EmployeeService from '../service/EmployeeService';
import { useNavigate } from "react-router-dom";

    const AddEmployee = () => {
      const [employee, addEmployee ] = useState({
        empId:"",
        fname:"",
        lname:"",
        email:""
    });

    const navigate = useNavigate();

   const [showPopup, setShowPopup] = useState(false);

   const  handleChange= (e) =>{
      const val = e.target.value;
      addEmployee({ ...employee ,[e.target.name]:val});
      console.log(employee );

   }
   const saveEmployee = (e) => {
    e.preventDefault();
    if( employee.email !== "" && employee.fname !== "" && employee.lname !== "")
    {
        EmployeeService.saveEmployee(employee).then(
            (response)=>{
                console.log(response);
                alert("Saved Successfully");
                navigate("/list")
            }).catch((error)=>{
                console.log(error);
            })
    }
    else{
        setShowPopup(true);
    }
  };

  const reset = (e) => {
    e.preventDefault()
    addEmployee({
        fname:"",
        lname:"",
        email:""
    })
  }

  return (
   <>
    <button type="button" 
                onClick={() => navigate("/")}
                className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Back
    </button>

    <div className="flex max-w-md mx-auto shadow  border-b mt-10">
        <div className="px-8 py-8">
           <div className="font-thin 2-xl tracking-wider">
                <h1 className="flex container items-center justify-center">Add Employee</h1>
           </div>
           <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-400 text-sm font-normal'>First Name</label>
                <input 
                type="text" 
                name='fname'
                value={employee.fname}
                onChange={(e)=> handleChange(e)}
                className='h-10 w-96 border mt-2 px-2 py-2'></input>
           </div>
           <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-400 text-sm font-normal'>Last Name</label>
                <input 
                type="text" 
                name='lname'
                value={employee.lname}
                onChange={(e)=> handleChange(e)}
                className='h-10 w-96 border mt-2 px-2 py-2'></input>
           </div>
           <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-400 text-sm font-normal'>Email</label>
                <input 
                type="email"
                name='email'
                value={employee.email}
                onChange={(e)=> handleChange(e)}
                className='h-10 w-96 border mt-2 px-2 py-2'></input>
           </div>
           
           <div className="items-center justify-center h-14 w-full my-4">
                <button 
                type="button" 
                onClick={saveEmployee}
                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-2">Save
                </button>
                <button 
                type="button" 
                onClick={reset}
                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mx-52">Clear</button>
           </div>
        </div>
        
        <div>
            {showPopup && (
           <div className="fixed inset-0 flex items-center justify-center">
             <div className="bg-white border shadow-md p-4 rounded-lg">
                <p className="text-red-500">Field should not be empty !!!</p>
                <button
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                    onClick={() => setShowPopup(false)}
                >
                    Close
                </button>
            </div>
            </div>
            )}
        </div>
    </div>
    </>
  )
}

export default AddEmployee