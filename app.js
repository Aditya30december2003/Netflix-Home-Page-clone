const arrow=document.getElementById('arrow');
const accountOpen=document.querySelector('.account-open')
const bell=document.getElementById('bell')
const bellOpen=document.querySelector('.bell-open')
//account-open
arrow.addEventListener('mouseover',()=>{
    accountOpen.classList.add('account-active')
    accountOpen.style.position="absolute";
    accountOpen.style.zIndex = "99";
})
setTimeout(accountOpen.addEventListener('mouseover',()=>{accountOpen.classList.add('account-active')}),1000)
accountOpen.addEventListener('mouseout',()=>{accountOpen.classList.remove('account-active')})

bell.addEventListener('mouseover',()=>{
      bellOpen.classList.add('bell-active')
})
bell.addEventListener('mouseout',()=>{
    bellOpen.classList.remove('bell-active')
})



//tv-image slider

let tvImgs=document.querySelectorAll('.tv-images')
let imgSlider=document.querySelector('.image-slider')
var counter=0;

tvImgs.forEach((image,index)=>{
    image.style.left=`${index*19}%`;
})

function slideRighttv(){
    counter++;
    slideImagetv();
}
function slideLefttv(){
    counter--;
    slideImagetv();
}

function slideImagetv(){
    if(counter<0){
      counter=5;
    }
    if(counter==6){
        counter=0;
    }
    tvImgs.forEach((image)=>{
        image.style.transform=`translateX(-${counter*500}%)`;
    })
}



//trending image slider
let trendImgs=document.querySelectorAll('.trend-images')
var counterTrend=0;

trendImgs.forEach((image,index)=>{
    image.style.left=`${index*19}%`;
})

function slideRighttrend(){
    counterTrend++;
    slideImagetrend();
}
function slideLefttrend(){
    counterTrend--;
    slideImagetrend();
}

function slideImagetrend(){
    if(counterTrend<0){
      counterTrend=3;
    }
    if(counterTrend==4){
        counterTrend=0;
    }
    trendImgs.forEach((image)=>{
        image.style.transform=`translateX(-${counterTrend*500}%)`;
    })
}


//anime image slider
let AnimeImgs=document.querySelectorAll('.anime-images')
var counterAnime=0;

AnimeImgs.forEach((image,index)=>{
    image.style.left=`${index*19}%`;
})

function slideRightAnime(){
    counterAnime++;
    slideImageAnime();
}
function slideLeftAnime(){
    counterAnime--;
    slideImageAnime();
}

function slideImageAnime(){
    if(counterAnime<0){
      counterAnime=4;
    }
    if(counterAnime==5){
        counterAnime=0;
    }
    AnimeImgs.forEach((image)=>{
        image.style.transform=`translateX(-${counterAnime*500}%)`;
    })
}

//top 10 image slider
let topImgs=document.querySelectorAll('.top')
var countertop=0;

topImgs.forEach((image,index)=>{
    image.style.left=`${index*19}%`;
})

function slideRighttop(){
    countertop++;
    slideImagetop();
}
function slideLefttop(){
    countertop--;
    slideImagetop();
}

function slideImagetop(){
    if(countertop<0){
      countertop=1;
    }
    if(countertop==2){
        countertop=0;
    }
    topImgs.forEach((image)=>{
        image.style.transform=`translateX(-${countertop*500}%)`;
    })
}

let head=document.querySelectorAll('.head');
let explore=document.querySelectorAll('.explore')

head.forEach((head)=>{
    head.addEventListener('mouseover',()=>{
        explore.forEach((explore)=>{
            explore.style.opacity=1;
        })
    })
    head.addEventListener('mouseout',()=>{
        explore.forEach((explore)=>{
            explore.style.opacity=1;
        })
    })
})