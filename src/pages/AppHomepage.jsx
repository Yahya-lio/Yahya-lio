import React from 'react'
import './AppHomepage.css'
import IconsNav from '../components/iconsNavbar/IconsNav'

function AppHomepage() {
    return (
        <div className='app_homepage'>
            <div className="app_homepage_container">
                <IconsNav />
                <div className="homepage_content"></div>
            </div>
            
        </div>
    )
}

export default AppHomepage
