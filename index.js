/*
Create a Recipe App by integrating the "TheMealDB" API's random recipe endpoint.  When the page first loads, it should display a random recipe,
 complete with a picture of the meal, name of the meal, a button to watch the YouTube video, and the instructions of how to make the meal, along with the list of ingredients.
-When a user clicks a button called "new recipe", it should show a new random and update the content on the page using JavaScript.
*/ 
function loadRandom() {
    const title = document.getElementById("title");
    const photo = document.getElementById("photo");
    const instructions = document.getElementById("instructions");
    const ingredientList = document.getElementById("ingredientList");
    const videoBox = document.getElementById("videoBox");

    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(meals => {

            const meal = meals.data.meals[0]; /*If we create a variable to equal the output of each call ("meals"), we can select which values we need... */
            title.innerText = meal.strMeal;/*...such as strMeal, strInstructions, etc.*/
            photo.src = meal.strMealThumb;
            instructions.innerText = meal.strInstructions;  
            const splitUrl = meal.strYoutube.split("="); /*Here we use the .split method to separate the meal.strYoutube string by =  */
            const videoId = splitUrl[1];                /*which (in this case) isolates the unique identifier for each video link*/
            videoBox.src = "https://www.youtube.com/embed/" + videoId;  /*we then use concatenation to join the strings to create the value of the new src attribute for the <iframe> element*/

            for (let i = 1; i <= 20; i++) { /*again, we know there will only be max 20 ingredients in any recipe*/
               
                const ingredientIndex = meal[`strIngredient${i}`];
                if (ingredientIndex != "") { /*if the result of evaluating for keys entitled `strIngredient${i}`  *IS NOT an empty string, we run the following code*/

                    const ingredients = document.createElement("li");
                    ingredients.innerText = ingredientIndex;
                    ingredientList.appendChild(ingredients);
                }
            }
        });    
};