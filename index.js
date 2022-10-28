/*
Create a Recipe App by integrating the "TheMealDB" API's random recipe endpoint.  When the page first loads, it should display a random recipe,
 complete with a picture of the meal, name of the meal, a button to watch the YouTube video, and the instructions of how to make the meal, along with the list of ingredients.
-When a user clicks a button called "new recipe", it should show a new random and update the content on the page using JavaScript.

    Components:
    -------------

    <h1 class="header">Let's Cook!</h1>
    <p id="title"></p>
    <img id="photo"/>
    <p id="ingredients"></p>
    <p id="instructions"></p>
    <button id="video">How-To Video</button>
    <button id="newRandom" onclick="loadRandom()">New Recipe</button>

    - will load function onload, and will load the same function when the button is pushed.
*/ 
function loadRandom() {
    const title = document.getElementById("title");
    const photo = document.getElementById("photo");
    //const ingredients = document.getElementById("ingredients");
    const instructions = document.getElementById("instructions");
    const videoBtn = document.getElementById("videoBtn");
    const videoLink = document.getElementById("makeItWork");
    const ingredient1 = document.getElementById("ingredient1");
    const videoBox = document.getElementById("videoBox");
    const video = document.createElement("video");

    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(meals => {

            const meal = meals.data.meals[0];
            title.innerText = meal.strMeal;
            photo.src = meal.strMealThumb;
            instructions.innerText = meal.strInstructions;
            video.src = meal.strYoutube;

            if (meal.strIngredient1 != "") {
                const ingredient1 = document.createElement("li");
                ingredient1.innerText = meal.strIngredient1;
                ingredientList.appendChild(ingredient1);
            }
            if (meal.strIngredient2 != "") {
                const ingredient2 = document.createElement("li");
                ingredient2.innerText = meal.strIngredient2;
                ingredientList.appendChild(ingredient2);
            }
            if (meal.strIngredient3 != "") {
                const ingredient3 = document.createElement("li");
                ingredient3.innerText = meal.strIngredient3;
                ingredientList.appendChild(ingredient3);
            }
            if (meal.strIngredient4 != "") {
                const ingredient4 = document.createElement("li");
                ingredient4.innerText = meal.strIngredient4;
                ingredientList.appendChild(ingredient4);
            }
            if (meal.strIngredient5 != "") {
                const ingredient5 = document.createElement("li");
                ingredient5.innerText = meal.strIngredient5;
                ingredientList.appendChild(ingredient5);
            }
            if (meal.strIngredient6 != "") {
                const ingredient6 = document.createElement("li");
                ingredient6.innerText = meal.strIngredient6;
                ingredientList.appendChild(ingredient6);
            }
            if (meal.strIngredient7 != "") {
                const ingredient7 = document.createElement("li");
                ingredient7.innerText = meal.strIngredient7;
                ingredientList.appendChild(ingredient7);
            }
            if (meal.strIngredient8 != "") {
                const ingredient8 = document.createElement("li");
                ingredient8.innerText = meal.strIngredient8;
                ingredientList.appendChild(ingredient8);
            }
            if (meal.strIngredient9 != "") {
                const ingredient9 = document.createElement("li");
                ingredient9.innerText = meal.strIngredient9;
                ingredientList.appendChild(ingredient9);
            }
            if (meal.strIngredient10 != "") {
                const ingredient10 = document.createElement("li");
                ingredient10.innerText = meal.strIngredient10;
                ingredientList.appendChild(ingredient10);
            }
            if (meal.strIngredient11 != "") {
                const ingredient11 = document.createElement("li");
                ingredient11.innerText = meal.strIngredient11;
                ingredientList.appendChild(ingredient11);
            }
            if (meal.strIngredient12 != "") {
                const ingredient12 = document.createElement("li");
                ingredient12.innerText = meal.strIngredient12;
                ingredientList.appendChild(ingredient12);
            }
            if (meal.strIngredient13 != "") {
                const ingredient13 = document.createElement("li");
                ingredient13.innerText = meal.strIngredient13;
                ingredientList.appendChild(ingredient13);
            }
            if (meal.strIngredient14 != "") {
                const ingredient14 = document.createElement("li");
                ingredient14.innerText = meal.strIngredient14;
                ingredientList.appendChild(ingredient14);
            }
            if (meal.strIngredient15 != "") {
                const ingredient15 = document.createElement("li");
                ingredient15.innerText = meal.strIngredient15;
                ingredientList.appendChild(ingredient15);
            }
            if (meal.strIngredient16 != "") {
                const ingredient16 = document.createElement("li");
                ingredient16.innerText = meal.strIngredient16;
                ingredientList.appendChild(ingredient16);
            }
            if (meal.strIngredient17 != "") {
                const ingredient17 = document.createElement("li");
                ingredient17.innerText = meal.strIngredient17;
                ingredientList.appendChild(ingredient17);
            }
            if (meal.strIngredient18 != "") {
                const ingredient18 = document.createElement("li");
                ingredient18.innerText = meal.strIngredient18;
                ingredientList.appendChild(ingredient18);
            }
            if (meal.strIngredient19 != "") {
                const ingredient19 = document.createElement("li");
                ingredient19.innerText = meal.strIngredient19;
                ingredientList.appendChild(ingredient19);
            }
            if (meal.strIngredient20 != "") {
                const ingredient20 = document.createElement("li");
                ingredient20.innerText = meal.strIngredient20;
                ingredientList.appendChild(ingredient20);
            }
           
        });
}
function getVideo() {
    const video = document.createElement("video");
    videoBox.appendChild(video);
    
};