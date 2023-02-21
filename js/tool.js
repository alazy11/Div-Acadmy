let sideMenu = document.querySelector(".side-menu");
let btnSideMenu = document.querySelector(".side-menu .btn-side-menu");
let spanBtnSideMenu = document.querySelectorAll(".side-menu .btn-side-menu span");
let shapeIconSource = document.querySelectorAll('.shape-icon-source');
let tooltipOuter = document.querySelector('.tooltip-outer');
let colorGenerator = document.querySelectorAll('.contain-solor > div');
let menuColor = document.querySelectorAll('.menu-color-generator div');
let generateCo = document.querySelectorAll('.menu-color-generator > div');
let containColor = document.querySelectorAll('.contain-solor > div');

let colorSearchDegree = document.querySelector('.color-search-degree');
let colorDegree = document.querySelector('.color-degree');
let colorBackground = document.querySelector('.color-background');
let colorBackgroundDeg = document.querySelector('.color-background-deg');
let color = document.querySelector('.color-ch');
let textColor = document.getElementById('text-color');
let textColorDeg = document.getElementById('degree-col');
let colorChoiced = document.querySelector('.color-choiced');
let colorChoicedDeg = document.querySelector('.color-choiced-deg');
let arrColor = new Set();
let arr = [];


generateCo.forEach(ele=>{
    ele.addEventListener('click',e=>{
        generateCo.forEach(el=>{
            el.classList.remove('active');
        });
        ele.classList.add('active');
        containColor.forEach(Ele=>{
            if(Ele.dataset.section === ele.dataset.section){
                Ele.style.display === 'block';
            }
            else{
                Ele.style.display === 'none';
            }
        });
    });
});


if(localStorage.getItem('colors') !== null){
    arr = JSON.parse(localStorage.getItem('colors'));
    for(let x of arr){
        arrColor.add(x);
    }
    savedColor(arrColor,colorChoiced,'color-hs','color-back','color1');
}

color.oninput = function(){
    if(getComputedStyle(colorDegree).display == 'none')
    setInput(textColor,colorBackground,color);
    else
    setInput(textColorDeg,colorBackgroundDeg,color);
}

// textColorDeg.addEventListener('input',e=>{
//     colorBackgroundDeg.style.backgroundColor = textColor.value;
// });

function setInput(texColor,backColor,item){
    texColor.value = item.value;
    backColor.style.backgroundColor = item.value;
}

textColor.oncopy = function(){
    arrColor.add(textColor.value);
    arr = [...arrColor.values()];
    localStorage.setItem('colors',JSON.stringify(arr));
    savedColor(arrColor,colorChoiced,'color-hs','color-back','color1');
}

let ara = [];
let aaa = "";
let r = 0;
let g=0;
let b=0;

console.log(parseInt('#ff0000'.replace('#','').substr(0,2),16));

colorSearchDegree.onclick = function(){
    ara = [];
    aaa = "";
    r = 0;
    g=0;
    b=0;
    if(textColorDeg.value === '' || textColorDeg.value === ' '){
        document.querySelector('input[name="text"]').style.display = 'block';
        textColorDeg.style.display = 'none';
        setTimeout(() => {
            document.querySelector('input[name="text"]').style.display = 'none';
            textColorDeg.style.display = 'block';
        }, 500);
        return 0;
    }else if(!/^#[a-f0-9]{6}$/gi.test(textColorDeg.value)){
        document.querySelector('input[name="text"]').style.display = 'block';
        textColorDeg.style.display = 'none';
        setTimeout(() => {
            document.querySelector('input[name="text"]').style.display = 'none';
            textColorDeg.style.display = 'block';
        }, 500);
        return 0;
    }
    else{
        ara = [];
        let s = textColorDeg.value.replace('#','');
        r =parseInt(s.substr(0,2),16);
        g =parseInt(s.substr(2,2),16);
        b =parseInt(s.substr(4,2),16);
        for(let i=Math.min(r,g,b);i<=255; i+=5){
            if(r < 255)
            {
                if(255 - r < 5)
                r+=255 - r;
                else
                r+=5;
            }
            if(g < 255)
            {
                if(255 - g < 5)
                g+=255 - g;
                else
                g+=5;
            }
            if(b < 255)
            {
                if(255 - b < 5)
                b+=255 - b;
                else
                b+=5;
            }
            // console.log(r + '|' + g + '|' +b);
            rgb(r,g,b);
        }
        savedColor(ara,colorChoicedDeg,'color-hs-deg','color-back-deg','color1-deg');
    }
}

function rgb(r,g,b){
    aaa = '#' + (r.toString(16).length == 1 ? ('0' + r.toString(16)) : r.toString(16))  + '|' + 
    (g.toString(16).length == 1 ? ('0' + g.toString(16)) : g.toString(16)) +
    '|' + (b.toString(16).length == 1 ? ('0' + b.toString(16)) : b.toString(16));
    aaa = aaa.replaceAll('|','');
    ara.push(aaa);
}

