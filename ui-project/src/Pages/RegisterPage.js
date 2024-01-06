import { useState } from 'react';
import './RegisterPage.css'
import { RegisterAPI } from '../services/API';
import { Navigate, Link } from 'react-router-dom';
function RegisterPage(){
    
    const initialStateErrors={
        username:{required:false},
        firstname:{required:false},
        lastname:{required:false},
        address:{required:false},
        phone:{required:false},
        password:{required:false},
        confirm_Password:{required:false},
        custom_error:null
    }
    const [errors,setErrors]=useState(initialStateErrors)

    const[loading,setLoading]=useState(false);
    const [isAuthonticated,setIsauthonticated]=useState(false)

    const handleSubmit = (event) =>{
        // for Avoiding the loading when i click the register buton
        event.preventDefault();
        let error = initialStateErrors;
        let hasError=false
        if(inputs.username==""){
            error.username.required=true;
            hasError=true;
        }
        // console.log('1-----',inputs)
        if(inputs.firstname==""){
            error.firstname.required=true;
            hasError=true;
        }
        if(inputs.lastname==""){
            error.lastname.required=true;
            hasError=true;
        }
        if(inputs.address==""){
            error.address.required=true;
            hasError=true;
        }
        if(inputs.phone==""){
            error.phone.required=true;
            hasError=true;
        }
        if(inputs.password==""){
            error.password.required=true;
            hasError=true;
        }
        if(inputs.confirm_Password==""){
            error.confirm_Password.required=true;
            hasError=true;
        }
        // console.log('2-----',inputs)
        if(!hasError){
            setLoading(true)
            RegisterAPI(inputs).then((response)=>{
                if (response.data.MsgType=="success"){
                    setIsauthonticated(true)
                    console.log(response.data.MsgType);
                }
                
                else if(response.data.MsgType=="warning"){
                    setIsauthonticated(false);
                    // console.log(response.data.MsgType);
                    setErrors({...errors,custom_error:response.data.msg})
                    
                    // console.log("here------------");
                }
                else if(response.data.MsgType=="danger"){
                    setIsauthonticated(false);
                    // console.log(response.data.MsgType);
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
        firstname:"",
        lastname:"",
        address:"",
        phone:"",
        password:"",
        confirm_Password:""
    })

    const handleInputs = (event) =>{
        setInputs({...inputs,[event.target.name]:event.target.value})
        // console.log('3-----',inputs)
    }

    if (isAuthonticated) {
        return < Navigate to="/dashboard" />
    }

    return (
        <>
         <section className="register-block">
            <div className="container">
               <div className="row">
                  <div className="col register-sec">
                     <h2 className="text-center">Register Now</h2>
                     <form className="register-form" onSubmit={handleSubmit} action="" >
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="text-uppercase">Username</label>
                        <input type="text" className="form-control" onChange={handleInputs} name="username"   />
                        {errors.username.required?
                        (<span className="text-danger" >
                            Username is required.
                        </span>):null
                        }
                     </div>
                     <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="text-uppercase">Firstname</label>
                        <input type="text" className="form-control" onChange={handleInputs} name="firstname"   />
                        {errors.firstname.required?
                        (<span className="text-danger" >
                            Firstname is required.
                        </span>):null
                        }
                     </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="text-uppercase">Lastname</label>
          
                        <input type="text"  className="form-control" onChange={handleInputs} name="lastname"   />
                        {errors.lastname.required?
                        (<span className="text-danger" >
                            Lastname is required.
                        </span>):null
                        }
                     </div>
                     <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="text-uppercase">Address</label>
          
                        <input type="text"  className="form-control" onChange={handleInputs} name="address"   />
                        {errors.address.required?
                        (<span className="text-danger" >
                            Address is required.
                        </span>):null
                        }
                     </div>
                     <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="text-uppercase">Mobile No.</label>
                        <input type="text"  className="form-control" onChange={handleInputs} name="phone"   />
                        {errors.phone.required?
                        (<span className="text-danger" >
                            Phone is required.
                        </span>):null
                        }
                     </div>
                     <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
                        <input  className="form-control" type="password"  onChange={handleInputs} name="password"  />
                        {errors.password.required?
                        (<span className="text-danger" >
                            Password is required.
                        </span>):null
                        }
                     </div>
                     <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className="text-uppercase">Confirm Password</label>
                        <input  className="form-control" type="password"  onChange={handleInputs} name="confirm_Password"  />
                        {errors.confirm_Password.required?
                        (<span className="text-danger" >
                            Confirm password is required.
                        </span>):null
                        }
                     </div>
                     <div className="form-group">
                        <span className="text-danger" >
                            {/* <p>{errors.custom_error}</p> */}
                            {errors.custom_error?
                           (<p>{errors.custom_error}</p>):null
                           }
                        </span>
                        {loading?
                        <div  className="text-center">
                          <div className="spinner-border text-primary " role="status">
                            <span className="sr-only">Loading...</span>
                          </div>
                        </div>:null 
                        }
                        
          
                        <input type="submit" className="btn btn-login float-right" disabled={loading}  value="Register"/>
                     </div>
                     <div className="clearfix"></div>
                     <div className="form-group">
                       Already have account ? Please <Link to="/">Login</Link>
                     </div>
          
          
                     </form>          
                  </div>
               </div>
            </div>
          </section>
        
        </>
    );
}

export default RegisterPage