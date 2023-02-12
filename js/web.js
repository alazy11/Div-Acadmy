let navEffect = document.querySelector(".effect-nav");
let containShape = document.querySelector(".contain-shape");
let navItems = document.querySelectorAll(".nav li a");
let header = document.getElementsByTagName("header")[0];
let btnUp = document.querySelector(".btn-up");
let overLayMenu = document.querySelector(".overlay-menu");
let nav = document.getElementById("nav");
let btnMenu = document.querySelector(".btn-menu i");
let onloade = document.querySelector(".onloade");

// ///////////////////////////////////////////////////////
btnUp.onclick = function (){
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
}
// ///////////////////////////////////////////////////////
window.onload = function(){
    onloade.style.display = 'none';
}
// ///////////////////////////////////////////////////////
btnMenu.onclick = ()=>{
    overLayMenu.style.opacity = 1;
        overLayMenu.style.display = "block";
    setTimeout(()=>{
        nav.style.transform = 'translateX(0%)';
    },200);
}

overLayMenu.onclick = function(){
    nav.style.transform = 'translateX(105%)';
    setTimeout(()=>{
        this.style.opacity = 0;
    },600);
    setTimeout(()=>{
        this.style.display = "none";
    },300);
}
//////////////////////////////////////////////////////////
window.onscroll = function(){
    if(window.scrollY >= 400){
        header.style.backgroundColor = 'rgba(0,0,0,.8)';
        btnUp.style.display = 'block';
        setTimeout(()=>{
            btnUp.style.opacity = '1';
        },100);
    }
    // if(window.scrollY >= 500){

    // }
    else{
        header.style.backgroundColor = '#0e75eb';
        btnUp.style.opacity = '0';
        setTimeout(()=>{
            btnUp.style.display = 'block';
        },200);
    }
}
///////////////////////////////////////////////////////////

navItems.forEach(ele=>{
    if(ele.classList.contains('active')){
        navEffect.style.left = ele.parentNode.offsetLeft + 'px';
        navEffect.style.width = ele.offsetWidth + 'px';
    }
});

navItems.forEach(ele=>{
    ele.addEventListener('click',(e)=>{
        navItems.forEach(el=>{
            el.classList.remove("active");
        });
        e.target.classList.add("active");
        navEffect.style.left = e.target.parentNode.offsetLeft + 'px';
        navEffect.style.width = e.target.offsetWidth + 'px';
    });
});

// //////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////

