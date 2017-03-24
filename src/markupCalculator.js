'use strict';

const materialTypes = require('./materialTypes');

module.exports = {

  _BASE_MARKUP: 0.05,

  /**
   * Calculates an estimate based on item costs, number of numberOfPeople and material type.
   *
   * @param {object}        params
   * @param {number}        params.costInCents - the cost of the material in cents
   * @param {materialTypes} params.material - the type of material to be estimated
   * @param {number}        params.numberOfPeople - the number of numberOfPeople required to complete the job
   *
   * @returns {number} the total amount estimated in cents.
   */
  calcTotal({ costInCents, material, numberOfPeople }) {

    const materialMarkup = this._getMarkupForMaterial(material);
    const peopleMarkup = this._getMarkupForNumberOfPeople(numberOfPeople);

    const costWithBaseMarkup = costInCents * (1 + this._BASE_MARKUP);

    return Math.round(costWithBaseMarkup * (1 + materialMarkup + peopleMarkup));
  },

  _getMarkupForMaterial(material) {
    if (material === materialTypes.FOOD) {
      return 0.13;
    } else if (material === materialTypes.PHARMACEUTICALS) {
      return 0.075;
    } else if (material === materialTypes.ELECTRONICS) {
      return 0.02;
    } else {
      return 0;
    }
  },

  _getMarkupForNumberOfPeople(numberOfPeople) {
    return numberOfPeople * 0.012;
  }

};