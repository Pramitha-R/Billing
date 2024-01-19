import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react';

import { isAuthenticated } from "../services/Auth"
import { getUserData } from "../services/storage";
import { Emp_Det_Api } from "../services/API";



export default function NavBar(props) {
    const getroleid = getUserData();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [empdetails, setEmpdetails] = useState([""]);

    const EmployeeDetails = (event) => {
        // event.preventDefault();
        
        setLoading(true)
        Emp_Det_Api().then((response) => {
            setEmpdetails(response.data)
            navigate("/employeeDetails", {
                state: { details: response.data },
              });
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            setLoading(false);
        })
    };
    // console.log(empdetails[0].username,'----empdetails----');


    return (<>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <a className="navbar-brand" href="#">JVLcode</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto"  >
                    {!isAuthenticated() ? <li className="nav-item"><a className="nav-link" href="/register" >Register</a></li> : null}
                    {!isAuthenticated() ? <li><a className="nav-link" href="/" >Login</a></li> : null}
                    {isAuthenticated() ?
                        (getroleid.role_id == 1 ?
                            (<><li className="nav-item"><Link className="nav-link" to="/AdminDashboard">Dashboard</Link></li>
                                <li className="nav-item"><Link  className="nav-link" onClick={EmployeeDetails}>EmployeeDetails-a</Link ></li>

                                {/* <li className="nav-item"><Link to={{ pathname: '/employeeDetails' }} className="nav-link" onChange={EmployeeDetails}>EmployeeDetails</Link></li>*/}
                            </>)
                            : (getroleid.role_id == 2 ? <li className="nav-item"><Link className="nav-link" to="/EmployeeDashboard" >Dashboard</Link></li>
                                : (getroleid.role_id == 3 ? <li className="nav-item"><Link className="nav-link" to="/CustomerDashboard">Dashboard</Link></li>
                                    : null
                                )))
                        : null}
                    {isAuthenticated() ? <li><a className="nav-link" onClick={props.LogoutUser} >Logout</a></li> : null}
                </ul>
            </div>
        </nav>




    </>)
}