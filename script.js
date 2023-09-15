const body = document.querySelector(".body");

let bodyHeight =  window.screen.height - 50;
const bodyWidth =  window.screen.width;

/* PRINCIPAL */
const imgP1 = document.querySelector(".img1")
const imgP2 = document.querySelector(".img2")
const imgP3 = document.querySelector(".img3")
const imgP4 = document.querySelector(".img4")
const imgP5 = document.querySelector(".img5")
const imgP6 = document.querySelector(".img6")
const imgP7 = document.querySelector(".img7")

/* RESPONSIVE */
if(bodyWidth < 780){

    bodyHeight += 50;
    /* HEADER */
    let headerHeight = 0.23 * bodyHeight;
    document.querySelector(".header").style.height = `${headerHeight}px`;
    document.querySelector(".whats").style.visibility = "hidden";
    
}
body.style.backgroundSize = `100% ${bodyHeight}px`;

/* PRINCIPAL */
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

/* Suites */
const imgS1 = "https://dolcemar.vercel.app/imgs/suite.jpg"
const imgS2 = "https://dolcemar.vercel.app/imgs/suite2.jpg"
const imgS3 = "https://www.expedia.com.br/stories/wp-content/uploads/2021/11/Ubatuba-1.jpg"
const imgS4 = "https://imgmd.net/images/v1/guia/1684164/ubatuba-230-c.jpg"
const imgSuites = document.querySelector(".suite img");
imgSuites.src = imgS1

const btLeftSuites = document.querySelector(".spanl");
const btRightSuites = document.querySelector(".spanr");

btLeftSuites.addEventListener("click", (e) => {
    console.log(imgSuites.src)
    imgSuites.src == imgS1 ? imgSuites.src = imgS4 : 
    imgSuites.src == imgS2 ? imgSuites.src = imgS1 : 
    imgSuites.src == imgS3 ? imgSuites.src = imgS2 : 
    imgSuites.src == imgS4 ? imgSuites.src = imgS3 : 
    "Imagem Não Encontrada";

});
btRightSuites.addEventListener("click", (e) => {
    imgSuites.src == imgS1 ? imgSuites.src = imgS2 : 
    imgSuites.src == imgS2 ? imgSuites.src = imgS3 : 
    imgSuites.src == imgS3 ? imgSuites.src = imgS4 : 
    imgSuites.src == imgS4 ? imgSuites.src = imgS1 : 
    "Imagem Não Encontrada";

});

btLeftSuites.style.paddingTop = `${imgSuites.height}px`;
btRightSuites.style.paddingTop = `${imgSuites.height}px`;
btRightSuites.style.marginLeft = `${imgSuites.width - 31}px`;