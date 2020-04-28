// localStorage.setItem("number", 1);

// console.log(localStorage.getItem("number"));

// localStorage.removeItem("number");

// localStorage.clear();

window.addEventListener("DOMContentLoaded", function(){
    let checkBox = document.getElementById('rememberMe'),
        change = document.getElementById('change'),
        form = document.getElementsByTagName('form')[0];

    if(localStorage.getItem("isChecked") === "true") {
        checkBox.checked = true;
    }

    // checkBox.addEventListener('click', function() {
    //     localStorage.setItem("isChecked", true);
    // });

    // if (localStorage.getItem("bg") === "changed"){
    //     form.style.backgroundColor = "#FF4766";
    // }

    // change.addEventListener('click', function(){
    //     localStorage.setItem('bg', 'changed');
    //     form.style.backgroundColor = "#FF4766";
    // });

    let person = {
        name: "Alex",
        age: 20,
        tech: ["mobile", "notebook"]
    };
    
    let serializedPersone = JSON.stringify(person);
    localStorage.setItem("Alex", serializedPersone);

    console.log(JSON.parse(localStorage.getItem("Alex")));
});