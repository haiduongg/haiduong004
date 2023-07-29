// Dark Mode Toggle
let darkMode = document.getElementById('darkMode-icon');
darkMode.onclick = function () {
  document.body.classList.toggle('dark-theme');
  if (document.body.classList.contains('dark-theme')) {
    darkMode.setAttribute('class', 'bx bxs-moon');
    document.querySelector('.header__logo-github').style.filter =
      'invert(100%)';
    document.body.style.transition = '1s';
  } else {
    document.querySelector('.header__logo-github').style.filter =
      'invert(0%)';
    darkMode.setAttribute('class', 'bx bxs-sun');
  }
};

// Tabs UI
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.header__menu-item a');
const panes = $$('section');

tabs.forEach((tab, index) => {
  tab.onclick = function () {
    const pane = panes[index];

    $('.header__menu-item a.active').classList.remove('active');
    $('section.pg-active').classList.remove('pg-active');

    this.classList.add('active');
    pane.classList.add('pg-active');
  };
});
