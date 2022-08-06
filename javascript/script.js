const menuBurger = document.querySelector('.menu-burger');
const list = document.querySelector('.list');
const listLI = document.querySelector('.list li');
var bool = true;

menuBurger.addEventListener('click', () => {
    if(bool == true){
        menuBurger.classList.add('open');
        list.classList.add('show');
        bool = false;
    } else {
        menuBurger.classList.remove('open');
        list.classList.remove('show');
        bool = true;

    }
})
