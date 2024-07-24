import React, { useState } from 'react'
import "./index.css";

const LoginForm = () => {

    const [formValues, setFormValues] = useState({
        uname : {value :"", error :""}, 
        password :{value :"", error:""}
    });

    const [errorMessage, setErrorMessage] = useState("");

    function handleChange(e)
    {
        let {name, value} = e.target;

        let newValues = {...formValues};

        newValues[name] = {
            value : value,
            error : !value ? "Required" :"",
        }
       
        setFormValues(newValues);
    }


    function handleSubmit()
    {
        let uname = formValues.uname.value;
        let password = formValues.password.value;

        if(!uname || !password )
        {
            setErrorMessage("Enter All Values");
            setTimeout(()=>{
                setErrorMessage("");
            },2500)
            return;
        }

        if(uname && password)
        {
            setErrorMessage("Login Success");
        }
        console.log(formValues);
    }

    return (
        <div className='container'>
           <form onSubmit={(e)=> e.preventDefault()}>
                <h1>Login Form</h1>
                <div className="input-box">
                    <input type="text" name='uname' placeholder="Username" onChange={handleChange} /> 
                    <div style={{textAlign:"center", color:"red"}}>{formValues.uname.error}</div>           
                </div>
                <div className="input-box">
                    <input type="password" name='password' placeholder="Password"  onChange={handleChange}/>
                    <div style={{textAlign:"center", color:"red"}}>{formValues.password.error}</div> 
                </div>
                <button className="btn" onClick={handleSubmit}>Submit</button>
            </form>
            <div className='message' style={{color: formValues.password.value && formValues.uname.value ?"green" :"red"}}>{errorMessage}</div>
        </div>
    )
}

export default LoginForm
