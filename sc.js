const p=document.querySelector('.menu-btn');
const mainMenu=document.querySelector('.main-nav .main-menu');


p.addEventListener('click',function(){
    mainMenu.classList.toggle('show');
});

/*function changeImage() {
    document.header.style.backgroundImage=' url("./img/page.png")';
  }*/