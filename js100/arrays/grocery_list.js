let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

for (let i = 0; i < groceryList.length; i++){
  console.log(groceryList[i]);
  delete groceryList[i];
}

console.log(groceryList);

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

groceryList; // []