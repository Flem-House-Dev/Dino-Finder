const blogContainer = document.getElementById('blog-section');
const dinoArray = JSON.parse(localStorage.getItem('dinoForm')) || [];

function displayDinos(formData) {

    let newDinoDiv = document.createElement('div');
    newDinoDiv.classList.add('dino-div');
    
    newDinoDiv.innerHTML = 
    `<h4>Title: ${formData.title}</h4> 
    <p>${formData.content}</p> 
    <h6>Posted by: ${formData.userName}</h6>`;

    blogContainer.appendChild(newDinoDiv);
}

for (let i = 0; i < dinoArray.length; i++) {
    const currentDino = dinoArray[i];
    displayDinos(currentDino);
  }