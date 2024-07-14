import React from 'react'

const TopTrackItem = ({image, name, album, artist}) => {
    return (
        <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
            <img className='rounded' src={image} alt="" />
            <p className='font-bold mt-2 mb-1'>{name.length > 15 ? name.slice(0, 15) + '...' : name}</p>
            <p className='text-slate-200 text-sm'>{album.length > 15 ? album.slice(0, 15) + '...' : album}</p>
            <p className='text-[15px] text-[#a7a7a7]'>{artist?.map((item, index) => (
                <span key={index}>{item?.profile?.name}{index !== artist.length - 1 ? ', ' : ''}</span>
            ))}</p>
        </div>
    )
}

export default TopTrackItem