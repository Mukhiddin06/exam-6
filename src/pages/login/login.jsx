import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
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
                        <TextField sx={{marginBottom:'10px', width:'400px'}} type="text" name="username" onChange={handleChange} className="card-user"  id="outlined-basic" label="Username" variant="outlined" />
                        <TextField sx={{width:'400px'}} type="text" name="password"  onChange={handleChange} className="card-password" id="outlined-basic" label="Password" variant="outlined" />
                    </form>
                </div>
                <div className="card-foooter">
                <Button type="submit" form="submit" variant="contained">login</Button>
                </div>
            </div>
            </div> 
        </div>
        </>
    );
}

export default Login;
