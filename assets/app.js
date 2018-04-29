var ourRequest = new XMLHttpRequest();         // XMLHttpRequest <- this tool will stablish a connection with a URL that we specify and let us send or receive data 
 ourRequest.open("GET", 'https://learnwebcode.github.io/json-example/animals-1.json'); // we need to use a varibale to use a method names open to specify we use ourRequest.open() // GET is to get data from the url tha e want
 ourRequest.onload = function() {    // method called "onload",  using an anonymous function 
     console.log(ourRequest.responseText);   // log it to the console 
 };