function savedColor(arra,clc,class1,class2,class3){
    clc.innerHTML = '';
    for(let i of arra){
        let color1 = document.createElement('div');
        let colorBack = document.createElement('div');
        let colorHs = document.createElement('div');
        colorHs.classList.add(class1);
        colorHs.innerText =  `${i}`;
        colorHs.dir = 'ltr';
        colorBack.classList.add(class2);
        colorBack.style.backgroundColor = `${i}`;
        color1.classList.add(class3);
        color1.appendChild(colorBack);
        color1.appendChild(colorHs);
        clc.appendChild(color1);
    }
    copyColor();
    copyColor2();
}

function copyColor2(){
    colorChoiced.querySelectorAll('.color1').forEach(ele=>{
        ele.addEventListener('click',e=>{
            navigator.clipboard.writeText(ele.lastElementChild.innerText);
            let val = ele.lastElementChild.innerText;
            ele.lastElementChild.innerText = 'تم النسخ';
            setTimeout(()=>{
                ele.lastElementChild.innerText = val;
            },1000);
        });
    });
}

function copyColor(){
    colorChoicedDeg.querySelectorAll('.color1-deg').forEach(ele=>{
        ele.addEventListener('click',e=>{
            navigator.clipboard.writeText(ele.lastElementChild.innerText);
            let val = ele.lastElementChild.innerText;
            ele.lastElementChild.innerText = 'تم النسخ';
            setTimeout(()=>{
                ele.lastElementChild.innerText = val;
            },1000);
        });
    });
    
}

// ///////////////////////////////////////////////////////////////
let mainColorSame = document.querySelectorAll('.main-color-same > div');

let arrCol = [['#EAEAEA','#B2B2B2','#3C4048','#00ABB3'],
['#1D1CE5','#4649FF','#7978FF','#C47AFF'],
['#251B37','#372948','#FFCACA','#FFECEF'],
['#FF74B1','#FFA1CF','#FFD6EC','#A7FFE4'],
['#FAF7F0','#CDFCF6','#BCCEF8','#98A8F8'],
['#FF731D','#FFF7E9','#5F9DF7','#1746A2'],
['#08D9D6','#252A34','#FF2E63','#EAEAEA'],
['#B9FFF8','#6FEDD6','#FF9551','#FF4A4A']];

mainColorSame.forEach((ele,ind)=>{
    ele.querySelectorAll('div').forEach((el,i)=>{
        el.style.backgroundColor = `${arrCol[ind][i]}`;
    });
});

mainColorSame.forEach((ele,ind)=>{
    ele.querySelectorAll('div').forEach((el)=>{
        el.addEventListener('click',e=>{
            console.log(getComputedStyle(e.target).backgroundColor);
            navigator.clipboard.writeText(getComputedStyle(e.target).backgroundColor);
            e.target.innerText = 'تم النسخ';
            setTimeout(()=>{
                e.target.innerText = '';
            },1000)
        })
    })
});

// ///////////////////////////////////////////////////////////////

menuColor.forEach(ele=>{
    ele.addEventListener('click',e=>{
        menuColor.forEach(ele=>{
            ele.classList.remove('active');
        });
        ele.classList.add('active');
        colorGenerator.forEach(el=>{
            el.style.display = 'none';
        });
        colorGenerator.forEach(el=>{
            if(el.dataset.section === ele.dataset.section)
            el.style.display = 'block';
        });

    });
});

//////////////////////////////////////////////////////////////////

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

// ///////////////////////////////////////////////////////////////////////////
let containWord = Array.from(document.querySelectorAll(".contain-word"));
let charColor = '123456789abcdef'.split("");
let btn = document.querySelector(".butn");
let resul = ["","","","","",""];


function generateColor(){
    containWord.forEach(ele=>{
        let x = resul.map(el=>{
            return el = charColor[Math.floor(Math.random() * charColor.length)];
        }).join("");
        ele.firstElementChild.style.backgroundColor = `#${x}`;
        ele.lastElementChild.innerText = `#${x}`;
    });
}

generateColor();

btn.onclick = generateColor;

containWord.forEach(ele=>{
    ele.addEventListener("click",e=>{
        navigator.clipboard.writeText(e.currentTarget.lastElementChild.innerText);
        let x = e.currentTarget.lastElementChild.innerText;
        e.currentTarget.lastElementChild.innerText = "تم النسخ";
        let y = e.currentTarget.lastElementChild;
        setTimeout(function(){
            y.innerText = x;
        },600);
    });
});


// ///////////////////////////////////////////////////////////////////

