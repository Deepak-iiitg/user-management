import { useState } from "react";
import './form.css';
function Form() {
    const [inputs, setInputs] = useState({
        name: '', email: '', password: '', image: ''
        , total_orders: ''
    });
    return (
        <form className="form">
            <div className="input">
                <span>Name</span>
                <input type='text' value={inputs.name || ''}
                    onChange={(e) => { setInputs({ ...inputs, name: e.target.value }) }}></input>
            </div>
            <div className="input">
                <span>Email</span>
                <input type='email' value={inputs.email || ''}
                    onChange={(e) => { setInputs({ ...inputs, email: e.target.value }) }}></input>
            </div>
            <div className="input">
                <span>Password</span>
                <input type='password' value={inputs.password || ''}
                    onChange={(e) => { setInputs({ ...inputs, password: e.target.value }) }}></input>
            </div>
            <div className="input">
                <span>Total Orders</span>
                <input type='text' value={inputs.total_orders || ''}
                    onChange={(e) => { setInputs({ ...inputs, total_orders: e.target.value }) }}></input>
            </div>
            <div className="input">
                <span>Image</span>
                <input type='text' value={inputs.image || ''}
                    onChange={(e) => { setInputs({ ...inputs, image: e.target.value }) }}></input>
            </div>
            <div className="input">
                <button className="btn-primary">Add</button>
            </div>
        </form>
    )

}
export default Form;