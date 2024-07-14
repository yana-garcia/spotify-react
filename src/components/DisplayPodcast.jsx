import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import TopPodcastItem from './TopPodcastItem';

const DisplayPodcast = () => {
    const [spotifyApi, setSpotifyApi] = useState([])

	const getSpotifyApi = async() => {
		const options = {
		method: 'GET',
		url: 'https://spotify23.p.rapidapi.com/search/',
		params: {
			q: 'a',
			type: 'podcasts',
			offset: '0',
			limit: '20',
			numberOfTopResults: '5'
		},
		headers: {
			'x-rapidapi-key': '55df86ef1fmshe09604734a42a94p1510fcjsnb290f580f71f',
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
                <h1 className='my-5 font-bold text-2xl'>Trending Episodes</h1>
                <div className='grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3'>
                {spotifyApi?.podcasts?.items?.map((item, index) => (<TopPodcastItem key={index} image={item?.data?.coverArt?.sources[1]?.url} name={item?.data?.name} publisher={item?.data?.publisher?.name} />))}
                </div>
            </div>
        </>
    )
}

export default DisplayPodcast