// Dark Mode Toggle
let darkMode = document.getElementById('darkMode-icon');
darkMode.onclick = function () {
  document.body.classList.toggle('dark-theme');
  if (document.body.classList.contains('dark-theme')) {
    darkMode.setAttribute('class', 'bx bxs-moon');
    document.body.style.transition = '1s';
  } else {
    darkMode.setAttribute('class', 'bx bxs-sun');
  }
};

// Tabs UI