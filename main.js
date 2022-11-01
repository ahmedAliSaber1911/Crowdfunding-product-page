let hamburger = document.querySelector('.hamburger');
let closeMenu = document.querySelector('.close-menu');
let navlist = document.querySelector('.list');
let bookMark = document.querySelector('.bookmark');
let iconBookmark = document.querySelector('.icon-bookmark');
let container = document.querySelector('.container');
let back = document.querySelector('.back');
let popupContainer = document.querySelector('.popupContainer');
let checks = document.querySelectorAll('.ckeck');
let popupClose = document.querySelector('.popup-close');
let showBox = document.querySelector('.showBox');
let hiddenBox = document.querySelector('.hiddenBox');
let hiddenHr = document.querySelector('.hiddenHr');
let continueButton = document.querySelector('.continue');
let successContainer = document.querySelector('.successContainer');
let got = document.querySelector('.Got')

got.addEventListener('click', ()=>{
    successContainer.style.display = 'none';
    container.classList.remove('blur');
})

continueButton.addEventListener('click', ()=>{
    successContainer.style.display = 'block';
    popupContainer.style.display = 'none';

})

showBox.addEventListener('click',()=>{
    hiddenBox.classList.toggle('active');
    hiddenHr.classList.toggle('active');

})

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
bookMark.addEventListener('click',()=>{
    bookMark.classList.toggle('bookmarkActive');
    iconBookmark.classList.toggle('icon-active')
})
back.addEventListener('click' ,()=>{
    popupContainer.style.display = 'block';
    container.classList.add('blur');
})
checks.forEach(element=>{
    element.addEventListener('click', ()=>{
        element.firstElementChild.classList.toggle('active');

    })
})

popupClose.addEventListener('click' , ()=>{
    popupContainer.style.display = 'none';
    container.classList.remove('blur');

})

