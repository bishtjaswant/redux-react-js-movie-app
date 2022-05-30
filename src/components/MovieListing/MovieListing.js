import React from 'react';
import { useGetMoviesQuery } from '../../features/movies/movieSlide';
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux';

const MovieListing = () => {
  const { data, isError, isLoading } = useGetMoviesQuery(useSelector((state) => state.search.value));

  let renderMovies = '';


  renderMovies = data?.Search?.length > 0 ? data?.Search?.map((movie) => (
    <MovieCard key={movie.imdbID} movie={movie} />
  )) : <p className='error'>Please search movie or daily shows from search bar</p>

  let sliderProps = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3
  }

  return (
    <>
      {isError && <p className='error'>something went wrong</p>}
      {isLoading ? <p>Still movis loading........</p> : (<div className="movie-wrapper">
        <div className="movie-list">
          <h2>movies</h2>
          <div className="movie-container">
            <Slider {...sliderProps}>
              {renderMovies}
            </Slider>
          </div>
        </div>
      </div>)}
    </>
  );
};

export default MovieListing;