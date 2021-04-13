import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-scroll';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section' id="pricing">
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Pricing</h1>
          <div className='pricing__container'>

            <Link to="footer" spy={true}  smooth={true} className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaFire />
                </div>
                <h3>Starter</h3>
                <h4>$8.99</h4>
                <p>per month</p>
                <ul className='pricing__container-features'>
                  <li>300 mins consultation</li>
                  <li>100 hours free services</li>
                  <li>5% discount</li>
                </ul>
                <Button className="pricing__button" buttonSize='btn--wide' buttonColor='primary'>
                  Choose Plan
                </Button>
              </div>
            </Link>

            <Link to="footer" spy={true}  smooth={true} className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                <h3>Gold</h3>
                <h4>$39.99</h4>
                <p>per month</p>
                <ul className='pricing__container-features'>
                  <li>600 mins consultation</li>
                  <li>150 hours free services</li>
                  <li>10% discount</li>
                </ul>
                <Button className="pricing__button" buttonSize='btn--wide' buttonColor='blue'>
                  Choose Plan
                </Button>
              </div>
            </Link>

            <Link to="footer" spy={true}  smooth={true}  className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiCrystalize />
                </div>
                <h3>Diamond</h3>
                <h4>$99.99</h4>
                <p>per month</p>
                <ul className='pricing__container-features'>
                  <li>1200 mins consultation</li>
                  <li>300 hours free services</li>
                  <li>20% discount</li>
                </ul>
                <Button className="pricing__button" buttonSize='btn--wide' buttonColor='primary'>
                  Choose Plan
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
