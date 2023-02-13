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

// ///////////////////////////////////////////////////////////////////////

let time = document.getElementById("tim");
let timeProgress = document.getElementById("prog");
let inputText = document.getElementById("input");
let wordContainer = document.querySelector(".contain-words");
let wordResult = document.querySelector(".result-word");
let buttonRe = document.querySelector(".btn");
let spanProg = document.querySelector(".span-prog");
let listLang = document.getElementById('lang');

let gameover = true;
const language = [{
    name : 'Arabic',
    state: true },
    {
    name : 'English',
    state: false}];

let wordsArabic = {
    1:{
        value: "بيت البمي يهابني",
        duration: 15
    },
    2:{
        value: "يب يب سيب سب ريس",
        duration: 10
    },
    3:{
        value: "س سيبريبر يب يسبر يبريبريب",
        duration: 20
    },
    4:{
        value: "بللايبللابللا",
        duration: 5
    }
};
let wordsEnglish = {
    1:{
        value: "dsjkhbkljdscklndc",
        duration: 15
    },
    2:{
        value: "dsjkhbkljdsc",
        duration: 10
    },
    3:{
        value: "dsjkhbklj dscklndc dsiubhdc",
        duration: 20
    },
    4:{
        value: "word",
        duration: 5
    }
};

setLang();
listLang.oninput = function(){
    setLang();
}
function setLang(){
    if(listLang.options[listLang.selectedIndex].text === 'العربية'){
        language[0].state = true;
        language[1].state = false;
        inputText.dir = 'rtl';
    } else{
        language[1].state = true;
        language[0].state = false;
        inputText.dir = 'ltr';
    }
}

let count = Object.values(wordsArabic).length;
let countenglish = Object.values(wordsEnglish).length;
let result = {};
let coun = 0;

buttonRe.onclick = function(){
    if(gameover)
    game();
    else
    return 0;
};

function game(){
    gameover = false;
    inputText.removeAttribute("readonly");
    inputText.value = "";
    wordResult.innerHTML = "";
    wordResult.classList.remove("show");
    if(language[0].state === true){
        result = wordsArabic[Math.floor(Math.random() * count + 1)];
        time.innerText = result.duration * 2;
        coun = result.duration * 1000;
        spanProg.style.animationDuration =`${result.duration}s`;
        wordContainer.innerText = result.value;
        inputText.maxLength = result.value.length;
        getStart();
    }
    else{
        result = wordsEnglish[Math.floor(Math.random() * countenglish + 1)];
        time.innerText = result.duration * 2;
        coun = result.duration * 1000;
        spanProg.style.animationDuration =`${result.duration}s`;
        wordContainer.innerText = result.value;
        inputText.maxLength = result.value.length;
        getStart();
    }
}

function getStart(){
    spanProg.style.backgroundColor = "#0e75eb";
    spanProg.style.display = 'block';
    let sec = coun - coun * (30 / 100);
    let coune = setInterval(incr,500);

    function incr(){
        time.innerText--;
        if(parseInt(time.innerText) <= 0){
            clearInterval(coune);
        }
    }
    setTimeout(()=>{
        timeProgress.style.animationPlayState ="running";
        spanProg.style.backgroundColor = "red";
    },sec);
    setTimeout(()=>{
      timeProgress.style.animationPlayState = "paused";
     spanProg.style.display = 'none';
        gameOver();
    },coun);
}

function gameOver(){
    inputText.blur();
    inputText.setAttribute("readonly","true");
    let ele=inputText.value.split("").filter((el,ind)=>{
        return el ===  wordContainer.innerText.split("")[ind];
    });
    wordResult.innerHTML = `الحروف الصحيحة: ${ele.length},<span>   الحروف الخاطئة: ${inputText.value.length - ele.length}</span>, الحروف المتبقية: ${wordContainer.innerText.length - inputText.value.length}`;
    wordResult.classList.add("show");
    gameover = true;
}
