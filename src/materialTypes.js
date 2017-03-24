'use strict';

/**
 * The types of materials, including their markup percentages if applicable
 *
 * @enum
 */
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

const decorateEnumValuesWithParentType = () => {
  Object.keys(materialTypes).forEach((key) => {
    materialTypes[key].parent = materialTypes;
  });
};

decorateEnumValuesWithParentType();

module.exports = Object.freeze(materialTypes);
