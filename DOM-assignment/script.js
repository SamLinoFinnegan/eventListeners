let btn = document.getElementById('mybutton');
let toggleColorBtn = document.getElementById('changeColorBtn');
let body = document.querySelector('body')

const colorBtn = function () {
    body.classList.toggle('red-background')
}

btn.addEventListener("click", function () {
    alert("The button was clicked")
})
toggleColorBtn.addEventListener('click', colorBtn)