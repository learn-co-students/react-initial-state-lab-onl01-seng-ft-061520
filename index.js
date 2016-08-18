const React = require('react');
const ReactDOM = require('react-dom');

const ImageSlider = require('./components/ImageSlider');
const BombTimer = require('./components/BombTimer');

ReactDOM.render(
  <div>
    <ImageSlider></ImageSlider>
    <BombTimer initialTime={120} />
  </div>,
  document.getElementById('main')
);
