const cities = ['Cúcuta', 'Medllín', 'Santiago de Chile', 'Sao Paulo', 'Rio de Janeiro', 'Frutal'];

const randomCitires = () => {
  return data = cities[Math.floor(Math.random() * cities.length)];
}

module.exports = randomCitires;