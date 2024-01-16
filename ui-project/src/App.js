import RegisterPage from "./Pages/RegisterPage";
import LoginPage from './Pages/LoginPage';
import Dashboard from './Pages/admin/Dashboard';
import EmployeeDashboard from "./Pages/Employee/Dashboard";
import CustomerDashboard from "./Pages/Customer/Dashboard";
import { BrowserRouter ,Route,Routes } from "react-router-dom";
function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/AdminDashboard" element={<Dashboard />} />
        <Route path="/EmployeeDashboard" element={<EmployeeDashboard />} />
        <Route path="/CustomerDashboard" element={<CustomerDashboard />} />
        <Route path="/" element={<LoginPage />} />
        
      </Routes>
    </BrowserRouter>
        
  </>
  );
}

export default App;
