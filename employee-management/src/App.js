import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Navbar from './components/Navbar';
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';
import Welcome from './components/Welcome';
import UpdateEmployee from './components/UpdateEmployee';

function App() {
  return (
    <>
      <BrowserRouter>
           <Navbar></Navbar>
           <Routes>
              <Route index element={ <Welcome/> } />
              <Route path="/" element={ <Welcome/> } />
              <Route path="/addEmployee" element={ <AddEmployee/> } />
              <Route path="/list" element={ <EmployeeList/> } />
              <Route path="/update/:id" element={ <UpdateEmployee/> } />
           </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
