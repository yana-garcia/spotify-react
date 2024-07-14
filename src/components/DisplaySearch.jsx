import React, { useState, useEffect } from 'react'
import {assets} from '../assets/assets'
import axios from 'axios'
import TopTrackItem from './TopTrackItem'

const Search = () => {
  const [spotifyApi, setSpotifyApi] = useState([])
  const [filterData, setFilterData] = useState([])

	const getSpotifyApi = async() => {
		const options = {
		method: 'GET',
		url: 'https://spotify23.p.rapidapi.com/search/',
		params: {
			q: 'a',
			type: 'tracks',
			offset: '0',
      limit: '50'
		},
		headers: {
			'x-rapidapi-key': '55df86ef1fmshe09604734a42a94p1510fcjsnb290f580f71f',
			'x-rapidapi-host': 'spotify23.p.rapidapi.com'
		}
		};
		
		try {
			const response = await axios.request(options)
      setSpotifyApi(response.data.tracks.items)
      setFilterData(response.data.tracks.items)
      //console.log(response.data.tracks.items)
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		getSpotifyApi()
	}, [])

  const handleFilter = (value) => {
    const res = filterData.filter(f => f.data.name.toLowerCase().includes(value))
    setSpotifyApi(res)
  }

  //form autoComplete='off' className='p-2 text-gray-400 focus-within:text-gray-600'
  return (
    <div>
      <div className='flex flex-row justify-start items-center border-[1px] rounded-full px-3 focus-within:border-2 hover:border-2'>
          <img className='w-4' src={assets.search_icon} alt="" />
          <input 
            placeholder='What do you want to play?'
            type='text'
            onChange={e => handleFilter(e.target.value)}
            className='flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-base text-white p-2'
          />
      </div>
      <div>
        <div className='mb-4'>
          {/* <h1 className='my-5 font-bold text-2xl'>Trending Songs</h1> */}
          <div className='grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 pt-5'>
            {spotifyApi.length === 0 
              ? (<h1 className='pt-5 pl-2 text-xl'>NO MUSIC FOUND</h1>)
              : (spotifyApi.map((item, index) => (
              <TopTrackItem key={index} image={item.data.albumOfTrack.coverArt.sources[0].url} name={item.data.name} album={item.data.albumOfTrack.name} artist={item.data.artists.items} />
            )))}
          </div>
        </div>
          
           {/* <h1 className='text-white' key={index}>
             {item.data.name}
           </h1> */}
        
        {/* {spotifyApi.map((item, index) => (
          
          <h1 className='text-white' key={index}>
            {item.data.name}
          </h1>
        ))} */}
      </div>
    </div>
  )
}

export default Search