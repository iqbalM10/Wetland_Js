
const mobileMenuOpenBtn = document.querySelector(".mobile-menu-container .menu-open-btn");
const mobileMenu = document.querySelector(".mobile-menu-container .fullscreen-container");
const itemOpen = document.querySelectorAll(".menu-item-link_open .item-open");
const insideItems = document.querySelectorAll(".menu-item .inside-items");

mobileMenuOpenBtn.addEventListener("click", () => {
    mobileMenu.classList.add("fullscreen-container-open");
});

mobileMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("fullscreen-container-open");
});


itemOpen.forEach((itemBtn, index) => {
    itemBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        itemBtn.classList.toggle("item-close");
        insideItems[index].classList.toggle("inside-items-open");
    })
})



let calcScrollValue = () => {

    let scrollProgress = document.querySelector('#progress');
    let progressValue = document.querySelector('.progress-value');

    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let scrollValue = Math.round((pos * 100) / calcHeight)

    if (pos > 100) {
        scrollProgress.style.display = "flex"
    } else {
        scrollProgress.style.display = "none"
    }

    scrollProgress.addEventListener('click', () => {

        document.documentElement.scrollTop = 0;
    });

    scrollProgress.style.background = `conic-gradient(#5f3afc ${scrollValue}% , #aeaac2 ${scrollValue}%)`
}

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


window.addEventListener("scroll", function () {
    var header = document.getElementById("wetland-header");
    /*     var navbar = header.querySelector(".header-nav"); */

    if (window.scrollY > 100) {
        header.classList.add("sticky");
        // header.style.transform = "translateY(0)"
    } else {
        header.classList.remove("sticky");
        // header.style.transform = "translateY(0)"
    }
});



const text = document.querySelector('.cards_row')

const data = async () => {

    const req = await fetch('http://localhost:3000/wetlandcards');
    const res = await req.json();
    console.log(res);

    res.map((e) => {

        text.innerHTML += `
        <div class="col-lg-4">
                    <div class="card_area">
                        <div class="img_area">
                            <img src=${e.img} alt="">
                        </div>
                        <div class="info_area">
                            <h3>
                            <a href="">${e.info}+
                            </a>
                            </h3>
                            <p>${e.share}</p>
                        </div>
                    </div>
                </div>
        `
    })
}
data()





function showTab(tabName) {
    const tabContents = document.querySelectorAll('.tab-pane');
    tabContents.forEach(content => content.classList.remove('active'));

    const activeButton = document.querySelector('.tab-btn.active');
    if (activeButton) activeButton.classList.remove('active');

    const selectedButton = document.querySelector(`[data-tab="${tabName}"]`);
    selectedButton.classList.add('active');

    const selectedContent = document.querySelector(`[data-tab="${tabName}"].tab-pane`);
    selectedContent.classList.add('active');
}


showTab('tab1');




/* ---------------------carousel------------- */

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    autoWidth: 440,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})


/* ----------accordion ----------*/

const faq = document.querySelectorAll(".content_part");

for (let i = 0; i < faq.length; i++) {
    faq[i].addEventListener('click', function () {
        this.classList.toggle('active');

    });

}


/* ------------------cards --------------- */


const card = document.querySelector('.card_row')

const Data = async () => {

    const req = await fetch('http://localhost:3000/wetlendcards2')
    const res = await req.json()

    res.map((e) => {

        card.innerHTML += `
        
        <div class="col-lg-4">
                        <div class="card_area">
                            <div class="img_area">
                                <img src=${e.img} alt="">
                            </div>
                            <div class="data_area">
                                <h3>${e.date}</h3>
                                <p>${e.brand}</p>
                            </div>
                            <div class="card_info">
                                <h4>${e.info}</h4>
                            </div>
                        </div>
                    </div>
        `
    })
}

Data()


/* -------------count area--------------- */

let valueDisplay = document.querySelectorAll('.num');
let interval = 6000;

valueDisplay.forEach((valueDisplay) => {

    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute('data-val'));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {

        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration)

})


/* ------------loading---------------- */

const notice = document.querySelector('#notice');

window.addEventListener('offline', () => {

    notice.style.height = "100px";

});


window.addEventListener('online', () => {

    notice.style.backgroundColor = "green";
    notice.innerText = "you are connected ^-^";


    setTimeout(message, 3000)
});


function message() {

    notice.style.height = "0"
}