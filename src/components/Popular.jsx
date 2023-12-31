import React from 'react';
import { useEffect, useState } from 'react';
import './Popular.css';
// import '@splidejs/react-splide/css/core';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import axios from 'axios';
import { Link } from 'react-router-dom';
import girl from '../assests/girl.png';

import env from 'react-dotenv';
import { type } from '@testing-library/user-event/dist/type';

export default function Popular() {
  const [Popular, setpopular] = useState([]);

  useEffect(() => {
    getResponse();
    // getpopular();
  }, []);

  // const getpopular = async () => {
  //   const res = await fetch(
  //     "https://api.spoonacular.com/recipes/random?apiKey=737e9f1e5c544232a55df8cb65629ff4&number=9"
  //   );
  // const data= await res.json();
  // console.log(process.env.REACT_API);

  //   console.log(res);
  // };

  const getResponse = async () => {
    const check = localStorage.getItem('Popular');
    // console.log(check);
    if (check) {
      setpopular(JSON.parse(check));
    } else {
      const Response = await axios.get(
        'https://api.spoonacular.com/recipes/random?apiKey=72d716e98a824fa782cfa358c0410c9f&number=9'
      );
      localStorage.setItem('Popular', JSON.stringify(Response.data.recipes));

      setpopular(Response.data.recipes);
      // console.log(Response);
      // console.log(Response.data.recipes);
      // console.log(process.env.REACT_API);
    }
  };

  return (
    <div>
      <div className="wrapper">
        <div className="heading">
          <img alt="girl" src={girl} className="pics" />
          <div className="tit">Popular Picks</div>
        </div>
        <Splide
          options={{
            perPage: 3,
            // arrows: true,
            pagination: false,
            drag: 'free',
            gap: '1rem',
            breakpoints: {
              768: {
                perPage: 2,
                gap: '.7rem',
              },
              480: {
                perPage: 1,
                gap: '0',
              },
            },
          }}
          className="agnipat"
        >
          {Popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <div className="card ">
                  <Link to={'/recipe/' + recipe.id}>
                    <img src={recipe.image} alt="Img" className="po-img" />
                    <h3>{recipe.title}</h3>
                  </Link>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
}
