'use strict';

const materialTypes = require('./materialTypes');

module.exports = {

  BASE_MARKUP: 0.05,

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

    const costWithBaseMarkup = costInCents * (1 + this.BASE_MARKUP);

    return Math.round(costWithBaseMarkup * (1 + materialMarkup + peopleMarkup));
  },

  _getMarkupForMaterial(material) {
    if (material === materialTypes.FOOD) {
      return 0.13;
    }
  },

  _getMarkupForNumberOfPeople(numberOfPeople) {
    return numberOfPeople * 0.012;
  }

};