'use strict';

const materialTypes = require('./materialTypes');

module.exports = {

  _BASE_MARKUP: 0.05,
  _PEOPLE_MARKUP: 0.012,

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
  calcTotal(params) {

    this._validateParams(params);

    const { costInCents, material, numberOfPeople } = params;

    const materialMarkup = this._getMarkupForMaterial(material);
    const peopleMarkup = numberOfPeople * this._PEOPLE_MARKUP;

    const costWithBaseMarkup = costInCents * (1 + this._BASE_MARKUP);

    return Math.round(costWithBaseMarkup * (1 + materialMarkup + peopleMarkup));
  },

  _validateParams(params) {

    if (!Number.isInteger(params.costInCents)) {
      throw new Error('costInCents must be a valid integer.  Got: ' + JSON.stringify(params.costInCents));
    }

    if (!params.material || params.material.parent !== materialTypes) {
      throw new Error('material must be a valid materialTypes.  Got: ' + JSON.stringify(params.material));
    }

    if (!Number.isInteger(params.numberOfPeople)) {
      throw new Error('numberOfPeople must be a valid integer.  Got: ' + JSON.stringify(params.numberOfPeople));
    }

  },

  _getMarkupForMaterial(material) {
    const materialMarkup = material.markup;
    if (materialMarkup) {
      return materialMarkup;
    }
    return 0;
  },

};