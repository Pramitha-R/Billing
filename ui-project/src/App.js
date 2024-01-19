import RegisterPage from "./Pages/RegisterPage";
import LoginPage from './Pages/LoginPage';
import Dashboard from './Pages/admin/Dashboard';
import EmployeeDetails from "./Pages/admin/EmployeeDetails";

import EmployeeDashboard from "./Pages/Employee/Dashboard";
import CustomerDashboard from "./Pages/Customer/Dashboard";
import { BrowserRouter ,Route,Routes } from "react-router-dom";



function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/AdminDashboard" element={<Dashboard />} />
        <Route path="/EmployeeDashboard" component={EmployeeDashboard} />
        <Route path="/CustomerDashboard" element={<CustomerDashboard />} />

        <Route path="/employeeDetails" element={< EmployeeDetails/>}/>
        <Route path="/" element={<LoginPage />} />
        
      </Routes>
    </BrowserRouter>
        
  </>
  );
}

export default App;
