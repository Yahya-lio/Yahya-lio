import React, { useState } from 'react'
import './Auth.css'
import groupImage from '../../assets/imagegroup.png'
import SignIn from './SignIn'
import SignUp from './SignUp'

function Auth() {
    const [open,setOpen] = useState('signin')
    return (
        <div className='auth'>
            <div className="auth_container">
                <div className="auth__img">
                    <img src={groupImage} alt="" />
                </div>
                <div className="auth__form">
                    <h1>This is the best place to share your Story</h1>
                    <div className="auth_form_container">
                        <div className="options_btn">
                            <button className={ open === 'signin' ?"navegate_auth auth_navegate_color": 'navegate_auth'} onClick={()=> setOpen('signin')}>Sign In</button>
                            <button className={open === 'signup' ?"navegate_auth auth_navegate_color": 'navegate_auth'}
                                onClick={()=> setOpen('signup')}
                            >Sign Up</button>
                        </div>
                        {open === 'signin' ? (<SignIn />) : (<SignUp />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth
