import React from 'react'

const TopAlbumItem = ({image, name, artist, release}) => {
    return (
        <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
            <img className='rounded' src={image} alt="" />
            <p className='font-bold mt-2 mb-1'>{name.length > 25 ? name.slice(0, 25) + '...' : name}</p>
            <p className='text-slate-200 text-sm'>{artist.length > 20 ? artist.slice(0, 20) + '...' : artist}</p>
            <p className='text-[15px] text-[#a7a7a7]'>{release}</p>
        </div>
    )
}

export default TopAlbumItem