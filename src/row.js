import React, { useEffect, useState } from 'react'
import axios from './axios';
import "./row.css"
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import YouTubeVideos from './YouTubeVideos';
import requests from './requests';
const base_url = "https://image.tmdb.org/t/p/original/"


function Row({ title, fetchUrl, isLargeRow }) {
    const [enterTrailer, setEnterTrailer] = useState(true);
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request.data.results);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playervars: {
            autoplay: 1,
        },
    };
    const handleclick = (val) => {
        setEnterTrailer(true);
        console.log(val?.original_title || val?.original_name || "");
        if (trailerUrl) {
            setTrailerUrl(""); // to empty a string !
        } else {
            movieTrailer(val?.original_title || val?.original_name || "")
                .then((url) => {
                    console.log(url);
                    setTrailerUrl(url);
                    // const urlParams = new URLSearchParams(new URL(url).search);

                    // urlParams.append('v',);
                })
                .catch((error) => console.log(error));
        }
    };

    return (
        <div className='row'>
            <h2>{title}</h2>
            {enterTrailer ? (
                <YouTubeVideos trailerUrl={trailerUrl} fetchUrl={requests.fetchActionMovies} opts={opts} />
            ) : (
                null
            )}
            <div className='row_posters'>
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        onClick={() => handleclick(movie)}
                        className={`row-poster ${isLargeRow && "row_posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>
        </div>
    )
}

export default Row;