import React, { useState } from "react";
import { useHistory } from "react-router";
import LoginHome from "./homeLogin";

function Login(){
    let history = useHistory();
    let [userPass , setUserPass ] = useState('');
    let [userEmail , setUserEmail ] = useState('');
    let detailsCre = {
        email : 'abdulsaboor5808@gmail.com',
        password : '123456'
    }
    
    function loginAcc(){
        if(userEmail === detailsCre.email && userPass === detailsCre.password){
            history.push('/homeLogin')

        }
    }
    return(
        <div>
           Email  <input type="text" onChange={(e)=>{
               setUserEmail(e.target.value)
           }} value={userEmail}  /><br /><br />
        Password <input type="password" onChange={(e)=>{
            setUserPass(e.target.value)
        }} value={userPass} /><br /><br />
        <button onClick={loginAcc}>login</button>
        </div>
    )
}

export default Login;