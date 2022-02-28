import React from 'react';
import { Button } from '../Styles/Button.styles';
import { ReactComponent as Sally } from '../../assets/SVGs/Saly-1.svg';
import { ReactComponent as Puddle } from '../../assets/SVGs/Vector.svg';
import './TopPage.css';

const TopPages = () => {
  return (
    <div>
      <div className="container">
        <div className="header-container">
          Create
          <br /> detailed
          <br /> invoice in a <span style={{ color: '#025CE4' }}>jiffy</span>.
        </div>
        <p className="header-paragraph">
          Send invoices to your customers
          <br /> globally, Get to provide details of your goods in seconds.
        </p>
      </div>
      <Button
        backgroundColor="#000000"
        color="#FFFFFF"
        hover="#025CE4"
        width="156px"
        border="none"
        className="account-button"
      >
        Create Account
      </Button>
      <Button
        backgroundColor="#FFFFFF"
        color="#000000"
        hover="#FFFFFF"
        width="126px"
        border="1px #00000"
        className="account-button"
      >
        Learn More
      </Button>
      <div>
        <Sally className="sally" />
        <Puddle className="puddle" />
      </div>
      <section>
        <h1>GET STARTED</h1>
        <div className="get-started-header">
          <img
            src={require('../../assets/SVGs/Polypodium.png')}
            alt=""
            className="poly"
          />
          <h2>Nigeria's First Invoicing App.</h2>
          <img
            src={require('../../assets/SVGs/Polypodium.png')}
            alt=""
            className="poly2"
          />
        </div>
        <div className="create-account">
          <h1>Create account</h1>
          <p>Create an account on the web then sign in</p>
        </div>
      </section>
    </div>
  );
};

export default TopPages;
