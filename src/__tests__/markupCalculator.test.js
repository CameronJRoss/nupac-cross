'use strict';

const materialTypes = require('../materialTypes');
const markupCalculator = require('../markupCalculator');

describe('Markup Calculator', () => {

  it('returns the correct total for a food request', () => {
    expect(markupCalculator.calcTotal({
      costInCents: 129999,
      material: materialTypes.FOOD,
      numberOfPeople: 3
    })).toBe(159158);
  });

});