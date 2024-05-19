import React, { useEffect } from 'react'
import Header from './Header'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MainContaner from './MainContaner';
import MovieContaner from './MovieContaner';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const Browse = () => {
  const user = useSelector((store) => store.app.user);
  const navigate = useNavigate();
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  

  useEffect(() => {
    if (!user) {
      navigate("/");
    } 
  },[]);

  return (
    <div>
      <Header />
      <div>
        <MainContaner/>
        <MovieContaner/>

      </div>
    </div>
  )
}

export default Browse