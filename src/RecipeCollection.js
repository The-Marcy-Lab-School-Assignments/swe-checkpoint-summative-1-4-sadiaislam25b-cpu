// RecipeCollection — a named collection of recipe objects.
// Uses a private field to demonstrate encapsulation.
// Manually test your class by running: node src/RecipeCollection.js

class RecipeCollection {
  #recipes = [];

  // constructor(name) — gives this collection a name.
  constructor(name) {
    // TODO 1
    this.name = name
  }

  // addRecipe(recipe) — adds a recipe object to this collection.
  addRecipe(recipe) {
    // TODO 2
    this.#recipes.push(recipe);
  }

  // getAll() — returns a copy of all recipes so external code cannot
  // directly modify the private #recipes field.
  getAll() {
    // TODO 3
    return [...this.#recipes]
  }

  // getNames() — returns an array of just the recipe name strings.
  getNames() {
    // TODO 4
     this.#recipes.map(recipe => recipe.name);
  }

  // getAverageRating() — returns the average rating of all recipes,
  // rounded to 1 decimal place. Returns 0 if the collection is empty.
  getAverageRating() {
    // TODO 5
    if (this.#recipes.length === 0) {
      return 0;
    }
    const total = this.#recipes.reduce((sum, recipe) => sum + recipe.rating, 0)
    return Number((total / this.#recipes.length).toFixed(1))
  }

  // filterByMealType(mealType) — returns only the recipes whose mealType
  // array includes the given type (e.g. 'Breakfast', 'Dinner').
  filterByMealType(mealType) {
    // TODO 6
    return this.#recipes.filter(recipe => recipe.mealType.includes(mealType))
  }
}

// ===================================================
// How to Verify
// ===================================================
// Uncomment test() below and run: node src/RecipeCollection.js
// Each console.log shows the expected output as a comment.
// All outputs should match before moving on.

const test = () => {
  const myCollection = new RecipeCollection('Weeknight Dinners');
  console.log(myCollection.name);   // 'Weeknight Dinners'
  console.log(myCollection.getAll()); // []

  const pizza = {
    id: 1,
    name: 'Margherita Pizza',
    difficulty: 'Easy',
    rating: 4.6,
    mealType: ['Dinner', 'Lunch']
  };
  const pasta = {
    id: 2,
    name: 'Pasta Carbonara',
    difficulty: 'Medium',
    rating: 4.2,
    mealType: ['Dinner', 'Lunch']
  };
  const oatmeal = {
    id: 3,
    name: 'Banana Oatmeal',
    difficulty: 'Easy',
    rating: 4.8,
    mealType: ['Breakfast']
  };

  myCollection.addRecipe(pizza);
  myCollection.addRecipe(pasta);
  myCollection.addRecipe(oatmeal);

  console.log(myCollection.getNames());         // ['Margherita Pizza', 'Pasta Carbonara', 'Banana Oatmeal']
  console.log(myCollection.getAverageRating()); // 4.5
  console.log(myCollection.filterByMealType('Dinner')); // [pizza, pasta]
};

// test();

export { RecipeCollection };
