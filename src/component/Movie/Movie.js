import { useContext, useEffect, useState } from "react";
import Axios from "../axios";
import MovieContext from "../context/MovieContext";
import "./movie.scss";
import video from "../Assets/movie.mp4";
import icon from "../Assets/play-icon.png";
import closeIcon from "../Assets/close-icon.png";
const Movie = (props) =>{
    const {selectedMovie} = useContext(MovieContext);
    const [CurrentMovieData, setCurrentMovieData] = useState(null);
    const [trailer, setTrailer] = useState(null);
    // console.log(selectedMovie)
    const CallApi = async()=>{
        const data = await Axios.get(`filmDetails/?film_id=${selectedMovie.film_id}`)
        setCurrentMovieData(data.data)
    }
    useEffect(()=>{
        CallApi() 
    },[])

    const callTrailler = async(id) =>{
        try{
            //  const data = await Axios.get(`trailers/?film_id=${id}`)
        setTrailer("working")

        }catch(e){
            console.log("error")
        }
    }
   
    return(
       
        <div className="movie">
             {CurrentMovieData && 
               <div className="movie-head">
                   {/* {console.log(CurrentMovieData)} */}
                    <div className="movie-head-text">
                     <div className="movie-head-text-name">{CurrentMovieData.film_name}</div>
                     <p className="movie-head-text-synopsis">{CurrentMovieData.synopsis_long}</p>
                     <div className="movie-head-text-genra"><span>Genre:</span> {CurrentMovieData.genres.map((e)=>{
                         return e.genre_name+", "
                     })}</div>
                     <div className="movie-head-text-director"><span>Director:</span> {CurrentMovieData.directors.map((e)=>{
                         return e.director_name+", "
                     })}</div>
                     <div className="movie-head-text-cast"><span>Cast:</span> {CurrentMovieData.cast.map((e)=>{
                         return e.cast_name+", "
                     })}</div>
                     <div className="movie-head-text-advisory">{CurrentMovieData.age_rating.map((e)=>{
                         return <> <div>Age {e.rating+"and above: "+e.age_advisory}</div><div><img src={e.age_rating_image} alt="age rating"/></div> </>
                     })}</div>
                     <span className="movie-head-text-trailer" onClick={()=>callTrailler(CurrentMovieData.film_id)}><img src={icon} alt="icon"/> Watch Trailer</span>
                    </div>
                    <div className="movie-head-image">
                        <img src={CurrentMovieData.images.poster[1].medium.film_image} alt="movie poster" />
                    </div>
               </div> }
              {trailer && <div className="movie-trailer">
                  <span><img src={closeIcon} alt="close" onClick={()=> setTrailer(null)}/></span>
                        <div className="movie-trailer-container">
                        <video src={video} autoPlay></video>
                            </div>
                     {/* {console.log(trailer)} */}
               </div>}
        </div>
    )
}

export default Movie