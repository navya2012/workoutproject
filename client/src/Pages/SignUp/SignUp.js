import React, { useState } from 'react'
import '../Login/LoginStyles.css'

const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(email, password)
    }
    return (
        <>
            <div className="main-form">
                <form onSubmit={handleSubmit}>
                    <h1>SignUp Form</h1>
                    <div className="field">
                        <label htmlFor="">Email:</label>
                        <input type="text" name='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className="field">
                        <label htmlFor="">Password:</label>
                        <input type="password" name='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}

export default SignUp