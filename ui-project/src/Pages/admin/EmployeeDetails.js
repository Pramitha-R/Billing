import { useState,useEffect } from "react";
import { Link ,useLocation, useNavigate ,Navigate } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { getUserData } from "../../services/storage";
import { Logout,isAuthenticated } from "../../services/Auth";
export default function EmployeeDetails(){
    const userdetails = getUserData()
    const navigate = useNavigate();  

    const location = useLocation();
    console.log(location.state)
    const { details } = location.state || {};
    // const details = location.state.empdetails;
    // const details=props.state;
    // const {de}= details.empdetails
    console.log(details,'-----details-----hereprint')

    const LogoutUser = () => {
        Logout();
        return navigate("/");
    } 
    const HandleView = (UserId) => {
        console.log("View page----",UserId);
    };
    const HandleEdit = (UserId) => {
        console.log("Edit page----",UserId);
    };
    const HandleDelete = (UserId) => {
        console.log("Delete page----",UserId);
    };


    const renderedUsers = details.map((user) => {
        return (           
          <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.username}</td>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.address}</td>
              <td>
                <form>
                    <a href="" onClick={() => HandleView(user.id)}>View</a>
                    <a href="" onClick={() => HandleEdit(user.id)}>Edit</a>                    
                    <a href="" onClick={() => HandleDelete(user.id)}>Delete</a>
                </form>
              </td>
            </tr>          
        );
      });
    if (!isAuthenticated()) {
        return < Navigate to="/" />
    }
    return(<>
        <NavBar LogoutUser={LogoutUser} />
        <h2>Employee Details Page</h2>
        <table class="table caption-top bg-white rounded">
          <caption className="text-white fs-4">Recent Orders</caption>
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Username</th>
              <th scope="col">Firstname</th>
              <th scope="col">Lastname</th>
              <th scope="col">Address</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {renderedUsers}
          </tbody>
        </table>
        
        {/* <p>Details: {data.data[0].username}</p> */}
        
    </>);
};
