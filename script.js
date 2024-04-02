'use strict';

// var canvas = document.querySelector('.canvas');
// var ctx = canvas.getContext('2d');
// var window_height = window.innerHeight;
// var window_width = window.innerWidth;

// canvas.height = window_height;
// canvas.width = window_width;

const body = document.querySelector('body');
const imgBlock = document.createElement('div');
const cursorDot = document.querySelector('.cursor-data');
const cursorOutline = document.querySelector('.cursor-outline-data');
// simple cursor animation
const animateMouse = (e) => {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  //   cursorOutline.style.left = `${posX}px`;
  //   cursorOutline.style.top = `${posY}px`;
  cursorOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 600, fill: 'forwards' }
  );
};

window.onmousemove = (e) => {
  animateMouse(e);
};

// hover link image

const displaying = (imgUrl, elm) => {
  body.appendChild(imgBlock);

  imgBlock.innerHTML = `<img src='${imgUrl}'>`;
  imgBlock.classList.add('imgHover');
  imgBlock.style.top = elm.offsetTop + 40 + 'px';
  imgBlock.style.left = elm.offsetLeft + 'px';
};

const removeimg = () => {
  body.removeChild(imgBlock);
};
