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
///////////////////////////////////////////////////////////////////////
let soueces = [
{language:'javascript',steps:['بتطوير تفكيرك المنطقي عن طريق حل المسائل البرمجية او ما يعرف ب والتي ستكون بلغة جافاسكرب',
'بتطوير تفكيرك المنطقي عن طريق حل المسائل البرمجية او ما يعرف ب والتي ستكون بلغة جافاسكرب',
'بتطوير تفكيرك المنطقي عن طريق حل المسائل البرمجية او ما يعرف ب والتي ستكون بلغة جافاسكرب'],
title:['تعلم الاساسيات','تعلم ',' الاساسيات']},
{language:'nodejs',steps:['بتطوير تفكيرك المنطقي عن طريق حل المسائل البرمجية او ما يعرف ب والتي ستكون بلغة جافاسكرب',
'بتطوير تفكيرك المنطقي عن طريق حل المسائل البرمجية او ما يعرف ب والتي ستكون بلغة جافاسكرب',
'بتطوير تفكيرك المنطقي عن طريق حل المسائل البرمجية او ما يعرف ب والتي ستكون بلغة جافاسكرب'],
title:['تعلم الاساسيات','تعلم ',' الاساسيات']},
{language:'React',steps:['بتطوير تفكيرك المنطقي عن طريق حل المسائل البرمجية او ما يعرف ب والتي ستكون بلغة جافاسكرب',
'بتطوير تفكيرك المنطقي عن طريق حل المسائل البرمجية او ما يعرف ب والتي ستكون بلغة جافاسكرب',
'بتطوير تفكيرك المنطقي عن طريق حل المسائل البرمجية او ما يعرف ب والتي ستكون بلغة جافاسكرب'],
title:['تعلم الاساسيات','تعلم ',' الاساسيات']},
{language:'Python',steps:['بتطوير تفكيرك المنطقي عن طريق حل المسائل البرمجية او ما يعرف ب والتي ستكون بلغة جافاسكرب',
'بتطوير تفكيرك المنطقي عن طريق حل المسائل البرمجية او ما يعرف ب والتي ستكون بلغة جافاسكرب',
'بتطوير تفكيرك المنطقي عن طريق حل المسائل البرمجية او ما يعرف ب والتي ستكون بلغة جافاسكرب'],
title:['تعلم الاساسيات','تعلم ',' الاساسيات']},
{language:'php',steps:['بتطوير تفكيرك المنطقي عن طريق حل المسائل البرمجية او ما يعرف ب والتي ستكون بلغة جافاسكرب',
'بتطوير تفكيرك المنطقي عن طريق حل المسائل البرمجية او ما يعرف ب والتي ستكون بلغة جافاسكرب',
'بتطوير تفكيرك المنطقي عن طريق حل المسائل البرمجية او ما يعرف ب والتي ستكون بلغة جافاسكرب'],
title:['تعلم الاساسيات','تعلم ',' الاساسيات']},
{language:'Git',steps:['بتطوير تفكيرك المنطقي عن طريق حل المسائل البرمجية او ما يعرف ب والتي ستكون بلغة جافاسكرب',
'بتطوير تفكيرك المنطقي عن طريق حل المسائل البرمجية او ما يعرف ب والتي ستكون بلغة جافاسكرب',
'بتطوير تفكيرك المنطقي عن طريق حل المسائل البرمجية او ما يعرف ب والتي ستكون بلغة جافاسكرب'],
title:['تعلم الاساسيات','تعلم ',' الاساسيات']}
];
let containMap = document.querySelector('.contain-map');
let middleMap = document.querySelector('.middle-map');

shapeIconSource.forEach(ele=>{
    if(localStorage.getItem('cardRoud') !== null){
        if(ele.dataset.name === localStorage.getItem('cardRoud')){
            shapeIconSource.forEach(el=>{
                el.classList.remove('active');
            });
            ele.classList.add('active');
        }
        setIt(ele);
    }
});


shapeIconSource.forEach(ele=>{
    ele.addEventListener('click',e=>{
        shapeIconSource.forEach(el=>{
            el.classList.remove('active');
        });
        ele.classList.add('active');
        setIt(ele);
        // containMap.innerHTML = "";
        // containMap.appendChild(middleMap);
        // soueces.forEach(ee=>{
        //     if(ee.language === ele.dataset.name){
        //         let s=0;
        //         let x=0;
        //         for(let i of ee.steps){
        //             let art = document.createElement('article');
        //             let h4 = document.createElement('h4');
        //             let text = document.createTextNode(`${i}`);
        //             let clear = document.createElement('div');
        //             art.classList.add('step');
        //             art.setAttribute('data-num',`${s++}`);
        //             h4.innerText = ee.title[x++];
        //             console.log(ee.title);
        //             clear.classList.add('clear');
        //             art.appendChild(h4);
        //             art.appendChild(text);
        //             containMap.appendChild(art);
        //             containMap.appendChild(clear);
        //         }
        //     }
        // });
        tooltipOuter.style.top = ele.offsetTop + ele.offsetHeight / 7 +'px';
        tooltipOuter.style.display = 'block';
        tooltipOuter.children[0].innerHTML = ele.dataset.name;
        setTimeout(()=>{
            tooltipOuter.style.display = 'none';
        },6000);
    });
});


function setIt(ele){
    if(ele.classList.contains('active')){
        containMap.innerHTML = "";
        containMap.appendChild(middleMap);
        soueces.forEach(ee=>{
            if(ee.language === ele.dataset.name){
                let s=1;
                let x=0;
                for(let i of ee.steps){
                    let art = document.createElement('article');
                    let h4 = document.createElement('h4');
                    let text = document.createTextNode(`${i}`);
                    let clear = document.createElement('div');
                    art.classList.add('step');
                    art.setAttribute('data-num',`${s++}`);
                    h4.innerText = ee.title[x++];
                    clear.classList.add('clear');
                    art.appendChild(h4);
                    art.appendChild(text);
                    containMap.appendChild(art);
                    containMap.appendChild(clear);
                }
            }
        });
    }
}

