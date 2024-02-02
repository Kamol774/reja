let hisob = {};

hisob.kopaytirish = (a, b) => {
  return a * b;
};

hisob.qoshish = (a, b) => {
  return a + b;
};

hisob.ayirish = (a, b) => {
  return a - b;
};

hisob.bulish = (a, b) => {
  return a / b;
};

module.exports = hisob;