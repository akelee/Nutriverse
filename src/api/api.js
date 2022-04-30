export function getNutritionInfo() {
  return fetch(
    `https://api.spoonacular.com/recipes/716429/information?apiKey=6d23d6c9c2c24ababc529c8f144b3628&includeNutrition=true`
  );
}

// https://api.spoonacular.com/food/products/search?query=yoghurt&apiKey=6d23d6c9c2c24ababc529c8f144b3628
