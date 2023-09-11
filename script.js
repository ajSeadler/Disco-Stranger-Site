document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.getElementById('menuIcon');
  const links = document.getElementById('links');
  const nav = document.querySelector('.nav');

  menuIcon.addEventListener('click', function() {
    nav.classList.toggle('active');
    menuIcon.classList.toggle('active'); // Add or remove "active" class on menu icon
  });
});
