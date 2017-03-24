'use strict';

const materialTypes = {

  BOOKS: {
    value: 0
  },

  ELECTRONICS: {
    markup: 0.02,
    value: 1
  },

  FOOD: {
    markup: 0.13,
    value: 2
  },

  PHARMACEUTICALS: {
    markup: 0.075,
    value: 3
  }

};

Object.keys(materialTypes).forEach((key) => {
  materialTypes[key].parent = materialTypes;
});

module.exports = materialTypes;
