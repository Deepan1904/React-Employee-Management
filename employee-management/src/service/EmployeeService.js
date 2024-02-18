import axios from "axios";

const URL = "http://localhost:8080/api/";

// const RENDER_URL = "https://employee-management-service-d4ne.onrender.com/api/"
//const RENDER_URL = "https://employeemanagementservice-7gua.onrender.com/api/";

const koyeb_URL = "https://employee-management-o-ones.koyeb.app/api/";

class EmployeeService {
    
    saveEmployee(employee)
    {
        return axios.post(koyeb_URL+"save",employee);
    }

    getAllEmployee(employee)
    {
        return axios.get(koyeb_URL+"getAll",employee);
    }

    deleteEmployeeByID(id){
        return axios.delete(koyeb_URL+"deleteID/"+id);
    }

    getEmployeeByID(id){
        return axios.get(koyeb_URL+"getbyId/"+id);
    }

    updateEmployeeByID(employee){
        return axios.put(koyeb_URL+"update",employee);
    }
}
export default new EmployeeService();
