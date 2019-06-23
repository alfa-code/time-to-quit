import React from 'react';
import StartData from '../start-data';

import './style.scss';

const MainContainer = (props) => {
  return (
    <div className='container'>
      <h3>Main Container</h3>
      <StartData />
    </div>
  );
}

export default MainContainer;
