import React from 'react'
import './Auth.css'

function SignUp() {
    return (
        <div className='signup'>
            <div className="signup__container">
                <form className='form_auth'>
                    <div className='signup_names'>
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" name="firstname" id="firstname" />
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" name="lastname" id="lastname" />
                    </div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" />
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" />
                    <label htmlFor="conformPassword">Conform Password:</label>
                    <input type="password" name="conformPassword" id="conformPassword" />
                    <div>

                    <input type="checkbox" name="agree" id="agree"/>
                    <span>I agree on the polices</span>
                    </div>
                    <button type="submit" className='signup_btn'>Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp
