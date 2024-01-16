export const storeUserData=(data)=>{
    // console.log(data,'----- store user details')
    localStorage.setItem('userdetails',JSON.stringify({
        'username': data.username,
        'fname': data.firstname,
        'lname': data.lastname,
        'address': data.address,
        'phone': data.phone
      }));
    }
export const getUserData=()=>{
    return (JSON.parse(localStorage.getItem('userdetails')));
}

export const RemoveUserData = () => {
    return localStorage.removeItem('userdetails')
}