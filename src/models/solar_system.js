const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function() {
  PubSub.subscribe('MenuView:selected', (event) => {
    const chosenPlanetName = event.detail;
    const selectedPlanetObject = this.findByName(chosenPlanetName);
    PubSub.publish('SolarSystem:planet-ready', selectedPlanetObject);
  });
};

SolarSystem.prototype.findByName = function(searchName) {
  const foundPlanet = this.planets.find((currentPlanet) => {
    return currentPlanet.name === searchName;
  });
  return foundPlanet;
};

module.exports = SolarSystem;
