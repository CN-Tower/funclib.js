const assert = require('power-assert');
const fn = require('../src');

const specs = [
  './core-methods/array.spec',
  './core-methods/function.spec',
  './core-methods/math.spec',
  './core-methods/object.spec',
  './core-methods/pattern.spec',
  './core-methods/string.spec',
  './core-methods/time.spec',
  './core-methods/type.spec',
  './server-methods/fileSys.spec',
  './server-methods/progress.spec',
  './server-methods/logs.spec'
];

specs.forEach(spec => {
  require(spec)(fn, assert);
});