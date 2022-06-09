import {React,useState } from "react";
import i18next from 'i18next';
import { useNavigate } from "react-router-dom";
import isEmpty from "lodash/isEmpty";
import InputField from "../elements/InputField";
import FormLogin from "./FormLogin";
import { api } from "../utils/ApiService";

const Register = () => {
    const lang = i18next.language;
    const navigate = useNavigate();
    const [msg, setMsg] = useState('')

    const getUser = async (e) => {
        e.preventDefault()
       if(!isEmpty(state)) {
            const data = await api.post('http://localhost:8081/api/auth/signup', 
            {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            state )
            if(data.status==201) {
                setMsg(data.message)
                setTimeout(() => {
                    navigate(`../${lang}/login`);
                },1500)
            } else {
                setMsg(data.message)
            }
        }
    }
 
    const [state, setState] = useState({
        name: '',
        username: '',
        email: '',
        password: ''
    });

    const handleChange = e => {
        e.preventDefault();
        setState({
            ...state, [e.target.name]: e.target.value
        })}
 
    return (
        <FormLogin titleText='Create an account' formText='Registration'>
            <InputField value={state.name} handleInput={handleChange}
            className="mt-4" text="Name" type='text' name='name' />

            <InputField value={state.username} handleInput={handleChange}
            className="mt-4" text="Surname" type='text' name='username' />

            <InputField value={state.email} handleInput={handleChange}
            className="mt-4" text="Email" type='email' name='email' />

            <InputField value={state.password} handleInput={handleChange}
            className="mt-4" text="Password" type='password' name='password' />
          
            <span className="text-xs text-red-400">{msg}</span>
            <div className="flex">
                <button 
                onClick= {getUser}
                className="w-full px-6 py-4 mt-8 text-2xl font-bold text-black bg-[#f1cf10] rounded-lg hover:bg-[#f1cf108f]">
                    Send
                </button>
            </div>
        </FormLogin>
    );
}

export default Register;