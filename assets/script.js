let button = document.querySelector('.img');
let menu = document.querySelector('.menu');
let cross = document.querySelector('.cross');

button.addEventListener('click', () => {
  menu.style.display = "block";
  button.style.display = "none";
  cross.style.display = "block";
});

cross.addEventListener('click', () => {
  button.style.display = "block";
  menu.style.display = "none";
  cross.style.display = "none";
});

function handleResize() {
  if (window.innerWidth > 1024) {
    menu.style.display = "flex";
    button.style.display = "none";
    cross.style.display = "none";
  } else {
    menu.style.display = "none";
    button.style.display = "block";
    cross.style.display = "none";
  }
}

window.addEventListener('resize', handleResize);

// let button = document.querySelector('.img');
// let menu = document.querySelector('.menu');
// let cross = document.querySelector('.cross');

// button.addEventListener('click', () => {
//   fadeIn(menu);
//   button.style.display = "none";
//   cross.style.display = "block";
// });

// cross.addEventListener('click', () => {
//   fadeOut(menu);
//   button.style.display = "block";
//   cross.style.display = "none";
// });

// function fadeIn(element) {
//   element.style.opacity = 0;
//   element.style.display = "flex";

//   let opacity = 0;

//   function animate() {
//     opacity += 0.05;
//     element.style.opacity = opacity;

//     if (opacity < 1) {
//       requestAnimationFrame(animate);
//     }
//   }

//   animate();
// }

// function fadeOut(element) {
//   let opacity = 1;

//   function animate() {
//     opacity -= 0.05;
//     element.style.opacity = opacity;

//     if (opacity > 0) {
//       requestAnimationFrame(animate);
//     } else {
//       element.style.display = "none";
//     }
//   }

//   animate();
// }

// function handleResize() {
//     if (window.innerWidth > 1024) {
//       menu.style.display = "flex";
//       button.style.display = "none";
//     }}

//     handleResize()