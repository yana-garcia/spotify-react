import React from 'react'

const TopPlaylistItem = ({image, name, desc}) => {
    return (
        <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
            <img className='rounded' src={image} alt="" />
            <p className='font-bold mt-2 mb-1'>{name.length > 15 ? name.slice(0, 15) + '...' : name}</p>
            <p className='text-[15px] text-[#a7a7a7]'>{desc.length > 60 ? desc.slice(0, 60) + '...' : desc}</p>
        </div>
    )
}

export default TopPlaylistItem