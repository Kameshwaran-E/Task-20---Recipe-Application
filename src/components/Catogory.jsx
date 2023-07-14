import React from 'react';
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import { BiDish } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import './Catogory.css';

export default function Catogory() {
  return (
    <div className="List">
      <NavLink to={'/cuisine/Indian'}>
        <BiDish />
        <h4>Indian</h4>
      </NavLink>

      <NavLink to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </NavLink>

      <NavLink to={'/cuisine/American'}>
        <FaHamburger />
        <h4>American</h4>
      </NavLink>
      <NavLink to={'/cuisine/Thai'}>
        <GiNoodles />

        <h4>Thai</h4>
      </NavLink>

      <NavLink to={'/cuisine/Japanese'}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </NavLink>
    </div>
  );
}
