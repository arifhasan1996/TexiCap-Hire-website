const navMenu = document.getElementById('navMenu');
const bars = document.getElementById('menu');
const close = document.getElementById('close');
const navLinks = document.querySelectorAll('nav-item')
bars.onclick = function(){
    navMenu.style.top = '0'
}
close.onclick = function(){
    navMenu.style.top = '-100%'
}

// navLinks.forEach('click', () =>{
//     if(navMenu.style.top == '0'){
//         navMenu.style.top = "-100%"
//     }
//     else{

//     }
// })