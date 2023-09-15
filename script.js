const body = document.querySelector(".body");

let bodyHeight =  window.screen.height - 50;
const bodyWidth =  window.screen.width;

/* PRINCIPAL */
const imgP1 = document.querySelector(".img1");
const imgP2 = document.querySelector(".img2");
const imgP3 = document.querySelector(".img3");
const imgP4 = document.querySelector(".img4");
const imgP5 = document.querySelector(".img5");
const imgP6 = document.querySelector(".img6");
const imgP7 = document.querySelector(".img7");

let principalHeight = 0.6475 * bodyHeight;
document.querySelector(".principal").style.height = `${principalHeight}px`;
const imgsPHeight = 0.874 * principalHeight
imgP1.style.height = `${0.6 * imgsPHeight}px`;
imgP2.style.height = `${0.6 * imgsPHeight}px`;
imgP3.style.height = `${0.6 * imgsPHeight}px`;
imgP4.style.height = `${0.4 * imgsPHeight}px`;
imgP5.style.height = `${0.4 * imgsPHeight}px`;
imgP6.style.height = `${0.4 * imgsPHeight}px`;
imgP7.style.height = `${0.4 * imgsPHeight}px`;

/* RESPONSIVE */
if(bodyWidth < 780){

    bodyHeight += 50;
    /* HEADER */
    let headerHeight = 0.23 * bodyHeight;
    document.querySelector(".header").style.height = `${headerHeight}px`;
    document.querySelector(".whats").style.visibility = "hidden";
    
    /* PRINCIPAL */
    imgP1.src = imgP2.src;
    imgP2.src = "https://cf.bstatic.com/xdata/images/hotel/max1024x768/238177666.jpg?k=652d21a9d5c9393c999f9079c9b60a94dc968b35e602f15b6e6ff3ab487c658f&o=&hp=1";
    imgP4.src = imgP6.src
    imgP1.style.height = `${0.3 * principalHeight}px`;
    imgP2.style.height = `${0.35 * principalHeight}px`;
    imgP3.style.height = `${0.35 * principalHeight}px`;
    imgP4.style.height = `${0.3 * principalHeight}px`;
    imgP5.style.height = `${0.3 * principalHeight}px`;
    imgP6.style.visibility = "hidden";
    imgP7.style.visibility = "hidden";


}
body.style.backgroundSize = `100% ${bodyHeight}px`;

/* Suites */
const imgS1 = "https://dolcemar.vercel.app/imgs/suite1.jpg";
const imgS2 = "https://dolcemar.vercel.app/imgs/suite2.jpeg";
const imgS3 = "https://dolcemar.vercel.app/imgs/suite3.jpeg";
const imgS4 = "https://dolcemar.vercel.app/imgs/suite4.jpeg";
const imgSuites = document.querySelector(".suite img");
console.log(imgSuites.height);
imgSuites.src = imgS1;

const btLeftSuites = document.querySelector(".spanl");
const btRightSuites = document.querySelector(".spanr");

btLeftSuites.addEventListener("click", (e) => {
    prev();

    btLeftSuites.style.paddingTop = `${imgSuites.height}px`;
    btRightSuites.style.paddingTop = `${imgSuites.height}px`;
    btRightSuites.style.marginLeft = `${imgSuites.width - 31}px`;
});
btRightSuites.addEventListener("click", (e) => {
    next();

    btLeftSuites.style.paddingTop = `${imgSuites.height}px`;
    btRightSuites.style.paddingTop = `${imgSuites.height}px`;
    btRightSuites.style.marginLeft = `${imgSuites.width - 31}px`;
    console.log(imgSuites.height);
});

setTimeout(() => {
    console.log(imgSuites);
    console.log(imgSuites.height);
    btLeftSuites.style.paddingTop = `${imgSuites.height}px`;
    btRightSuites.style.paddingTop = `${imgSuites.height}px`;
    btRightSuites.style.marginLeft = `${imgSuites.width - 31}px`;
}, 500)

setInterval(() => {
    next();
}, 10000);

function prev() {
    imgSuites.src == imgS1 ? imgSuites.src = imgS4 : 
    imgSuites.src == imgS2 ? imgSuites.src = imgS1 : 
    imgSuites.src == imgS3 ? imgSuites.src = imgS2 : 
    imgSuites.src == imgS4 ? imgSuites.src = imgS3 : 
    "Imagem Não Encontrada";
}

function next() {
    imgSuites.src == imgS1 ? imgSuites.src = imgS2 : 
    imgSuites.src == imgS2 ? imgSuites.src = imgS3 : 
    imgSuites.src == imgS3 ? imgSuites.src = imgS4 : 
    imgSuites.src == imgS4 ? imgSuites.src = imgS1 : 
    "Imagem Não Encontrada";
}