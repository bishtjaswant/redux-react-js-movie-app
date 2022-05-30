import MovieListing from "../MovieListing/MovieListing";
import ShowListing from "../ShowListing/ShowListing";


const Home = () => {

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
      <ShowListing />
    </div>
  );
};

export default Home;
