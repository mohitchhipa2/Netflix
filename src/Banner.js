import React, { useEffect, useState } from 'react'
import axios from './axios';
import requests from './requests';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';
import "./Banner.css"
function Banner() {
    const [movie, setMovie] = useState([]);
    const [bannerTrailer, setBannerTrailer] = useState();
    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 2)]);
        }
        fetchData();
    }, [])
    console.log(movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    const opts = {
        height: "390",
        width: "100%",
        playervars: {
            autoplay: 1,
        },
    };

    const HandleBanner = (movies) => {
        if (bannerTrailer) {
            setBannerTrailer("")
        } else {
            movieTrailer(movie?.original_title || movie?.original_name || "")
                .then((url) => {
                    console.log(url);
                    setBannerTrailer(url);
                    // const urlParams = new URLSearchParams(new URL(url).search);

                    // urlParams.append('v',);
                })
                .catch((error) => console.log(error));
        }
    }

    return (
        <header className='banner' style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center"
        }}>
            <div className='Banner_contents'>
                <h1 className='banner_title'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className='banner_contents'>
                    <button onClick={(() => HandleBanner(movie))}
                        className='banner_button'>Play</button>
                    <button className='banner_button'>My List</button>
                </div>
                <h1 className='banner_description'>{movie?.overview}</h1>
                {truncate(movie?.overview, 150)}
            </div>
            {/* <div className='banner_fadebottom'/> 
            {bannerTrailer.length > 0 ?(<YouTube videoId={bannerTrailer.split("=")[1]} opts={opts}/>): null } */}
        </header>
    )
}

export default Banner;
