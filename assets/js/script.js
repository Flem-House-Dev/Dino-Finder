const submitEl = document.getElementById("submitBtn");
const formUserName = document.getElementById('userName');
const formTitle = document.getElementById('title');
const formContent = document.getElementById('content');

const  saveFormData =  function() {

    const dinoForm = {
        userName: formUserName.value,
        title: formTitle.value,
        content: formContent.value
    };

    localStorage.setItem('dinoForm', JSON.stringify(dinoForm));
}

submitEl.addEventListener('click', function(event) {
    event.preventDefault(event);
    saveFormData();
    window.location.href = "blog.html";
})