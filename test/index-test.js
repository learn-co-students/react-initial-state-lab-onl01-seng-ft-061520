const React = require('react');
const { shallow } = require('enzyme');

const ImageSlider = require('../components/ImageSlider');
const Bomb = require('../components/Bomb');

describe('<ImageSlider />', function () {
  const wrapper = shallow(<ImageSlider/>);

  it('should set the `currentSlideIndex` to 0 on its state', function () {
    expect(wrapper.state('currentSlideIndex'))
      .toNotBe(undefined, 'The `currentSlideIndex` property is not defined on the state.')
      .toEqual(0);
  });

  it('render the correct text', function () {
    expect(wrapper.text()).toEqual('I am on slide 0');
  });
});

describe('<Bomb />', function () {
  const wrapper = shallow(<Bomb initialCount={120} />);

  it('should set the `secondsLeft` to the value of the `initialCount` prop', function () {
    expect(wrapper.state('secondsLeft'))
      .toNotBe(undefined, 'The `secondsLeft` property is not defined on the state.')
      .toEqual(120);
  });

  it('render the correct text when the timer is not 0', function () {
    expect(wrapper.text()).toEqual('120 seconds left before I go boom!');
  });

  it('render the correct text when the timer is 0', function () {
    const wrapper = shallow(<Bomb initialCount={0} />);
    expect(wrapper.text()).toEqual('Boom!');
  });
});
