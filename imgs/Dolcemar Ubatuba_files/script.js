const body = document.querySelector(".body");

let bodyHeight =  window.screen.height - 50;
const bodyWidth =  window.screen.width;

if(bodyWidth < 780){
    document.querySelector(".img1").setAttribute('src', 'https://imgmd.net/images/v1/guia/1684164/ubatuba-230-c.jpg');
    document.querySelector(".img2").setAttribute('src', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/238177666.jpg?k=652d21a9d5c9393c999f9079c9b60a94dc968b35e602f15b6e6ff3ab487c658f&o=&hp=1');
    document.querySelector(".img5").setAttribute('src', 'https://www.expedia.com.br/stories/wp-content/uploads/2021/11/Ubatuba-1.jpg');
    document.querySelector(".img6").setAttribute('src', 'imgs/suite2.jpg');
    bodyHeight += 50;
}
body.style.backgroundSize = `100% ${bodyHeight}px`;