
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








const cards = document.querySelector('.card-contact');

const data = async() =>{
 const req = await fetch('http://localhost:3000/wetlandContact')
const res = await req.json();

res.map((e) => {

    cards.innerHTML += `
    <div class="col-lg-4">
    <div class="card-area">
       <div class="img-area">
        <img src=${e.img} alt="">
       </div>
       <div class="info-area">
        <h3>${e.info}</h3>
        <p>${e.comment}</p>
        <span><a href="#">${e.more}</a>
        <i class="fa-solid fa-arrow-right"></i>
        </span>
       </div>
    </div>
</div>
    
    `
})

}
data()



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