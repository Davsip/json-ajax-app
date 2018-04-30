
  var animalContainer = document.getElementById("animal-info");// variable that points to the empty div ( <div id="animal-info"></div>)

var btn = document.getElementById("btn");  // the BTN var   /, select the html ocument.getElementById("btn")select the html document 
btn.addEventListener("click", function(){ // add a event listener when the button gets clicked, the "click" event // with an anonymous function 

    var ourRequest = new XMLHttpRequest();         // XMLHttpRequest <- this tool will stablish a connection with a URL that we specify and let us send or receive data 
    ourRequest.open("GET", 'https://learnwebcode.github.io/json-example/animals-1.json'); // we need to use a varibale to use a method names open to specify we use ourRequest.open() // GET is to get data from the url tha e want
    ourRequest.onload = function() {    // method called "onload",  using an anonymous function 
       var ourData = JSON.parse(ourRequest.responseText); //JSON.parse will convert the text in the browser in to a JSON method 
        //^^ we saving the data in to a  ariable 
        renderHTML(ourData);
    }; // we defined the our request
    ourRequest.send();
     // next step is add an "Event listener"  to the button on the html page    
});


function renderHTML(data) {  // function to create and add html to the page
   
   var renderHTML = "this is a test"; // with that variable we can loop thru the data.  
  
animalContainer.insertAdjacentHTML('beforeend', htmlString ) // htmlString -> point to the variable
// "animalContainer" target the animal, 
//>container variable and use the method "insertAdjacentHTML" available for the DOM element 

}
