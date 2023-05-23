let calculateSalary = function (dirtysalary) {
  let cleansalary = 0.35;
  if (dirtysalary >= 100000) {
    cleansalary = 0.45;
  }
  let netSalary = dirtysalary * (1 - cleansalary);
  return Math.round(netSalary);
};
console.log(calculateSalary(70000));
console.log(calculateSalary(100000));