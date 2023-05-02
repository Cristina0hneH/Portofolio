import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import React, { useState } from 'react';
import Item from './Item';

export default function Carousel(props) {
  const [items, setItems] = useState();
  const [active, setActive] = useState();
  const [direction, setDirection] = useState('');

  const handleDragStart = (e) => {e.preventDefault()};
  
  

  const moveLeft = () => {
    var newActive = active;
    newActive--;
    setActive(newActive < 0 ? items.length - 1 : newActive);
    setDirection('left');
  };

  const moveRight = () => {
    var newActive = active;
    setActive((newActive + 1) % items.length);
    setDirection('right');
  };
  const cards = [
    <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
    <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
    <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
  ];
  return (
    <div id="carousel" className="noselect">
      <div className="arrow arrow-left" onClick={moveLeft}></div>
      <div className="arrow arrow-right" onClick={moveRight}></div>
      <AliceCarousel mouseTracking items={cards} />
    </div>
  );
};
