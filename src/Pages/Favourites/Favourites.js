import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";
import Genres from "../../components/Genres/Genres";
import useGenres from "../../hooks/useGenres";
import { useParams } from "react-router";


const Favourites = ({props}) => {
    const {id} = useParams()



  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreforURL = useGenres(selectedGenres);


//   const fetchMovies = async () => {
   
//     const { data } = await axios.get(
//       `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&${page}&with_genres=${genreforURL}`
//     );

//     setContent(data.results);
//     setNumOfPages(data.total_pages);



//   };

//   useEffect(() => {
//     fetchMovies();
    

//   },
//   // eslint-disable-next-line 
//   [page,genreforURL])




  return (
   
    <div>
      <span className="pageTitle">Favourites</span>
      <span>Favourite {id}</span>
 

      <div className="trending">
       
      </div>
    
  
    </div>
  );
};

export default Favourites;
