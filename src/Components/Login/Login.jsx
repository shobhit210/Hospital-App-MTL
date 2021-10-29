import React, {useState} from 'react'
import './Login.css'

function Login() {

    const [uname, setUname] = useState('')
    const [pswd, setPswd] = useState('')

    return (
        <div className="login-body">
            <h1 className="login-head">Hospital Management Application</h1>
            <div className="login-pallette">
                <h4 className="inner-login-head">Admin Login</h4>
                <form>
                    <div className="container d-flex flex-column justify-content-center">
                        <input type="text" 
                        placeholder="Enter Username" 
                        className="form-control mt-3" 
                        value={uname} 
                        onChange={(e) => setUname(e.target.value)} />

                        <input type="password" 
                        placeholder="Enter Password"
                        className="form-control mt-3" 
                        value={pswd} 
                        onChange={(e) => setPswd(e.target.value)} />

                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary mt-4">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
