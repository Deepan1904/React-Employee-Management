import axios from "axios";

const URL = "http://localhost:8080/api/";

// const RENDER_URL = "https://employee-management-service-d4ne.onrender.com/api/"
const RENDER_URL = "https://employeemanagementservice-7gua.onrender.com/api/"
class EmployeeService {
    
    saveEmployee(employee)
    {
        return axios.post(RENDER_URL+"save",employee);
    }

    getAllEmployee(employee)
    {
        return axios.get(RENDER_URL+"getAll",employee);
    }

    deleteEmployeeByID(id){
        return axios.delete(RENDER_URL+"deleteID/"+id);
    }

    getEmployeeByID(id){
        return axios.get(RENDER_URL+"getbyId/"+id);
    }

    updateEmployeeByID(employee){
        return axios.put(RENDER_URL+"update",employee);
    }
}
export default new EmployeeService();