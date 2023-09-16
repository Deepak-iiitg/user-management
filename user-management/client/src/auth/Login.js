import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router";
import './form.css';
function Login(){
    const navigate = useNavigate();
    const [inputs,setInputs] = useState({email:'',password:''});
    const handleInput = async(e)=>{
        e.preventDefault();
        let result = await axios.post('http://localhost:8080/login',inputs);
        result = result.data;
        if(result.token){
            alert(result.message);
            navigate('/get');
        } else{
            alert(result.message);
        }
    }
    return(
        <form className="form" onSubmit={handleInput}>
            <div className="input">
                <input type='email' value={inputs.email || ''}
                onChange={(e)=>{
                    setInputs({...inputs,email:e.target.value})
                }}
                placeholder="enter your email"
                />
                
            </div>
            <div className="input">
                <input type='password' value={inputs.password || ''}
                onChange={(e)=>{
                    setInputs({...inputs,password:e.target.value})
                }}
                placeholder="enter your password"
                />
                
            </div>
            <div className="input">
               <button type="submit">Login</button>
            </div>
        </form>
    )
}
export default Login;