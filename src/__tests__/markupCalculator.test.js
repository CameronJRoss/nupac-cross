'use strict';

const materialTypes = require('../materialTypes');
const markupCalculator = require('../markupCalculator');

describe('Markup Calculator', () => {

  it('returns 0 for zero cost', () => {
    expect(markupCalculator.calcTotal({
      costInCents: 0,
      material: materialTypes.ELECTRONICS,
      numberOfPeople: 10
    })).toBe(0);
  });

  it('returns the correct total for 0 people', () => {
    expect(markupCalculator.calcTotal({
      costInCents: 1000,
      material: materialTypes.BOOKS,
      numberOfPeople: 0
    })).toBe(1050);
  });

  it('returns the correct total for a food request', () => {
    expect(markupCalculator.calcTotal({
      costInCents: 129999,
      material: materialTypes.FOOD,
      numberOfPeople: 3
    })).toBe(159158);
  });

  it('returns the correct total for a pharmaceutical request', () => {
    expect(markupCalculator.calcTotal({
      costInCents: 543200,
      material: materialTypes.PHARMACEUTICALS,
      numberOfPeople: 1
    })).toBe(619981);
  });

  it('returns the correct total for a electronics request', () => {
    expect(markupCalculator.calcTotal({
      costInCents: 1000,
      material: materialTypes.ELECTRONICS,
      numberOfPeople: 1
    })).toBe(1084);
  });

  it('returns the correct total for a books request', () => {
    expect(markupCalculator.calcTotal({
      costInCents: 1245695,
      material: materialTypes.BOOKS,
      numberOfPeople: 4
    })).toBe(1370763);
  });

  it('returns an error for a bad cost', () => {
    expect(() => markupCalculator.calcTotal({
      costInCents: 'abc',
      material: materialTypes.BOOKS,
      numberOfPeople: 4
    })).toThrow();
  });

  it('returns an error for a bad material', () => {
    expect(() => markupCalculator.calcTotal({
      costInCents: 123,
      material: 'panda',
      numberOfPeople: 1
    })).toThrow();
  });

  it('returns an error for a bad numberOfPeople', () => {
    expect(() => markupCalculator.calcTotal({
      costInCents: 123,
      material: materialTypes.BOOKS,
      numberOfPeople: 'hi'
    })).toThrow();
  });

  it('returns an error for a negative cost', () => {
    expect(() => markupCalculator.calcTotal({
      costInCents: -500,
      material: materialTypes.BOOKS,
      numberOfPeople: 4
    })).toThrow();
  });

  it('returns an error for a negative number of people', () => {
    expect(() => markupCalculator.calcTotal({
      costInCents: 500,
      material: materialTypes.BOOKS,
      numberOfPeople: -5
    })).toThrow();
  });

});