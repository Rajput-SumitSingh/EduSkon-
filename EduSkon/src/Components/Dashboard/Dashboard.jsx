import React from 'react'
import Navbar from './Navbar/Navbar'
import Header from './Header/Header'
import Footer from '../CommonComponents/Footer/Footer'
import Class from './Classes/Class'
import Goals from './Goals/Goals'

function Dashboard() {
  return (
    <div>

        <Navbar />
        <Header />
        <Class />
        <Goals />
        <Footer />


    </div>
  )
}

export default Dashboard