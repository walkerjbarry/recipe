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
    const ingredients = document.getElementById("ingredients");
    const instructions = document.getElementById("instructions");
    const video = document.getElementById("video");

    
   axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
       .then(meals => {
           
               const meal = {
                   title: meals.data.strMeal,
                   photo: meals.data.strMealThumb,
                   instructions: meals.data.strInstructions,
               };
                   title.innerText = meal.title;
                   photo.innerText = meal.photo;
                   instructions.innerText = meal.instructions;
                   //video.innerText = meals.data[i].strYoutube;
               
     });
    //function getVideo() {
}