const API_key = "9747decaea955f418d2748b4a6e73ee2";

const requests = {
    fetchNetflixOriginals: `/discover/tv?api_key=${API_key}&with_network=213`,
    fetchTreanding: `/trending/movie/week?api_key=${API_key}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_key}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_key}&with_genres=28`,
    fetchComadyMovies: `/discover/movie?api_key=${API_key}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_key}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_key}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_key}&with_genres=99`,

}


export default requests;