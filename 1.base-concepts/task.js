"use strict"
function solveEquation(a, b, c) {
  let result = [];
  let des = b** 2 - 4 * a *  c;
    if(des == 0) {
      result.push(-b / (2 * a));
    } else if(des > 0) {
      result.push((-b + Math.sqrt(des)) / (2 * a));
      result.push((-b - Math.sqrt(des)) / (2 * a));
    } 
  return result;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if(isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  };
  percent = (percent / 100) / 12;
  let creditBody = amount - contribution;
  let paymentMonth = creditBody * (percent + (percent / (((1 + percent)** countMonths) - 1)));
  let totalMortgage = paymentMonth * countMonths;
  
  return +totalMortgage.toFixed(2);
}
