let html = document.getElementsByTagName("html");
let carousel = document.querySelector(".carousel");
let images = ["images/image1.jpg","images/image2.jpg","images/image3.jpg","images/image4.jpg","images/image5.jpg","images/image6.png","images/image7.png"];
let carouselimg = document.querySelector(".carouselimg");
previousBtn = document.querySelector('.previous');
nextBtn = document.querySelector('.next');
carouselimg.src = images[0];
let currIndex = 0;
nextBtn.addEventListener('click',()=>{
    currIndex++;
    if(currIndex >6)
    {
        currIndex = 0;
    }
    carouselimg.src=images[currIndex];
    console.log(currIndex);
});
previousBtn.addEventListener('click',()=>{
    currIndex--;
    if(currIndex < 0){
        currIndex = 6;
    }
    carouselimg.src=images[currIndex];
    console.log(images[currIndex])
});
setInterval(()=>{
    currIndex++;
    if(currIndex >6)
    {
        currIndex = 0;
    }
    carouselimg.src=images[currIndex];
    console.log(currIndex);
},3000);
var x = window.matchMedia("(max-width: 480px)");
if(x.matches){
    html.style.zoom = "28%";
}
