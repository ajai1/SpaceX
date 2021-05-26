import React from 'react'

import "./Login.css"

function Login() {
    return (
        <div className="login_page_container">
            <div className="login_modal">
                <label>-- User --</label>
                <input className="login_input" type="text"/>
                <label>-- Password --</label>
                <input className="login_input" type="password"/>
                <button className="login_btn">Login</button>
            </div>
        </div>
    )
}

export default Login
