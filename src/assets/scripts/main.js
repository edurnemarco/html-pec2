/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

import * as bootstrap from 'bootstrap';
/**
 * Write any other JavaScript below
 */

// Modal for the colabora form:

const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const modal = new bootstrap.Modal(document.getElementById('thankYouModal'));
    modal.show();
  });
}

// Carousel gallery

import '@splidejs/splide/dist/css/splide.min.css';

import Splide from '@splidejs/splide';

document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('.splide');
  if (el) {
    new Splide(el, {
      type   : 'loop',
      perPage: 3,
      gap    : '1rem',
      breakpoints: {
        768: {
          perPage: 1,
        },
      },
    }).mount();
  }
});