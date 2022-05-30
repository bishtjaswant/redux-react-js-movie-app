import React from 'react';
import { useGetMoviesQuery, useGetShowsQuery } from '../../features/movies/movieSlide';
import MovieCard from '../MovieCard/MovieCard';
import './ShowListing.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux';


const ShowListing = () => {
  const { data, isError, isLoading } = useGetShowsQuery(useSelector((state) => state.search.value));
 
  let renderShows='';

  renderShows=  data?.Response==='True' && data?.Search?.map((movie)=>(
    <MovieCard key={movie.imdbID}  movie={movie}/>
  ));

  let sliderProps={
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
   
    initialSlide: 0,
    responsive: [
     
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      {isError && <p className='error'>something went wrong</p>}
      {isLoading ? <p>Still shows loading........</p> : (<div className="movie-wrapper">
        <div className="movie-list">
          <h2>shows</h2>
          <div className="movie-container">
            <Slider {...sliderProps}>   {renderShows}  </Slider>
          </div>
        </div>
      </div>)}
    </>
  );
};

export default ShowListing;