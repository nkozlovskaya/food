window.addEventListener("DOMContentLoaded", () => {
  const tabs = require('./modules/tabs'),
    modal = require('./modules/modal'),
    cards = require('./modules/cards'),
    calc = require('./modules/calc'),
    slider = require('./modules/slider'),
    forms = require('./modules/forms'),
    timer = require('./modules/timer');

  tabs();
  cards();
  calc();
  modal();
  slider();
  forms();
  timer();
});