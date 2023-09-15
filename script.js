const body = document.querySelector(".body");

let bodyHeight =  window.screen.height - 50;
const bodyWidth =  window.screen.width;

if(bodyWidth < 780){

    bodyHeight += 50;
    /* HEADER */
    let headerHeight = 0.23 * bodyHeight;
    document.querySelector(".whats").style.visibility = "hidden"
    document.querySelector(".header").style.height = `${headerHeight}px`;
    document.querySelector(".img1").setAttribute('src', 'https://imgmd.net/images/v1/guia/1684164/ubatuba-230-c.jpg');
    document.querySelector(".img2").setAttribute('src', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/238177666.jpg?k=652d21a9d5c9393c999f9079c9b60a94dc968b35e602f15b6e6ff3ab487c658f&o=&hp=1');
    document.querySelector(".img5").setAttribute('src', 'https://www.expedia.com.br/stories/wp-content/uploads/2021/11/Ubatuba-1.jpg');
    document.querySelector(".img6").setAttribute('src', 'imgs/suite2.jpg');
    /* PRINCIPAL */
    let principalHeight = 0.7 * bodyHeight;
    document.querySelector(".principal").style.height = `${principalHeight}px`;

}
body.style.backgroundSize = `100% ${bodyHeight}px`;

/* Suites */
const imgS1 = "file:///home/thiago/projetos/dolcemar/imgs/suite.jpg"
const imgS2 = "file:///home/thiago/projetos/dolcemar/imgs/suite2.jpg"
const imgS3 = "https://www.expedia.com.br/stories/wp-content/uploads/2021/11/Ubatuba-1.jpg"
const imgS4 = "https://imgmd.net/images/v1/guia/1684164/ubatuba-230-c.jpg"
const imgSuites = document.querySelector(".suite img");
imgSuites.src = imgS1

const btLeftSuites = document.querySelector(".suite span");
const btRightSuites = document.querySelector(".spanr");

btLeftSuites.addEventListener("click", (e) => {
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