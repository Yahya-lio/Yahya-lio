import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.svg'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer_container">
                <div className="footer_logo">
                    <img src={logo} alt=""/>
                </div>
                <footer>
                    <div className="block">
                        <h2>Our</h2>
                        <p>Phone: 92-825-2876</p>
                        <p>Email: StoryYourStory@gmail.com</p>
                        <p>Facebook: @Storys</p>
                    </div>
                    <div className="block">
                        <h2>
                            Sitemap
                        </h2>
                        <p>Sign Up</p>
                        <p>Sign In</p>
                        <p>Try It</p>
                    </div>
                    <div className="block">
                        <h2>Police</h2>
                        <p>content</p>
                        <p>Privce</p>
                        <p>Police</p>
                    </div>
                    <small className="copyright">
                    &#169; 
                    this is just for development purpisce
                    </small>
                </footer>
            </div>
        </div>
    )
}

export default Footer
