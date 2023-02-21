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

// /////////////////////////////////////////////////////////////////////

let soueces = [{name:`موقع <bdi>W3School</bdi>`,type:'site',site:'https://www.w3schools.com/',section:'HTML'},
{name:`موقع هرموش`,type:'site',site:'https://www.harmash.com//',section:'HTML'},
{name:`موقع <bdi>MDN</bdi>`,type:'site',site:'https://www.harmash.com//',section:'HTML'},
{name:`موقع <bdi>HTML Reference IO</bdi>`,type:'site',site:'https://www.harmash.com//',section:'HTML'},
{name:`موقع <bdi>Do Factory</bdi>`,type:'site',site:'https://www.harmash.com//',section:'HTML'},
{name:`موقع <bdi>HTML Dog</bdi>`,type:'site',site:'https://www.harmash.com//',section:'HTML'},
{name:`قناة الزيرو على يوتيوب`,type:'youtube',site:'https://www.harmash.com//',section:'HTML'},
{name:`قناة الزيرو على يوتيوب`,type:'youtube',site:'https://www.harmash.com//',section:'HTML'},
{name:`قناة الزيرو على يوتيوب`,type:'youtube',site:'https://www.harmash.com//',section:'HTML'},
{name:`قناة الزيرو على يوتيوب`,type:'youtube',site:'https://www.harmash.com//',section:'HTML'},
{name:`قناة الزيرو على يوتيوب`,type:'youtube',site:'https://www.harmash.com//',section:'HTML'},
{name:`قناة الزيرو على يوتيوب`,type:'book',site:'https://www.harmash.com//',section:'HTML'},
{name:`قناة الزيرو على يوتيوب`,type:'book',site:'https://www.harmash.com//',section:'HTML'},
{name:`قناة الزيرو على يوتيوب`,type:'book',site:'https://www.harmash.com//',section:'HTML'},
{name:`قناة الزيرو على يوتيوب`,type:'book',site:'https://www.harmash.com//',section:'HTML'},
{name:`قناة الزيرو على يوتيوب`,type:'book',site:'https://www.harmash.com//',section:'HTML'},
{name:`موقع هرموش`,type:'site',site:'https://www.harmash.com//',section:'CSS'},
{name:`موقع <bdi>MDN</bdi>`,type:'site',site:'https://www.harmash.com//',section:'CSS'},
{name:`موقع <bdi>HTML Reference IO</bdi>`,type:'site',site:'https://www.harmash.com//',section:'CSS'},
{name:`موقع <bdi>Do Factory</bdi>`,type:'site',site:'https://www.harmash.com//',section:'CSS'},
{name:`موقع <bdi>HTML Dog</bdi>`,type:'site',site:'https://www.harmash.com//',section:'CSS'},
{name:`قناة الزيرو على يوتيوب`,type:'youtube',site:'https://www.harmash.com//',section:'CSS'},
{name:`قناة الزيرو على يوتيوب`,type:'youtube',site:'https://www.harmash.com//',section:'CSS'},
{name:`قناة الزيرو على يوتيوب`,type:'youtube',site:'https://www.harmash.com//',section:'CSS'},
{name:`قناة الزيرو على يوتيوب`,type:'youtube',site:'https://www.harmash.com//',section:'CSS'},
{name:`قناة الزيرو على يوتيوب`,type:'youtube',site:'https://www.harmash.com//',section:'CSS'},
{name:`قناة الزيرو على يوتيوب`,type:'book',site:'https://www.harmash.com//',section:'CSS'},
{name:`قناة الزيرو على يوتيوب`,type:'book',site:'https://www.harmash.com//',section:'CSS'},
{name:`قناة الزيرو على يوتيوب`,type:'book',site:'https://www.harmash.com//',section:'CSS'},
{name:`قناة الزيرو على يوتيوب`,type:'book',site:'https://www.harmash.com//',section:'CSS'},
{name:`قناة الزيرو على يوتيوب`,type:'book',site:'https://www.harmash.com//',section:'CSS'},
];

let wordSource = document.querySelectorAll('.word-source');
// let iconSource = document.querySelectorAll('.shape-icon-source');
shapeIconSource.forEach(ele=>{
    if(localStorage.getItem('cardSource') !== null){
        if(ele.dataset.name === localStorage.getItem('cardSource')){
            shapeIconSource.forEach(el=>{
                el.classList.remove('active');
            });
            ele.classList.add('active');
        }
    }
    if(ele.classList.contains('active')){
        setSource(ele);
        shapeIconSource.forEach(el=>{
            el.classList.remove('active');
        });
        shapeIconSource[0].classList.add('active');
        localStorage.setItem('cardSource', shapeIconSource[0].dataset.name)
    }
});

shapeIconSource.forEach(ele=>{
    ele.addEventListener('click',e=>{
        shapeIconSource.forEach(el=>{
            el.classList.remove('active');
        });
        ele.classList.add('active');
        // shapeIconSource.forEach(ele=>{
        //     if(ele.classList.contains('active')){
                //tooltipOuter.style.display = 'none';
                tooltipOuter.style.top = ele.offsetTop + ele.offsetHeight / 7 +'px';
                tooltipOuter.style.display = 'block';
                tooltipOuter.children[0].innerHTML = ele.dataset.name;
                setTimeout(()=>{
                    tooltipOuter.style.display = 'none';
                },6000);
                setSource(ele)
        //     }
        // });
    });
});




function setSource(ele){
    wordSource.forEach(el=>{
        el.innerHTML = '';
        soueces.forEach(ee=>{
            if(ee.section === ele.dataset.name){
                if(ee.type === el.parentElement.dataset.code){
                    let li = document.createElement('li');
                    let a = document.createElement('a');
                    a.href = ee.site;
                    a.innerHTML = ee.name;
                    li.appendChild(a);
                    el.appendChild(li);
                }
            }
        })
    });
}
// ////////////////////////////////////////////////////
