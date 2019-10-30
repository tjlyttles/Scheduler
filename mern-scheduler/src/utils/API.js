import axios from "axios";

export default {
  saveEmployee: function(employeeData) {
    return axios.post("http://localhost:5000/api/employees", employeeData);
  },
  getEmployees: function() {
    return axios.get("http://localhost:5000/api/employees");
  },
  deleteEmployee: function(id) {
    return axios.delete("http://localhost:5000/api/employees" + id);
  }
};
