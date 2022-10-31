let hamburger = document.querySelector('.hamburger');
let closeMenu = document.querySelector('.close-menu');
let navlist = document.querySelector('.list');


hamburger.addEventListener('click' , ()=>{  
hamburger.style.display = 'none';
closeMenu.style.display = 'block';
navlist.style.display = 'block';
})

closeMenu.addEventListener('click' , ()=>{  
    hamburger.style.display = 'block';
    closeMenu.style.display = 'none';
    navlist.style.display = 'none';

})