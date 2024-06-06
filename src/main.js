import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
const slider = document.querySelector('#drag');
 let mouseDown = false;
 let startX, scrollLeft;
 let startDragging = function (e) {
     mouseDown = true;
     startX = e.pageX - slider.offsetLeft;
     scrollLeft = slider.scrollLeft;
 };

 let stopDragging = function (event) {
     mouseDown = false;
 };

 slider.addEventListener('mousemove', (e) => {
     e.preventDefault();  if(!mouseDown) {
         return;
     }
     const x = e.pageX - slider.offsetLeft;
     const scroll = x - startX;
     slider.scrollLeft = scrollLeft - scroll;
 });

 slider.addEventListener('mousedown', startDragging, false);
 slider.addEventListener('mouseup', stopDragging, false);
 slider.addEventListener('mouseleave', stopDragging, false);
