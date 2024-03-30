const submitEl = document.getElementById("submitBtn");
const formUserName = document.getElementById('userName');
const formTitle = document.getElementById('title');
const formContent = document.getElementById('content');

// --------------------------------------------------------------------

function saveFormData() {

    dinoData = {
        userName: formUserName.value,
        title: formTitle.value,
        content: formContent.value
    };
    
    let dinoArray = JSON.parse(localStorage.getItem('dinoForm')) || [];

    dinoArray.push(dinoData);
    localStorage.setItem('dinoForm', JSON.stringify(dinoArray));

    console.log(dinoArray);
    
}

submitEl.addEventListener('click', function (event) {
    event.preventDefault(event);

    const requiredFields = [formUserName, formTitle, formContent];
    for (const field of requiredFields) {
        if (field.value.trim() === "") {
            alert("Please fill in all fields before submitting.");
            return; 
        }
    }

    saveFormData();
    window.location.href = "blog.html";
})
