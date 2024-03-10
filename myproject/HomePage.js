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
// const box = document.querySelector('.landing .box');
// const land = document.querySelectorAll('.landing .box .land');
// const dots = document.querySelectorAll('.landing .box .circle span');
// let next = document.getElementById('next');
// let prev = document.getElementById('prev');

// let active = 0 ;
// let landlength = land.length - 1;
// next.onclick = function(){
//     active = active + 1 <= landlength ? active + 1 : 0;
//     reloadslider();
// }
// prev.onclick = function(){
//     active = active - 1 >= 0 ? active - 1 : landlength;
//     reloadslider();
// }

// let refreshslider = setInterval(() =>{next.click()},3000)
// function reloadslider(){
//     let checkleft = land[active].offsetLeft;
//     box.style.left = -checkleft + 'px';

//     let lastactivespan = document.querySelector('span .active');
//     lastactivespan.classList.remove('.active');
//     dots[active].classList.add('.active');
//     clearInterval(refreshslider);
//     refreshslider = setInterval(()=> {next.click()}, 3000);
// }
// dots.forEach((span,key) => {
//     span.addEventListener('click',function(){
//         active = key;
//         reloadslider();
//     })

// })
// window.onresize = function(event) {
//     reloadSlider();
// };
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
let refreshInterval = setInterval(()=> {next.click()}, 1000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    let last_active_dot = document.querySelector('.landing .circle span.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 1000);
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