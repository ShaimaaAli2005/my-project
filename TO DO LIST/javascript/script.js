// Array of predefined recipe ingredients/categories
const recipeList = ["pizza", "carrot", "beef", "chicken", "turkey", "pork", "fish", "crab", "bacon", "ham", "pepperoni", "salami", "ribs"];

// Get references to DOM elements
const userSelect = document.getElementById("userSelect");
const recipesContainer = document.getElementById("recipesContainer");

// Immediately Invoked Function Expression (IIFE) to populate the dropdown on load
(function populateDropdown() {
    let selectOptions = '<option value="" disabled selected>Choose an ingredient...</option>';
    for (const option of recipeList) {
        // Capitalize the first letter for display
        const displayName = option.charAt(0).toUpperCase() + option.slice(1);
        selectOptions += <option value="${option}">${displayName}</option>;
    }
    userSelect.innerHTML = selectOptions;
})();

// Async function to fetch recipes from the Forkify API
async function getRecipes(searchTerm = 'pizza') {
    // Show a loading message while fetching data
    recipesContainer.innerHTML = '<div class="text-center col-12"><div class="spinner-border text-primary" role="status"></div><p class="mt-2 text-muted">Loading delicious recipes...</p></div>';

    try {
        // Fetch data from the external API
        let response = await fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=${searchTerm}`);
        let responseData = await response.json();
        
        // Pass the recipes array to the display function
        displayRecipes(responseData.data.recipes);
    } catch (err) {
        // Log and display an error message if the request fails
        console.log('An Error:', err);
        recipesContainer.innerHTML = '<div class="alert alert-danger text-center col-12">Failed to load recipes. Please check your connection!</div>';
    }
}

// Initial call to display recipes on page load (defaults to pizza)
getRecipes();

// Function to dynamically generate HTML cards for each recipe and insert them into the grid
function displayRecipes(recipes) {
    let content = '';
    
    // Check if any recipes were found
    if (!recipes || recipes.length === 0) {
        recipesContainer.innerHTML = '<div class="alert alert-warning text-center col-12">No recipes found for this ingredient.</div>';
        return;
    }

    // Loop through each recipe object
    for (const recipe of recipes) {
        // Construct the HTML structure for a single recipe card
        content += 
            `<div class="col-12 col-md-6 col-lg-4 col-xl-3">
                <div class="card recipe-card shadow-sm">
                    <img src="${recipe.image_url}" class="card-img-top recipe-img" alt="${recipe.title}">
                    <div class="card-body">
                        <h6 class="card-title">${recipe.title}</h6>
                        <p class="card-text">${recipe.publisher}</p>
                    </div>
                </div>
            </div>`
        ;
    }

    // Insert the generated content into the container
    recipesContainer.innerHTML = content;
}