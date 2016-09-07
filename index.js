const React = require('react');
const ReactDOM = require('react-dom');

const ImageSlider = require('./components/ImageSlider');
const Bomb = require('./components/Bomb');

ReactDOM.render(
  <div>
    <ImageSlider></ImageSlider>
    <Bomb initialCount={120} />
  </div>,
  document.getElementById('main')
);
