const icon = document.querySelector('.icon');
const menu = document.querySelector('.nav-menu');
const close = document.querySelector('.close');

icon.addEventListener('click', (e) => {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
  } else {
    menu.classList.add('active');
  }
});

close.addEventListener('click', (e) => {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
  } else {
    menu.classList.add('active');
  }
});
