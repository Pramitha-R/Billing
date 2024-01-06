import RegisterPage from "./Pages/RegisterPage";
import LoginPage from './Pages/LoginPage';
import { BrowserRouter ,Route,Routes } from "react-router-dom";
function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<h1>hello dashboard</h1>} />
        <Route path="/" element={<LoginPage />} />
        
      </Routes>
    </BrowserRouter>
        
  </>
  );
}

export default App;
