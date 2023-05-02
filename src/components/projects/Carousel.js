import React, { useState } from 'react';
import Item from './Item';

export default function Carousel(props) {
  const [items, setItems] = useState();
  const [active, setActive] = useState();
  const [direction, setDirection] = useState('');

  
  

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

  return (
    <div id="carousel" className="noselect">
      <div className="arrow arrow-left" onClick={moveLeft}></div>
      <div className="arrow arrow-right" onClick={moveRight}></div>
      <Item />
    </div>
  );
};
