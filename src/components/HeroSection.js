import React from 'react';
import './HeroSection.css';
import { Button } from './Button';
import { Link } from 'react-scroll';
import ReactTypingEffect from 'react-typing-effect';

function HeroSection({
  id,
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  headlineList,
  description,
  buttonLabel,
  img,
  alt,
  imgStart
}) {
  let head = headlineList.length > 0 
    ? <h1 className={lightText ? 'heading' : 'heading dark'}>
        <span>{headline}</span><br/>
        <ReactTypingEffect text={headlineList} />
      </h1> 
      :
      <h1 className={lightText ? 'heading' : 'heading dark'}>
        {headline}
      </h1>;
  return (
    <>
      <div id={id}
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <div className='top-line'>{topLine}</div>
                {head}
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
                <Link to='footer' spy={true} smooth={true}>
                  <Button buttonSize='btn--wide' buttonColor='blue'>
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img src={img} alt={alt} className='home__hero-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
