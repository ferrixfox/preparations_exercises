function bmi(centimeters, kilograms){
  let meters = centimeters/100
  return (kilograms / meters**2).toFixed(2);
}

console.log(bmi(180, 80));