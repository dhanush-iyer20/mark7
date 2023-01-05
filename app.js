var btn = document.querySelector("#button");
var txtarea = document.querySelector("textarea");
var outputdiv = document.querySelector("#Outputdiv");
const output = document.createElement("div");



btn.addEventListener("click", function(){
    text = txtarea.value
    url = 'https://api.funtranslations.com/translate/shakespeare.json' + "?text=" + text
    fetch(url)
    .then((response) => response.json())
    .then((data) => outputdiv.innertext = data)
    .catch((err) => console.log(err))
})


