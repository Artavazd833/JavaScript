console.log('hello world');
document.getElementById('demo').innerHTML='Hello World';
document.body.onload = addElement;

function addElement () {
  const newDiv = document.createElement("div");
  const newContent = document.createTextNode("Hi there and greetings!");
  newDiv.appendChild(newContent);
  const currentDiv = document.getElementById("div");
  document.body.insertBefore(newDiv, currentDiv);
}

let arr =  [1,2,3, 'apple'];
arr.push(4);
console.log(arr);
document.getElementById('demo').innerHTML=arr;
for(let i= 0 ; i<6; i++){
    let newDiv = document.createElement("div");
    let content = document.createTextNode(arr[i]);
    newDiv.appendChild(content);
    let currentDiv = document.getElementById("div");
    document.body.insertBefore(newDiv, currentDiv);
    newDiv.className = 'foo'+ i;

}


