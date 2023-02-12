let sideMenu = document.querySelector(".side-menu");
let btnSideMenu = document.querySelector(".side-menu .btn-side-menu");
let spanBtnSideMenu = document.querySelectorAll(".side-menu .btn-side-menu span");
let shapeIconSource = document.querySelectorAll('.shape-icon-source');
let tooltipOuter = document.querySelector('.tooltip-outer');
let tabMenu = document.querySelectorAll(".tab-menu div");
let cards = document.querySelectorAll(".cards .card-sources");

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
// ///////////////////////////////////////////////////////////
tabMenu.forEach(ele=>{
    ele.addEventListener('click',e=>{
        removeActive(ele);
        ele.classList.add('active');
        // cards.forEach(ele=>{
        //     ele.style.
        // });
        filter(ele);
    });
})


function removeActive(e){
    // console.log(e.classList);
    // console.log();
    e.parentElement.querySelectorAll(`${e.tagName}`).forEach(ele=>{
        ele.classList.remove('active');
    });
}

function filter(Ele){
    if(Ele.dataset.code == 'all'){
        cards.forEach(ele=>{
            ele.style.display = 'block';
        });
        return 0;
    }
    cards.forEach(ele=>{
        if(ele.dataset.code!== Ele.dataset.code){
            ele.style.display = 'none';
        }
        else{
            ele.style.display = 'block';
        } 
    });
}
