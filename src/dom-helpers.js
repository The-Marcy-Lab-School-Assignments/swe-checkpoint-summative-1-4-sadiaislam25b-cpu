// DOM Helpers
//
// Functions for reading from and writing to the DOM.
// These functions should NOT make any fetch() calls.

// renderRecipes(recipes) — clears the recipe list and renders a card for
// each recipe showing its image, name, cuisine + difficulty, and rating.
// Also updates the recipe count display.
//
// After this function runs, #recipes-list should contain one <li> per recipe:
//
//   <ul id="recipes-list">
//     <li>
//       <img src="https://..." alt="Margherita Pizza">
//       <h3>Margherita Pizza</h3>
//       <p>Italian · Easy</p>
//       <p>★ 4.6</p>
//     </li>
//     <!-- one <li> per recipe -->
//   </ul>
//
// What you'll need: document.querySelector, element.innerHTML, element.textContent,
// document.createElement, element.setAttribute, element.append, array iteration.
export const renderRecipes = (recipes) => {
  // TODO 1
  const recipesList = document.querySelector('#recipes-list');
  const recipeCount = document.querySelector("#recipe-count");

  
   recipeCount.textContent = `${recipes.length} Recipes`;
   recipes.forEach(recipe => {
     const li = document.createElement('li');
     const img = document.createElement('img');
     img.setAttribute('src', recipe.image);
     img.setAttribute('alt', recipe.name);
     const h3 = document.createElement('h3');
     h3.textContent = recipe.name;
     const p1 = document.createElement('p');
     p1.textContent = `${recipe.cuisine} · ${recipe.difficulty}`;
     const p2 = document.createElement('p');
     p2.textContent = `★ ${recipe.rating}`;
     
     li.append(img, h3, p1, p2);
     recipesList.append(li);
   });      
};

// renderError(message) — shows an error message on the page when something
// goes wrong, or hides it when the message is cleared.
//
// The #error-message element starts with the .hidden class in index.html.
// A truthy message should make it visible; a falsy message should hide it again.
//
// What you'll need: document.querySelector, element.textContent,
// element.classList.add, element.classList.remove.
export const renderError = (message) => {
  // TODO 2
  const errorMessageElement = document.querySelector('#error-message');
  if (message) {
    errorMessageElement.textContent = message;
    errorMessageElement.classList.remove('hidden');
  } else {
    errorMessageElement.classList.add('hidden');
  }
};
