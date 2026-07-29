/**
 * main.js — App Orchestration & Event Handling
 *
 * This file imports from all other modules and wires the app together.
 * Keep this file focused on event listeners and initialization logic.
 * Do NOT put fetch logic or DOM rendering logic directly in this file.
 */

import { RecipeCollection } from './RecipeCollection.js';
import { getAllRecipes, searchRecipes } from './fetch-helpers.js';
import { renderRecipes, renderError } from './dom-helpers.js';

// =============================================
// Part 1: Create a RecipeCollection Instance
// =============================================
// TODO 1: The app needs a place to store recipes locally so filters
// work without re-fetching. Create a RecipeCollection to hold them.

const recipeCollection = new RecipeCollection('Recipes')
// =============================================
// Part 2: Initialize — Load All Recipes on Page Load
// =============================================
const main = async () => {
  try {
    const recipes = await getAllRecipes();
    recipes.forEach(recipe => recipeCollection.addRecipe(recipe));
    renderRecipes(recipeCollection.getAll());
  } catch (error) {
    renderError('Failed to fetch recipes. Please try again later.');
  } 
  // TODO 2: When the app loads, the recipe grid should automatically populate.
  // If the fetch fails, an error message should appear instead.
  // Verify: open the browser — recipe cards should appear without any interaction.
};

// =============================================
// Part 3: Search Form Handler
// =============================================
const handleSearchSubmit = async (event) => {
  event.preventDefault();
  const query = document.querySelector('#search-input').value
  try {
    const recipes = await searchRecipes(query);
    recipeCollection = new RecipeCollection('Search Results');
    recipes.forEach(recipe => recipeCollection.addRecipe(recipe));
    renderRecipes(recipeCollection.getAll());
  } catch (error) {
    renderError('Failed to search recipes. Please try again later.');
  }
  // TODO 3: When the form is submitted, the grid should update to show
  // only recipes matching the search query.
  // Verify: type "pasta" and hit Search — the results should change.
};

// =============================================
// Part 4: Meal Type Filter Handler
// =============================================
const handleFilterClick = (event) => {
  // Provided: get the clicked button and update the active state
  const btn = event.target.closest('.filter-btn');
  if (!btn) return;
  document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');

  // TODO 4: When a filter button is clicked, only recipes of that meal type
  // should appear. "All" should restore the full list.
  // Verify: click each filter — the grid should update and the button should stay highlighted.
};

// =============================================
// Part 5: Invoke & Wire Up
// =============================================
// TODO 5: Start the app and connect the event handlers so all three
// features work: initial load, search, and filtering.
main();
document.querySelector('#search-form').addEventListener('submit', handleSearchSubmit);
document.querySelector('#filter-buttons').addEventListener('click', handleFilterClick); 