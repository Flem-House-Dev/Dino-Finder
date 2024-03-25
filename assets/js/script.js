const submitEl = document.getElementById("submitBtn");


const  saveFormData =  function() {
    const formEl = document.getElementById("formDinoData");
    const formData = new FormData(formEl);

    let formObject = {};

    formData.forEach(function(value,key){
        formObject[key] = value;
    })

    console.log(formObject);
    
    localStorage.setItem('dinoForm', JSON.stringify(formObject));
}

submitEl.addEventListener('click', function(event) {
    event.preventDefault(event);
    saveFormData();
    window.location.href = "blog.html";
})