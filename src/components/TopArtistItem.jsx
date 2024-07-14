import React from 'react'

const TopArtistItem = ({image, name}) => {
    return (
        <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
            <img className='rounded-full h-40 w-40' src={image} alt="" />
            <p className='font-bold mt-2 mb-1'>{name.length > 15 ? name.slice(0, 15) + '...' : name}</p>
            <p className='text-[15px] text-[#a7a7a7]'>Artist</p>
        </div>
    )
}

export default TopArtistItem