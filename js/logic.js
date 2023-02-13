let sideMenu = document.querySelector(".side-menu");
let btnSideMenu = document.querySelector(".side-menu .btn-side-menu");
let spanBtnSideMenu = document.querySelectorAll(".side-menu .btn-side-menu span");
let shapeIconSource = document.querySelectorAll('.shape-icon-source');
let tooltipOuter = document.querySelector('.tooltip-outer');


btnSideMenu.onclick = function(){
    sideMenu.classList.toggle("width-side-menu");
    spanBtnSideMenu[1].classList.toggle("display-none");
    spanBtnSideMenu[0].classList.toggle("rotate1");
    spanBtnSideMenu[2].classList.toggle("rotate2");
    if(!sideMenu.classList.contains("width-side-menu")){
        shapeIconSource.forEach(ele=>{
            if(ele.classList.contains('active')){
                tooltipOuter.style.top = ele.offsetTop + ele.offsetHeight / 7 +'px';
                tooltipOuter.style.display = 'block';
                tooltipOuter.children[0].innerHTML = ele.dataset.name;
                setTimeout(()=>{
                    tooltipOuter.style.display = 'none';
                },6000);
            }
        });
    }
}


console.log(window.top.location.href);
// window.onopen = function(){

// }
// ///////////////////////////////////////////////////////////////

let diffecult = document.querySelectorAll('.diffecult progress');

diffecult.forEach(ele=>{
    if(ele.value <= 40){
        ele.style.accentColor = '#04ff04';
    }
    else if(ele.value <= 70){
        ele.style.accentColor = '#fdff5e';
    }
    else{
        ele.style.accentColor = '#ff805e';
    }
});

// ///////////////////////////////////////////////////////////////////////////

let overlayLogic = document.querySelector('.overlay-logic');
let closeLogic = document.querySelector('.close-logic');
let logicProblem = document.querySelectorAll('.name-card-logic > p');
let menuBtnLogic = document.querySelectorAll('.menu-top-logic > div');
let help = document.querySelector('.help');

logicProblem.forEach(ele=>{
    ele.addEventListener('click',e=>{
        overlayLogic.style.display = 'block';
    });
});
closeLogic.onclick = function(){
    overlayLogic.style.display = 'none';
}

menuBtnLogic.forEach(ele=>{
    ele.addEventListener('click',e=>{
        console.log(ele.children[1]);
        ele.children[1].style.display = 'block';
        setTimeout(()=>{
            ele.children[1].classList.add('show');
        },200);

        
        setTimeout(()=>{
            ele.children[1].classList.remove('show');
        },3000);

        setTimeout(()=>{
            ele.children[1].style.display = 'none';
        },3500);
    });

})

// /////////////////////////////////////////////////////////////////////////////