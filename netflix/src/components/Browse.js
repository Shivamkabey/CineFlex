import React, { useEffect } from 'react'
import Header from './Header'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MainContaner from './MainContaner';
import MovieContaner from './MovieContaner';

const Browse = () => {
  const user = useSelector((store) => store.app.user);
  const navigate = useNavigate();

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