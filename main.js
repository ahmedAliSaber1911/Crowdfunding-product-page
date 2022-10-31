let hamburger = document.querySelector('.hamburger');
let closeMenu = document.querySelector('.close-menu');
let navlist = document.querySelector('.list');
let bookMark = document.querySelector('.bookmark')
let iconBookmark = document.querySelector('.icon-bookmark')
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