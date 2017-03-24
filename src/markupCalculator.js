'use strict';

module.exports = {

  /**
   * Calculates an estimate based on item costs, number of people and material type.
   *
   * @param {object}        params
   * @param {number}        params.costInCents - the cost of the material in cents
   * @param {materialTypes} params.material - the type of material to be estimated
   * @param {number}        params.people - the number of people required to complete the job
   *
   * @returns {number} the total amount estimated in cents.
   */
  calcTotal({ costInCents, material, people }) {
    return null;
  }

};