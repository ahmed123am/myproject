
// start header
const toggleBtn=document.querySelector(".toggle_btn");
const toggleBtnIcon=document.querySelector(".toggle_btn i");
const dropMenu=document.querySelector(".drop_menu");
toggleBtn.onclick = function(){
    dropMenu.classList.toggle('open');
    const isOpen=dropMenu.classList.contains('open');
    toggleBtnIcon.classList = isOpen?"fa-solid fa-xmark":"fa-solid fa-bars";
}
// end header



// start landing

let slider = document.querySelector('.landing .box');
let items = document.querySelectorAll('.landing .box .land');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.landing .circle span');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 5000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    let last_active_dot = document.querySelector('.landing .circle span.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 5000);
}
dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};



// end landing
// slider = landing   list = box   item = land 


// start about us
let popup = document.querySelector(".about");
let poplink=document.querySelector(".poplink");
let closepop =document.getElementById("close");

poplink.onclick = function(){
    popup.classList.add("open-about");
}
closepop.onclick = function(){
    popup.classList.remove("open-about");
}
// end about us
// start forms
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const form =document.getElementById('forms');
const log = document.getElementById('one');
const sign = document.getElementById('two');
const closeform = document.getElementById('end');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});
loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
log.onclick = function(){
    form.classList.add("forms-open");
    container.classList.remove("active");
};
sign.onclick = function(){
    form.classList.add("forms-open");
    container.classList.add("active");
};
closeform.onclick = function(){
    form.classList.remove("forms-open");
};
// end forms

