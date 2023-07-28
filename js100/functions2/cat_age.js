function catAge(humanAge){
  let catYears = 0;
  for (let i = 0; i <= humanAge; i++){
    if (i === 0) continue;
    else if (i === 1){
      catYears += 15;
    }
    else if (i === 2){
      catYears += 9;
    }
    else{
      catYears += 4;
    }
  }
  console.log(catYears);
}

catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32