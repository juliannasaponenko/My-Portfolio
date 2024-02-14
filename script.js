const burger = document.querySelector(".promo_burger");
const menu = document.querySelector(".menu");
const myModal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");


burger.addEventListener("click", function() {
    this.classList.toggle("active");
    menu.classList.toggle("menu_active");
});

document.querySelector(".menu_close").addEventListener("click", function() {
    burger.classList.toggle("active");
    menu.classList.toggle("menu_active");
});

document.addEventListener("click", function(e) {
    if (e.target === menu) {
        burger.classList.toggle("active");
        menu.classList.toggle("menu_active");
    }
});



document.querySelector('.contacts_form').addEventListener('submit', function(event) {
    event.preventDefault();
    var values = document.querySelectorAll('.value');
    var isValid = true;

    values.forEach(element => {
        if (element.value.length < 3) {
            element.nextElementSibling.textContent = "Введено некорректное значение!";
            element.style.border = "1px solid red";
            isValid = false;
        }
        else {
            element.nextElementSibling.textContent = ""; // Очистить сообщение об ошибке
            element.style.border = "1px solid #ccc"; // Сбросить границу на значение по умолчанию
        }
    }); 

    if (isValid) {
        myModal.style.display = "block";
        var values = document.querySelectorAll('.value');
        values.forEach(element => {
        element.value = "";
    });
    }
});



closeModalBtn.addEventListener("click", function(e) {
    e.preventDefault();
    myModal.style.display = "none";
});

document.addEventListener("click", function(e) {
    if (e.target === myModal) {
        myModal.style.display = "none";
    }
});