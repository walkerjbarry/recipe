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
    const instructions = document.getElementById("instructions");
    //const videoBox = document.getElementById("videoBox");
    const ingredientList = document.getElementById("ingredientList");
    const videoBox = document.getElementById("videoBox");

    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(meals => {

            const meal = meals.data.meals[0]; /*If we create a variable to equal the output of each call ("meals"), we can select which values we need... */
            title.innerText = meal.strMeal;/*...such as strMeal, strInstructions, etc.*/
            photo.src = meal.strMealThumb;
            instructions.innerText = meal.strInstructions;  
            videoBox.src = meal.strYoutube;
                                           
                                                                 
            const strIngredient1 = meal.strIngredient1; 
            const strIngredient2 = meal.strIngredient2;
            const strIngredient3 = meal.strIngredient3;
            const strIngredient4 = meal.strIngredient4;
            const strIngredient5 = meal.strIngredient5;
            const strIngredient6 = meal.strIngredient6;
            const strIngredient7 = meal.strIngredient7;
            const strIngredient8 = meal.strIngredient8;
            const strIngredient9 = meal.strIngredient9;
            const strIngredient10 = meal.strIngredient10;
            const strIngredient11 = meal.strIngredient11;
            const strIngredient12 = meal.strIngredient12;
            const strIngredient13 = meal.strIngredient13;
            const strIngredient14 = meal.strIngredient14;
            const strIngredient15 = meal.strIngredient15;
            const strIngredient16 = meal.strIngredient16;
            const strIngredient17 = meal.strIngredient17;
            const strIngredient18 = meal.strIngredient18;
            const strIngredient19 = meal.strIngredient19;
            const strIngredient20 = meal.strIngredient20;

            for (let i = 1; i <= 20; i++) { //again, we know there will only be max 20 ingredients in any recipe
               
                if ((eval(`strIngredient${i}`)) != "") { /*if the result of evaluating for keys entitled `strIngredient${i}` 
                                                                      *IS NOT an empty string, we run the following code*/
                    const ingredients = document.createElement("li");
                    ingredients.innerText = eval(`strIngredient${i}`);
                    ingredientList.appendChild(ingredients);
                }
            }
        });    
};