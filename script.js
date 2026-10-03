const container = document.querySelector('.slider-container');
const sliderControl = document.querySelector('.slider-control');

// Update the CSS variable whenever the input range slider moves
sliderControl.addEventListener('input', (e) => {
  container.style.setProperty('--position', `${e.target.value}%`);
});