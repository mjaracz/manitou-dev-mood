const RandomKey = require('../utils/RandomKey');

function generateKey(data, arrID, next) {
  let exsKey;
  let key;

  if(arrID.length) key = new RandomKey(arrID, data.length).startMachine();
  exsKey = !isNaN(key);

  if(exsKey) {
    next(new Error('bład maszyny losującej'));
    return res.status(404).send('bład maszyny losującej')
  }
  return key
}

module.exports = generateKey;