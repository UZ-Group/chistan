import React from 'react';
import { Link } from 'react-router-dom';
import Under from './Under';

const About = () => {

  return (
    <div>
      About Page
      <Link to={'/'}>Go to home</Link>
      <Under user={{name: 'dddd'}}/>
    </div>
  );
};

export default About;