import React from 'react'
import logo from '../../assets/logo.svg'
import './IconsNav.css'
import HomeMaxIcon from '@mui/icons-material/HomeMax';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import IconButton from '@mui/material/IconButton';


function IconsNav() {
    return (
        <div className='iconsnav'>
            <div className="iconsnav_container">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <IconButton>
                    <HomeMaxIcon />
                    <span className="iconText">Home</span>
                </IconButton>
                <ExploreIcon />
                <NotificationsNoneIcon />
                <SettingsBackupRestoreIcon />
            </div>
        </div>
    )
}

export default IconsNav
