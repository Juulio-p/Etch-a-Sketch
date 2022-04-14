const body = document.body
const div = document.createElement("div")
div.textContent = "Etch A Sketch" 
body.append(div)

body.style.paddingLeft = "35%"
const container = document.createElement('div');
container.classList.add("container");
container.id = "container";
container.style.backgroundColor = "white";
container.style.width = "440px"
container.style.height ="470px"
container.style.border = "solid black 6px"
container.style.overflow ="auto"
container.style.position ="absolute"
body.append(container);



function makeGrid(size){
  for(let i=0 ; i < size * size; i++) {
    const inDiv = document.createElement("div");
    inDiv.classList.add("inDiv");
    inDiv.style.id = "inDiv"
    inDiv.style.display ="inline-block"
    inDiv.style.border = "solid black 1px"
    inDiv.style.height = "22px"
    inDiv.style.width = "24px"
    inDiv.style.overflow = "hidden";
    inDiv.style.classList = "Draw";
    inDiv.style.id = "16"
  
    inDiv.addEventListener("mouseover", (e) => {
      inDiv.style.backgroundColor = "black";
    });
  
    container.append(inDiv);
  }  

}





let size= 16;
makeGrid(size);


const divWrapper = document.createElement('div');
divWrapper.style.paddingTop = "50%";
document.body.appendChild(divWrapper);





const buttonContainer = document.createElement("div");

document.body.append(buttonContainer);

const changeColor = document.createElement('button');
changeColor.innerHTML = "24x24";
changeColor.classList = "24";
changeColor.type = "submit";
changeColor.style.fontSize = "13px"



changeColor.addEventListener('click', function() {
  alert("Yoooo ")
  let size = prompt("Enter Sze of new grid")
  document.body.removeChild(container);
  makeGrid(size);

});