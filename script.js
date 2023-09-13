document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.getElementById('menuIcon');
  const links = document.getElementById('links');
  const nav = document.querySelector('.nav');

  menuIcon.addEventListener('click', function() {
    nav.classList.toggle('active');
    menuIcon.classList.toggle('active'); // Add or remove "active" class on menu icon
  });
});

// Function to calculate and display the countdown
function showCountdown() {
  // Define the date and time of the next show 
  const nextShowDate = new Date("2023-09-15T19:00:00"); // September 15, 2023, 19:00 (7:00 PM)

  // Get the current date and time
  const now = new Date();

  // Calculate the time remaining until the next show
  const timeRemaining = nextShowDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown in the specified element
  const countdownElement = document.getElementById("countdown");
  countdownElement.innerHTML = `DISCO STRANGER @ ACM LIVE ROOM FIRDAYS: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

  // Update the countdown every second (1000 milliseconds)
  setTimeout(showCountdown, 1000);
}

// Call the showCountdown function to start the countdown
showCountdown();
