let html = document.getElementsByTagName("html");
let carousel = document.querySelector(".carousel");
let dateinf = document.querySelector(".dateinf");
var currDate = new Date();
let dayList = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let monthList = ['January','Febraury','March','April','May','June','July','August','September','October','November','December'];
let date = currDate.getDate();
let day = dayList[currDate.getDay()];
let month = monthList[currDate.getMonth()];
let year = currDate.getFullYear();
var prefix;
if(date%10 == 1)
{
    prefix="st";
}
else if(date%10 == 2)
{
    prefix="nd";
}
else if(date%10 == 3)
{
    prefix="rd";
}
else
{
    prefix="th";
}
dateinf.textContent = day+" "+date+prefix+" "+month+" "+year;
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
