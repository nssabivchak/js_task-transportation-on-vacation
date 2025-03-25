/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;
  let totalCost = days * costPerDay;

  if (days >= 7) {
    totalCost -= 50; // Знижка $50 при оренді 7+ днів
  } else if (days >= 3) {
    totalCost -= 20; // Знижка $20 при оренді 3+ днів
  }

  return totalCost;
}

module.exports = calculateRentalCost;
