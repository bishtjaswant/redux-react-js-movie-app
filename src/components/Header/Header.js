import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useGetMoviesQuery, useGetShowsQuery } from "../../features/movies/movieSlide";
import { getSearch } from "../../features/search/searchSlice";
import { debounce } from "lodash";
import "./Header.scss";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const dispatch = useDispatch() ;

  
  useEffect(()=>{ 

      debounce(()=>{
        dispatch(getSearch(searchTerm));

      },1000)()
  
  },[searchTerm])

  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Digital Movie</div>
      </Link>
      <div className="search">
        <input type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value) } placeholder="search item" name="" id="" />
      </div>
      <div className="user-name">
        <h5>jaswant bisht</h5>
      </div>
    </div>
  );
};

export default Header;
