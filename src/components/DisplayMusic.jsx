import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import TopArtistItem from './TopArtistItem'
import TopAlbumItem from './TopAlbumItem'
import TopTrackItem from './TopTrackItem'
import TopPlaylistItem from './TopPlaylistItem'

const Music = () => {
	const [spotifyApi, setSpotifyApi] = useState([])

	const getSpotifyApi = async() => {
		const options = {
		method: 'GET',
		url: 'https://spotify23.p.rapidapi.com/search/',
		params: {
			q: 'a',
			type: 'multi',
			offset: '0',
			limit: '7',
			numberOfTopResults: '5'
		},
		headers: {
			'x-rapidapi-key': '571ba2474cmsh3974ea020ed6b4ap142dc6jsn6e5b8f593888',
			'x-rapidapi-host': 'spotify23.p.rapidapi.com'
		}
		};
		
		try {
			const response = await axios.request(options);
			setSpotifyApi(response.data);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		getSpotifyApi()
	}, [])
	
  return (
    <>
        <div className='mb-4'>
            <h1 className='my-5 font-bold text-2xl'>Popular artists</h1>
            <div className='flex overflow-auto'>
            {spotifyApi?.artists?.items?.map((item, index) => (<TopArtistItem key={index} image={item?.data?.visuals?.avatarImage?.sources[0]?.url} name={item?.data?.profile?.name} />))}
            </div>
        </div>
        <div className='mb-4'>
            <h1 className='my-5 font-bold text-2xl'>Popular albums</h1>
            <div className='flex overflow-auto'>
            {spotifyApi?.albums?.items?.map((item, index) => (<TopAlbumItem key={index} image={item?.data?.coverArt?.sources[0]?.url} name={item?.data?.name} artist={item?.data?.artists?.items[0]?.profile?.name} release={item?.data?.date?.year} />))}
            </div>
        </div>
		<div className='mb-4'>
            <h1 className='my-5 font-bold text-2xl'>Trending Songs</h1>
            <div className='flex overflow-auto'>
            {spotifyApi?.tracks?.items?.map((item, index) => (<TopTrackItem key={index} image={item?.data?.albumOfTrack?.coverArt?.sources[0]?.url} name={item?.data?.name} album={item?.data?.albumOfTrack?.name} artist={item?.data?.artists?.items} />))}
            </div>
        </div>
		<div className='mb-4'>
            <h1 className='my-5 font-bold text-2xl'>Spotify Playlists</h1>
            <div className='flex overflow-auto'>
            {spotifyApi?.playlists?.items?.map((item, index) => (<TopPlaylistItem key={index} image={item?.data?.images?.items[0]?.sources[0]?.url} name={item?.data?.name} desc={item?.data?.description} />))}
            </div>
        </div>
    </>
  )
}

export default Music