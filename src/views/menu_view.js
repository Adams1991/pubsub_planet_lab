const PubSub = require('../../helpers/pub_sub.js');

const PlanetsMenuView = function(menuItems) {
  this.menuItems = menuItems;
};

PlanetsMenuView.prototype.bindEvents = function() {
  this.menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', (event) => {
      const selectedPlanetName = event.target.id;
      PubSub.publish('MenuView:selected', selectedPlanetName);
    });
  });
};

module.exports = PlanetsMenuView;
