// const API_KEY = process.env.API_KEY;
const API_KEY = "8b1bfc5d1a8e296a1173b9cf8569c869";

export default {
    fetchTrending : {
        title : 'Trending',
        url : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchTopRates : {
        title : "Top Rated",
        url : `/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchActionMovies : {
        title : "Action",
        url : `/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchComedyMovies : {
        title : "Comedy",
        url : `/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    fetchHorrorMovies : {
        title : "Horror",
        url : `/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    fetchRomanceMovies : {
        title : "Romance",
        url : `/discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
    fetchMystery : {
        title : "Mystery",
        url : `/discover/movie?api_key=${API_KEY}&with_genres=9648`
    },
    fetchSciFi : {
        title : "Sci-fi",
        url : `/discover/movie?api_key=${API_KEY}&with_genres=878`
    },
    fetchwestern : {
        title : "Western",
        url : `/discover/movie?api_key=${API_KEY}&with_genres=37`
    },
    fetchAnimation : {
        title : "Animation",
        url : `/discover/movie?api_key=${API_KEY}&with_genres=16`
    },
    fetchTv : {
        title : "Tv movie",
        url : `/discover/movie?api_key=${API_KEY}&with_genres=10770`
    },
    
}