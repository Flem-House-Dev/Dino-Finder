const submitEl = document.getElementById("submitBtn");
const formUserName = document.getElementById('userName');
const formTitle = document.getElementById('title');
const formContent = document.getElementById('content');

// save array of objects to make multiple ones.
// use for loop to render back to page, retrieve arrau. add to it, then parse and save it again
let formArray = [];

const saveFormData = function () {
    const dinoForm = {
        userName: formUserName.value,
        title: formTitle.value,
        content: formContent.value
    };

    formArray = JSON.parse(localStorage.getItem('formArray'));
    // console.log(blogData);

    formArray.push(dinoForm);
    localStorage.setItem('formArray', JSON.stringify(formArray));
}

submitEl.addEventListener('click', function (event) {
    event.preventDefault(event);
    saveFormData();
    window.location.href = "blog.html";
})