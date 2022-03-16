import React from 'react';
import TextField from '@mui/material/TextField';
import './SignUp.css';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="sign-container">
      <div>
        <img
          src={require('../../assets/IMAGES/Leaf.png')}
          alt=""
          className="leaf"
        />
        <NavLink to="/" className={'header-link'}>
          Kupon
        </NavLink>
        <div className="details-container">
          <p className="C-A">Create Account</p>
          <form>
            <div>
              <label>Full Name</label>
              <TextField
                required
                id="outlined-required"
                label="Required"
                className="text-field"
              />
            </div>
            <div className="header-space">
              <label>Business Name</label>
              <TextField
                required
                id="outlined-required"
                label="Required"
                className="text-field"
              />
            </div>
            <div className="header-space">
              <label>Business logo</label>
              <div>
                <input type={'file'} accept="image/*" />
              </div>
            </div>
            <div className="header-space">
              <label>Address</label>
              <TextField
                required
                id="outlined-required"
                label="Required"
                className="text-field"
              />
            </div>
          </form>
          <div>
            <p>.</p>
          </div>
        </div>
      </div>
      <div sign-container2></div>
    </div>
  );
};

export default SignUp;
