import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

    const navigate = useNavigate()

  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
        <div className='bg-[#121212] h-[25%] rounded flex flex-col justify-around'>
            <div onClick={() => navigate('/spotify-react/')} className='flex items-center gap-3 pl-8 pt-3.5 pb-2 cursor-pointer'>
                <img className='w-20' src={assets.spotify_logo_sidebar} alt="" />
            </div>
            <div onClick={() => navigate('/spotify-react/')} className='flex items-center gap-3 pl-8 pt-2 pb-2 cursor-pointer'>
                <img className='w-6' src={assets.home_icon} alt="" />
                <p className='font-bold'>Home</p>
            </div>
            <div onClick={() => navigate('/spotify-react/search')} className='flex items-center gap-3 pl-8 pt-2 pb-3.5 cursor-pointer'>
                <img className='w-6' src={assets.search_icon} alt="" />
                <p className='font-bold'>Search</p>
            </div>
        </div>
        <div className='bg-[#121212] h-auto overflow-y-auto rounded'>
            <div className='p-4 flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <img className='w-8' src={assets.stack_icon} alt="" />
                    <p className='font-semibold'>Your Library</p>
                </div>
                <div className='flex items-center gap-3'>
                    <img className='w-5' src={assets.arrow_icon} alt="" />
                    <img className='w-5' src={assets.plus_icon} alt="" />
                </div>
            </div>
            <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                <h1>Create your first playlist</h1>
                <p className='font-light'>It's easy, we'll help you</p>
                <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 hover:bg-slate-300'>Create playlist</button>
            </div>
            <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
                <h1>Let's find some podcasts to follow</h1>
                <p className='font-light'>We'll keep you updated on new episodes</p>
                <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 hover:bg-slate-300'>Browse podcasts</button>
            </div>
            <div className='p-4 bg-[#121212] m-2 rounded flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
                <p className='text-slate-400 font-light text-xs leading-6'>
                    <a className='hover:underline' href="">Legal</a>
                    &emsp;&emsp;
                    <a className='hover:underline' href="">Safety & Privacy Center</a>
                    &emsp;&emsp;
                    <a className='hover:underline' href="">Privacy Policy</a>
                    &emsp;&emsp;
                    <a className='hover:underline' href="">Cookies</a>
                    &emsp;&emsp;
                    <a className='hover:underline' href="">About Ads</a>
                    &emsp;&emsp;
                    <a className='hover:underline' href="">Accessibility</a>
                </p>
                <p className='text-slate-400 font-light text-xs'>
                    <a className='hover:underline' href="">Cookies</a>
                </p>
                <div className='flex items-center gap-1 py-1 px-2 mt-3 cursor-pointer text-[15px] border-[1px] rounded-full font-semibold hover:border-2'>
                    <img className='w-4' src={assets.globe_icon} alt="" />
                    <p>English</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar