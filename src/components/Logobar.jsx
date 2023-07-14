import React from 'react';
import './Logobar.css';
import { NavLink } from 'react-router-dom';
import Catogory from './Catogory';
import logoimg2 from '../assests/boy.png';

export default function Logobar() {
  return (
    <>
      <div className="Logo-whole">
        <NavLink to={'/'} className="Logoo">
          <div className="Logo-left">
            <img src={logoimg2} alt="logo" />
            <h4> YummyFood</h4>
          </div>
        </NavLink>
        <div className="Logo-right">
          <Catogory />
        </div>
      </div>
    </>
  );
}
