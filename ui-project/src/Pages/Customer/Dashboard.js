
import { useState,useEffect } from "react";
import { Link ,useLocation, useNavigate ,Navigate } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { getUserData } from "../../services/storage";
import { Logout,isAuthenticated } from "../../services/Auth";

export default function CustomerDashboard(){
    // const location = useLocation();
    const userdetails = getUserData()
    const navigate = useNavigate();  

    const LogoutUser = () => {
        Logout();
        return navigate("/");
    } 
    if (!isAuthenticated()) {
        return < Navigate to="/" />
    }
    return(<>
        <NavBar LogoutUser={LogoutUser} />
        <main role="main" className="container mt-5">
            <div className="container">
              <div className="text-center mt-5">
                <h3>customer dashboard  page</h3>
                {userdetails.username?
                (<div>
                    <p className="text-bold " >{userdetails.username}</p>
                    <p className="text-bold " >{userdetails.address}</p>
                    <p className="text-bold " >{userdetails.fname}</p>
                    <p className="text-bold " >{userdetails.lname}</p>
                    <p className="text-bold " >{userdetails.phone}</p>
                </div>) : <p>Loading...</p>
                }
                </div>
            </div>
        </main>
    </>);
};
