const PubSub = require('../../helpers/pub_sub.js');

const InfoView = function(container) {
  this.container = container;
};

InfoView.prototype.bindEvents = function() {
  PubSub.subscribe('SolarSystem:planet-ready', (event) => {
    const planetObject = event.detail;
    this.render(planetObject);
  });
};

InfoView.prototype.render = function(planet) {
  this.container.innerHTML = '';

  const heading = this.createHeading(planet);
  const list = this.createList(planet);
  const image = this.createImage(planet);

  this.container.appendChild(heading);
  this.container.appendChild(list);
  this.container.appendChild(image);
};

InfoView.prototype.createHeading = function(planet) {
  const heading = document.createElement('h2');
  heading.textContent = planet.name;
  return heading;
};

InfoView.prototype.createImage = function(planet) {
  const img = document.createElement('img');
  img.classList.add('medium-image');
  img.src = planet.image;
  return img;
};

InfoView.prototype.createList = function(planet) {
  const list = document.createElement('ul');

  const day = this.createLi(`Day: ${planet.day} Earth days`, list);
  const orbit = this.createLi(`Orbit: ${planet.orbit} Earth days`, list);
  const surfaceArea = this.createLi(
    `Surface Area: ${planet.surfaceArea} Earths`,
    list);
  const volume = this.createLi(`Volume: ${planet.volume} Earths`, ist);
  const gravity = this.createLi(`Gravity: ${planet.gravity}g`, list);
  const moons = this.createLi(`Moons: ${planet.moons}`, list);

  return list;
};

InfoView.prototype.createLi = function(textContent, ul) {
  const li = document.createElement('li');
  li.textContent = textContent;
  ul.appendChild(li);
};

module.exports = InfoView;
