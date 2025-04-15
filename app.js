const btn = document.getElementById("img2");
let flag = false;

const cont1 = document.querySelector("#container");
const cont2 = document.querySelector("#container-middle");
const cont3 = document.querySelector("#container-bottom");
const img1 = document.getElementById("img1");
const input = document.getElementById('input');
const addButton = document.querySelector('#container-middle button');
const ul = document.querySelector('ul');

function changeColor() {
  const body = document.querySelector("body");

  if (!flag) {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    cont1.style.border = "1px solid white";
    cont2.style.border = "1px solid white";
    cont3.style.border = "1px solid white";
    img1.setAttribute("src", "./Assets/face2-CsCQZCT0.gif");
    btn.style.filter = "brightness(0) invert(1)";
    input.style.backgroundColor = 'black';
    input.style.color = 'white';
    flag = true;
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    cont1.style.border = "1px solid black";
    cont2.style.border = "1px solid black";
    cont3.style.border = "1px solid black";
    img1.setAttribute("src", "./Assets/face-BoxYhfC1.gif");
    input.style.backgroundColor = 'white';
    input.style.color = 'black';
    btn.style.filter = "none";
    flag = false;
  }
}

btn.addEventListener("click", changeColor);

// Add task
addButton.addEventListener('click', () => {
  const taskText = input.value.trim();

  if (taskText === '') return;

  // Create elements
  const li = document.createElement('li');
  li.style.display = 'flex';
  li.style.alignItems = 'center';
  li.style.justifyContent = 'space-between';
  li.style.padding = '0.5rem 1rem';
  li.style.borderBottom = '1px solid gray';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.style.marginRight = '1rem';

  const span = document.createElement('span');
  span.textContent = taskText;
  span.style.flex = '1';

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑️';
  deleteBtn.style.border = 'none';
  deleteBtn.style.background = 'transparent';
  deleteBtn.style.fontSize = '1.2rem';
  deleteBtn.style.cursor = 'pointer';

  
  deleteBtn.addEventListener('click', () => {
    ul.removeChild(li);
  });

  
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      span.style.textDecoration = 'line-through';
      span.style.opacity = '0.6';
    } else {
      span.style.textDecoration = 'none';
      span.style.opacity = '1';
    }
  });

  
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  ul.appendChild(li);

  input.value = '';
});
