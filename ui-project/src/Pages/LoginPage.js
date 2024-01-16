import { useState } from 'react';
import './LoginPage.css'
import { LoginApi } from '../services/API';
import { storeUserData } from '../services/storage';
import { Navigate , Link, useAsyncError,useNavigate} from 'react-router-dom';
import { isAuthenticated } from '../services/Auth';
import NavBar from '../components/NavBar';

function LoginPage(){
    const initialStateErrors={
        username:{required:false},
        password:{required:false},
        custom_error:null
    }
    const [errors,setErrors]=useState(initialStateErrors)

    const[loading,setLoading]=useState(false);
    // const [isAuthonticated,setIsauthonticated]=useState(false)
    const [userdetails,setUserDetails]=useState("");
    const handleSubmit = (event) =>{
        // for Avoiding the loading when i click the register buton
        event.preventDefault();
        let error = initialStateErrors;
        let hasError=false
        if(inputs.username==""){
            error.username.required=true;
            hasError=true;
        }
        if(inputs.password==""){
            error.password.required=true;
            hasError=true;
        }
        if(!hasError){
            setLoading(true)
            LoginApi(inputs).then((response)=>{
                // console.log('-----test',response);
                if (response.data.MsgType=="success"){
                    setUserDetails(response.data)
                    console.log(response.data,'----response data')
                    storeUserData(response.data);
                }
                
                else if(response.data.MsgType=="warning"){
                    // setIsauthonticated(false);
                    setErrors({...errors,custom_error:response.data.msg})
                }
                else if(response.data.MsgType=="danger"){

                    // setIsauthonticated(false);
                    setErrors({...errors,custom_error:response.data.msg})
                    
                }
            }).catch((err)=>{
                console.log(err);
            }).finally(()=>{
                setLoading(false);
            })
        }
        setErrors({...error})
        // console.log(inputs);
    }

    const [inputs,setInputs] =useState({
        username:"",
        password:""
    })

    const handleInputs = (event) =>{
        setInputs({...inputs,[event.target.name]:event.target.value})
    }
    const navigate = useNavigate();
    if (isAuthenticated()) {
        // if userdetails.
        if (userdetails.role_id==1){
            return < Navigate to="/AdminDashboard" />
        }
        else if(userdetails.role_id==2){
            return navigate("/EmployeeDashboard");
        }
        else if(userdetails.role_id==3){
            return navigate("/CustomerDashboard");
        }
        return < Navigate to="/AdminDashboard" />
    }
    return(
    <>
        <NavBar />
        <section className="login-block">
            <div className="container">
                <div className="row ">
                    <div className="col login-sec">
                        <h2 className="text-center">Login Now</h2>
                        <form className="login-form" onSubmit={handleSubmit} action="">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1" className="text-uppercase">Username</label>
                            <input type="username"  className="form-control" name="username"  id="" onChange={handleInputs} placeholder="Username"  />
                            {errors.username.required?
                            (<span className="text-danger" >
                                Username is required.
                            </span>):null
                            }
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
                            <input  className="form-control" type="password"  name="password" placeholder="password" onChange={handleInputs} id="" />
                            {errors.password.required?
                            (<span className="text-danger" >
                                Password is required.
                            </span>):null
                            }
                        </div>
                        <div className="form-group">
                            {loading?
                            <div  className="text-center">
                                <div className="spinner-border text-primary " role="status">
                                <span className="sr-only">Loading...</span>
                                </div>
                            </div>:null
                            }
                            {errors.custom_error?
                            <span className="text-danger" >
                            <p>{errors.custom_error}</p>
                            </span>:null
                            }
                            <input  type="submit" className="btn btn-login float-right" disabled={loading} value="Login"/>
                        </div>
                        <div className="clearfix"></div>
                        <div className="form-group">
                        Create new account ? Please <Link  to="/register">Register</Link>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    
    </>
    );
}

export default LoginPage