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
            

            for (let i = 1; i <= 20; i++) { //again, we know there will only be max 20 ingredients in any recipe
               
                const ingredientIndex = meal[`strIngredient${i}`];
                if (ingredientIndex != "") { /*if the result of evaluating for keys entitled `strIngredient${i}`  *IS NOT an empty string, we run the following code*/

                    const ingredients = document.createElement("li");
                    ingredients.innerText = ingredientIndex;
                    ingredientList.appendChild(ingredients);
                }
            }
        });    
};