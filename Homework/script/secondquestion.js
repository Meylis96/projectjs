'use strict';

let age = document.getElementById('age');
function showUser(surname, name) {
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
showUser();

showUser.apply(age, ["Горький","Максим"]);