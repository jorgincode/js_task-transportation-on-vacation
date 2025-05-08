/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const rentPrice = 40;
  const fullDescont = 50;
  const lessDescont = 20;
  const minDay = 3;
  const maxDay = 7;
  let rentAmount = 0;

  if (days >= maxDay) {
    rentAmount = rentPrice * days - fullDescont;

    return rentAmount;
  }

  if (days >= minDay) {
    rentAmount = rentPrice * days - lessDescont;

    return rentAmount;
  }

  return (rentAmount = rentPrice * days);
}

module.exports = calculateRentalCost;
