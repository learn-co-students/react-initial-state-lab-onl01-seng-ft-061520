import React from 'react';
import ReactDOM from 'react-dom';

import ImageSlider from './components/ImageSlider';
import Bomb from './components/Bomb';

ReactDOM.render(
  <div>
    <ImageSlider></ImageSlider>
    <Bomb initialCount={120} />
  </div>,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
