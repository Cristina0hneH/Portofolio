import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import React, { useState } from "react";

export default function Carousel(props) {
  const [items, setItems] = useState();
  const [active, setActive] = useState();
  const [direction, setDirection] = useState("");

  const handleDragStart = (e) => {
    e.preventDefault();
  };

  const moveLeft = () => {
    var newActive = active;
    newActive--;
    setActive(newActive < 0 ? items.length - 1 : newActive);
    setDirection("left");
  };

  const moveRight = () => {
    var newActive = active;
    setActive(((newActive + 1) % items.length) - 1);
    setDirection("right");
  };
  const cards = [
    <img
      className="cardimg"
      src="https://images.unsplash.com/photo-1460648304944-4883b5cfcee5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2xpZGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    />,
    <img
      className="cardimg"
      src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8amF2YXNjcmlwdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      className="cardimg"
      src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amF2YXNjcmlwdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      onDragStart={handleDragStart}
      role="presentation"
    />,
  ];
  return (
    <div id="carousel" className="noselect">
      <div className="arrow arrow-left" onClick={moveLeft}></div>
      <div className="arrow arrow-right" onClick={moveRight}></div>
      <AliceCarousel mouseTracking items={cards} />
    </div>
  );
}
