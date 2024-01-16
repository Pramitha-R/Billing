import { Link } from "react-router-dom"
import { isAuthenticated } from "../services/Auth"

export default function NavBar(props){
    return (<>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <a className="navbar-brand" href="#">JVLcode</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto"  >
                {!isAuthenticated()?<li className="nav-item"><a className="nav-link" href="/register" >Register</a></li> :null}
                {!isAuthenticated()?<li><a className="nav-link" href="/" >Login</a></li>:null}
                {isAuthenticated()?<li className="nav-item"><Link className="nav-link" to="/AdminDashboard">Dashboard</Link></li>:null}
                {isAuthenticated()?<li><a className="nav-link" onClick={props.LogoutUser} >Logout</a></li>:null}
            </ul>
        
            </div>
        </nav>
    </>)
}