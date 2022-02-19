import { useContext } from "react";
import MovieContext from "../context/MovieContext";
import "./home.scss";
const Home = (props) => {
  const { movie } = props;
  const {setSelectedMovie} = useContext(MovieContext)

  return (
    <div className="home">
      <ul className="home-list">
        {movie &&
          movie.map((e, el) => {
   
            
            if( e.images.poster[1]){
                return <li onClick={()=>setSelectedMovie(e)}>
                    <img src={e.images.poster[1].medium.film_image} alt={e.film_name}/>
                    <span>{e.film_name}</span>
                </li>;
            }
         
          })}
      </ul>
    </div>
  );
};

export default Home;
