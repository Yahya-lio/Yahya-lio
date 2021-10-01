import React from 'react'
import NavBar from '../components/Navbar/NavBar'
import Header from '../components/Header/Header'
import ForHow from '../components/howIsFor/ForHow'
import Gatagores from '../components/gatagores/Gatagores'
import Footer from '../components/footer/Footer'

function WelcomePage() {
    return (
        <div className='welcomepage'>
            <NavBar />
            <Header />
            <ForHow />
            <Gatagores />
            <Footer/>
        </div>
    )
}

export default WelcomePage
