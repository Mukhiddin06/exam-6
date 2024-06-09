import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
    const [form, setForm] = useState({});
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { value, name } = event.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const { username, password } = form;
        if (username === "admin" && password === "123") {
            navigate("/main");
        } else {
            alert("404");
        }
    };

    return (
        <>
        <div className="container">
            <div className="card-wrapper">
            <div className="card">
                <div className="card-header">
                    <h1 className="card-title">Login</h1>
                </div>
                <div className="card-body">
                    <form id="submit" onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            name="username" 
                            onChange={handleChange} 
                            placeholder="username" 
                            className="card-user" 
                        />
                        <input 
                            type="text" 
                            name="password" 
                            onChange={handleChange} 
                            placeholder="password" 
                            className="card-password" 
                        />
                    </form>
                </div>
                <div className="card-foooter">
                    <button type="submit" form="submit">login</button>
                </div>
            </div>
            </div> 
        </div>
        </>
    );
}

export default Login;
