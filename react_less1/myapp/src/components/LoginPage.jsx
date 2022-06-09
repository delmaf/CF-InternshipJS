import InputField from "../elements/InputField";
import FormLogin from "./FormLogin";
import React from "react";
import { Link } from "react-router-dom";
import i18n from '../i18n/i18n'
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { useDispatch } from "react-redux";
import { userLoginAction } from "../Redux/actions/userLogin.action";

const Login = () => {

  const lang = i18n.language;
  const dispatch = useDispatch()
  const navigate = useNavigate()

    let [formData, setFormData] = useState({
        email: '', // required
        password: '' // required
    })

    function handleSubmit(e) {

        e.preventDefault()
         dispatch(userLoginAction('http://localhost:8081/api/auth/signin',
       {
        "Content-Type": "application/json",
        Accept: "application/json",
        },
        formData
        ,navigate
        ))
}
    
        function handleChange(e) {
            setFormData({...formData, [e.target.name] : e.target.value})
        }
 
    return (
        <FormLogin titleText='Login' formText='Returning Customers'>
            <InputField className="mt-4" value={formData.email} handleInput={e => handleChange(e)}
             text="Email" type='email' name='email' />

            <InputField className="mt-4" value={formData.password} handleInput={e => handleChange(e)}
             text="Password" type='password' name='password' />

            <div className="flex">
                <button onClick={e => handleSubmit(e)}
                className="w-full px-6 py-4 mt-8 text-2xl font-bold text-black bg-[#f1cf10] rounded-lg hover:bg-[#f1cf108f]">
                    Login
                </button>
                
            </div>
            <div className="grid grid-cols-3 text-white mt-8">
                <div className="py-2"><hr/></div>
                <div className="text-xs px-[20%]"><h3>Create an account?</h3></div>
                <div className="py-2"><hr/></div>
            </div>
            <div className="flex">
                <Link 
                className="w-full text-center px-6 py-4 mt-8 text-2xl font-bold text-black bg-[#ffffff] rounded-lg hover:bg-[#ffffff8f]" 
                to={`/${lang}/register`}>
                  Register
                  </Link>
                  </div>
        </FormLogin>
    );
}

export default Login;
