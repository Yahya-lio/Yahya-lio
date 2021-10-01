import React,{useEffect,useState} from 'react'
import './Auth.css'
import {useSelector,useDispatch} from 'react-redux'

function SignIn() {

    const dispatch = useDispatch()
    const token = useSelector(state => state.authSlice.token)
    console.log(token)
    return (
        <div className='signin'>
            <div className="signIn__container">
                <form className='form_auth'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" />
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" />
                    <div>
                        <input type="checkbox" name="agree" id="agree"/>
                        <span>I agree on the polices</span>
                    </div>
                    <button type="submit" className='signin_btn'>Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default SignIn
