console.log('hello world');
document.getElementById('demo').innerHTML='Hello World';
document.body.onload = addElement;

function addElement () {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementsByTagName("div1S");
  document.body.insertBefore(newDiv, currentDiv);
}