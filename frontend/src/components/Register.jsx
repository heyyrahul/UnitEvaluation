import { useState } from "react";
import axios from 'axios'; 

const Register = ({onRegister }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, SetError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/users/register', { username, email, password });
            const { token } = res.data;
            localStorage.setItem('token', token);
            onRegister();

        } catch (err) {
            SetError('Registration failed');
        }
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label > Username:</label>
                    <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)} }/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                    <label> Password</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <button type="submit">Register</button>
                {err && <div>{error}</div>}

            </form>
       </div>
    )
}

export default Register;