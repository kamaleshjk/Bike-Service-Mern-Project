// import React from 'react';
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}} className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
       
        <h1>Welcome To Our Bike Service Center</h1>
        <p >Welcome to our bike service center! We're here to ensure that your two-wheeled companion receives the care and attention it deserves. Whether you're in need of a routine check-up, repairs, or a complete overhaul, our team of experienced technicians is ready to provide top-notch service.</p>
        <h1>Avilable Services</h1>

        <div className="bg-white p-3 rounded " style={{width : '20%'}}>
                    <h2 className='mb-3 '>General service</h2>
                    <h2 className='mb-3 '>Oil change</h2>
                    <h2 className='mb-3 '>Water wash</h2>
        </div>
        <Link to='/Firststep' className="btn btn-light my-4" >Service Registeration</Link>
        <Link to='/States' className="btn btn-light my-4" >Service Table</Link>
    
    </div>
  )
 
}

export default Home