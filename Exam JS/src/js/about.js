



const mobileMenuOpenBtn = document.querySelector(".mobile-menu-container .menu-open-btn");
const mobileMenu = document.querySelector(".mobile-menu-container .fullscreen-container"); 
const itemOpen = document.querySelectorAll(".menu-item-link_open .item-open");
const insideItems = document.querySelectorAll(".menu-item .inside-items");

mobileMenuOpenBtn.addEventListener("click",()=>{
    mobileMenu.classList.add("fullscreen-container-open");
});

mobileMenu.addEventListener("click",()=>{
    mobileMenu.classList.remove("fullscreen-container-open");
});


itemOpen.forEach((itemBtn, index)=>{
    itemBtn.addEventListener("click",(event)=>{
        event.stopPropagation();
        itemBtn.classList.toggle("item-close");
        insideItems[index].classList.toggle("inside-items-open");
    })
})










const faq = document.querySelectorAll(".content_part");

for (let i = 0; i < faq.length; i++) {
  faq[i].addEventListener('click', function () {
    this.classList.toggle('active');
    
  });
 
}


let calcScrollValue = () =>{

  let scrollProgress = document.querySelector('#progress');
let progressValue = document.querySelector('.progress-value');

let pos = document.documentElement.scrollTop;
let calcHeight = document.documentElement.scrollHeight -
document.documentElement.clientHeight;

let scrollValue = Math.round((pos * 100) / calcHeight)

if(pos >  100){
  scrollProgress.style.display = "flex"
} else {
  scrollProgress.style.display = "none"
}

scrollProgress.addEventListener('click', () =>{

  document.documentElement.scrollTop = 0;
});

scrollProgress.style.background = `conic-gradient(#5f3afc ${scrollValue}% , #aeaac2 ${scrollValue}%)`
}

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;