console.log('hello world');
document.getElementById('demo').innerHTML='Hello World';
document.body.onload = addElement;

function addElement () {
  const newDiv = document.createElement("div");
  let div2 =  document.createElement("div");
  div2.className = 'demo2'
  const newContent = document.createTextNode("Hi there and greetings!");
  const newContent2 = document.createTextNode(Date());
  newDiv.appendChild(newContent);
  div2.appendChild(newContent2);
  const currentDiv = document.getElementById("div1");
  let currentDiv2 = document.getElementById("div2");
  document.body.insertBefore(newDiv, currentDiv);
  document.body.insertBefore(div2, currentDiv2);
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

 

