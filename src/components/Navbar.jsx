import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { useNavigate, useLocation } from 'react-router-dom'

const Navbar = () => {

    // const navigate = useNavigate()
    // const [activeItem, setActiveItem] = useState('all')

    // const handleClick = (page, itemName) => {
    //     setActiveItem(itemName)
    //     navigate(page)
    // }

    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (page) => {
        navigate(page);
    }

    return (
        <>
        <div className='sticky top-0 bg-[#121212] w-[100%] px-8 pt-4 pb-2'>

            <div className='w-full flex justify-between items-center font-semibold'>
                <div className='flex items-center gap-2'>
                    <img onClick={() => navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer hover:bg-slate-800' src={assets.arrow_left} alt="" />
                    <img onClick={() => navigate(+1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer hover:bg-slate-800' src={assets.arrow_right} alt="" />
                </div>
                <div className='flex items-center gap-4'>
                    <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer hover:bg-slate-300'>Explore Premium</p>
                    <p className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer hover:bg-slate-800'>Install App</p>
                    <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center cursor-pointer'>R</p>
                </div>
            </div>
            {/* <div className='flex items-center gap-2 mt-4'>
                <p onClick={() => handleClick('/spotify-react/', 'all')} className={activeItem === 'all' ? 'bg-white text-black px-4 py-1 rounded-2xl cursor-pointer' : 'bg-black px-4 py-1 rounded-2xl cursor-pointer'}>All</p>
                <p onClick={() => handleClick('/spotify-react/music', 'music')} className={activeItem === 'music' ? 'bg-white text-black px-4 py-1 rounded-2xl cursor-pointer' : 'bg-black px-4 py-1 rounded-2xl cursor-pointer'}>Music</p>
                <p onClick={() => handleClick('/spotify-react/podcast', 'podcast')} className={activeItem === 'podcast' ? 'bg-white text-black px-4 py-1 rounded-2xl cursor-pointer' : 'bg-black px-4 py-1 rounded-2xl cursor-pointer'}>Podcasts</p>
            </div> */}
            <div className='flex items-center gap-2 mt-4'>
                <p onClick={() => handleClick('/spotify-react/')} className={`px-4 py-1 rounded-2xl cursor-pointer ${location.pathname === '/spotify-react/' ? 'bg-white text-black' : 'bg-black text-white hover:bg-slate-800'}`}>All</p>
                <p onClick={() => handleClick('/spotify-react/music')} className={`px-4 py-1 rounded-2xl cursor-pointer ${location.pathname === '/spotify-react/music' ? 'bg-white text-black' : 'bg-black text-white hover:bg-slate-800'}`}>Music</p>
                <p onClick={() => handleClick('/spotify-react/podcast')} className={`px-4 py-1 rounded-2xl cursor-pointer ${location.pathname === '/spotify-react/podcast' ? 'bg-white text-black' : 'bg-black text-white hover:bg-slate-800'}`}>Podcasts</p>
                <p onClick={() => handleClick('/spotify-react/search')} className={`lg:hidden md:block sm:block px-4 py-1 rounded-2xl cursor-pointer ${location.pathname === '/spotify-react/search' ? 'bg-white text-black' : 'bg-black text-white hover:bg-slate-800'}`}>Search</p>
            </div>
        </div>
        </>
    )
}

export default Navbar