const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const MenuView = require('./views/menu_view.js');
const InfoView = require('./views/info_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  planetsDataModel.bindEvents();

  const menuItems = document.querySelectorAll('li.planet-menu-item');
  const menuView = new MenuView(menuItems);
  menuView.bindEvents();

  const detailsContainer = document.querySelector('section.planet-details');
  const planetDetailsView = new InfoView(detailsContainer);
  planetDetailsView.bindEvents();
});
