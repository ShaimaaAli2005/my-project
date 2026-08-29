// Recipe categories array
const recipeList = ["pizza", "carrot", "beef", "chicken", "turkey", "pork", "fish", "crab", "bacon", "ham", "pepperoni", "salami", "ribs"];

// DOM elements
const userSelect = document.getElementById("userSelect");
const recipesContainer = document.getElementById("recipesContainer");

// Populate dropdown menu
(function populateCategories() {
    let options = '<option value="" disabled selected>Select an ingredient...</option>';
    for (const item of recipeList) {
        options += '<option value="' + item + '">' + item.charAt(0).toUpperCase() + item.slice(1) + '</option>';
    }
    userSelect.innerHTML = options;
})();

// Fetch recipes from API
async function getRecipes(searchTerm = 'pizza') {
    recipesContainer.innerHTML = '<div class="text-center col-12"><div class="spinner-border text-primary" role="status"></div><p class="mt-2 text-muted">Loading recipes...</p></div>';

    try {
        let response = await fetch('https://forkify-api.jonas.io/api/v2/recipes?search=' + searchTerm);
        let responseData = await response.json();
        displayRecipes(responseData.data.recipes);
    } catch (err) {
        console.log('Error:', err);
        recipesContainer.innerHTML = '<div class="alert alert-danger text-center col-12">Failed to load recipes. Check your internet connection!</div>';
    }
}

// Display recipes inside cards grid
function displayRecipes(recipes) {
    let content = '';

    if (!recipes || recipes.length === 0) {
        recipesContainer.innerHTML = '<div class="alert alert-warning text-center col-12">No recipes found.</div>';
        return;
    }

    for (const recipe of recipes) {
        content += '<div class="col-12 col-md-6 col-lg-4 col-xl-3">' +
            '<div class="card recipe-card shadow-sm">' +
            '<img src="' + recipe.image_url + '" class="card-img-top recipe-img" alt="' + recipe.title + '">' +
            '<div class="card-body">' +
            '<h6 class="card-title">' + recipe.title + '</h6>' +
            '<p class="card-text">' + recipe.publisher + '</p>' +
            '</div>' +
            '</div>' +
            '</div>';
    }

    recipesContainer.innerHTML = content;
}

// Run initial fetch on page load
getRecipes();