import React from 'react';
import "./Hero.css";
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';


const Hero = ({movies}) => {
  return (
    <div>
      <Carousel>
        {
          movies.map((movie, index) => {
            return (
              <div className='movie-card-container'>
                <div className='movie-card'>
                  <div className='movie-detail'></div>
                  <img src={movie.poster} alt={movie.name} />
                </div>
                <div className='movie-title'>
                  <h4>{movie.title}</h4>
                </div>
              </div>
            )
          })
        
        }
      </Carousel>
    </div>
  )
}

export default Hero