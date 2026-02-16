import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='flex bg-cover bg-center bg-[url("https://img.freepik.com/premium-photo/traffic-signal-displaying-red-yellow-green-lights-urban-setting-dusk_669798-13234.jpg?semt=ais_user_personalization&w=740&q=80")] justify-between align-items-between h-screen pt-8 flex-col w-full  bg-red-100'>
            <img className='w-14 ml-8' src="https://commercialvehicle.in/wp-content/uploads/2020/05/Uber_logo_2018.png" alt="Uber-logo" />
            <div className='bg-white px-5 py-5 text-center rounded-lg'>
                <h2 className='text-bold font-bold text-3xl mb-2'>Get Start with Uber</h2>
                <Link to="/login" type='button' className='bg-black w-full text-white px-10 py-3 rounded-lg text-2xl flex justify-center items-center'>Continue</Link>
            </div>
        </div>
    )
}

export default Home
