//The glorius text content appended on the webpage using JavaScript.
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);



//Red text appended into div Container DOM-style.
const para = document.createElement('p');
para.classList.add('redtext');
para.textContent = 'Hey, I\'m Red!';
para.style.cssText = "color: red";

container.appendChild(para);

//blue h3 appended into div Container DOM-style.
const blueh3 = document.createElement('h3');
blueh3.classList.add('blueh3');
blueh3.textContent = "I'm a blue h3!";
blueh3.style.cssText = "color: blue";

container.appendChild(blueh3);

const chunkydiv = document.createElement('div');
chunkydiv.classList.add('chunkydiv');
chunkydiv.style.cssText = ("border: solid black; background-color: pink");

const h1 = document.createElement("h1");
h1.classList.add('h1');
h1.textContent = "I'm in a div";



const p = document.createElement("p");
p.classList.add('p');
p.textContent = "ME TOO!";

chunkydiv.appendChild(h1);
chunkydiv.appendChild(p);

container.appendChild(chunkydiv);




