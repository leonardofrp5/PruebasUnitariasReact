const cities = ['Cúcuta', 'Medllín', 'Santiago de Chile', 'Sao Paulo', 'Rio de Janeiro', 'Frutal'];

const randomCitires = () => {
  return data = cities[Math.floor(Math.random() * cities.length)];
}

const reverseString3 = (str) => {
  return new Promise((resolve, reject) => {
    if(!str) {
      reject(Error('Error'));
    }
    resolve(str.split("").reverse().join(""));
  });
}

module.exports.a = randomCitires;
module.exports.b = reverseString3;
