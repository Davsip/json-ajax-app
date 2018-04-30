
var pageCounter = 1; // increase the clicks by 1 
var animalContainer = document.getElementById("animal-info");// variable that points to the empty div ( <div id="animal-info"></div>)

var btn = document.getElementById("btn");  // the BTN var   /, select the html ocument.getElementById("btn")select the html document 
btn.addEventListener("click", function(){ // add a event listener when the button gets clicked, the "click" event // with an anonymous function 

    var ourRequest = new XMLHttpRequest();         // XMLHttpRequest <- this tool will stablish a connection with a URL that we specify and let us send or receive data 
    ourRequest.open("GET", 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json'); // we need to use a varibale to use a method names open 
    //to specify we use ourRequest.open() 
    // GET is to get data from the url tha e want
    ourRequest.onload = function() {    // method called "onload",  using an anonymous function 
         var ourData = JSON.parse(ourRequest.responseText); //JSON.parse will convert the text in the browser in to a JSON method 
        //^^ we saving the data in to a  ariable 
         renderHTML(ourData);
    }; // we defined the our request
         ourRequest.send();
     // next step is add an "Event listener"  to the button on the html page
     pageCounter++; // increment page variable 
     if (pageCounter >3) {
         btn.classList.add('hide-me');  // adds a CSS class "hide-me" to hide the button after the 3rd click 
     }
});


function renderHTML(data) {  // function to create and add html to the page
   
   var htmlString = ""; // with that variable we can loop thru the data.  
   for (i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";   // the for loop goes in the array , loop
    // and increment the elements by 1 
    for (ii = 0; ii < data[i].foods.likes.length; ii++) {  // for loop inside a   for loop 
        if (ii == 0) {
          htmlString += data[i].foods.likes[ii];  
        } else {
          htmlString += "  and " + data[i].foods.likes[ii];
        }
      }
      htmlString += '  and dislikes ';
      for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
        if (ii == 0) {
          htmlString += data[i].foods.dislikes[ii];
        } else {
          htmlString += "   and  " + data[i].foods.dislikes[ii];
        }
      }
  
      htmlString += '.</p>';
  
   

   }
  
animalContainer.insertAdjacentHTML('beforeend', htmlString);
 // htmlString -> point to the variable
// "animalContainer" target the animal, 
//>container variable and use the method "insertAdjacentHTML" available for the DOM element 

}
