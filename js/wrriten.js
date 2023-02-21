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
let btnWrt = document.querySelectorAll('.btn-wrt');
let menuLeft = document.querySelectorAll('.menu-left-write > div');
let btnLetterContain = document.querySelector('.btn-letter-contain');
let btnLea = document.querySelector('.btn-lea');
console.log(btnWrt);
btnWrt.forEach(ele=>{
    ele.addEventListener('click',e=>{
        btnWrt.forEach(ee=>{
            ee.classList.remove('active');
        });
        ele.classList.add('active');
        menuLeft.forEach(el=>{
            // console.log(el.dataset.sec);
            // console.log(ele.dataset.sec);
            if(el.dataset.sec === ele.dataset.sec){
                console.log('true');
                el.style.display = 'block';
            } else{
                console.log('false');
                el.style.display = 'none';
            }
        })
    })
})

btnLea.onclick = function(){
    // if(el.dataset.sec === 'learn'){
        btnLetterContain.classList.toggle('hide');
    // } else{
        // btnLetterContain.style.height = '0px';
    // }
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
        value: "إحدى وصايا الرسول صلى الله عليه وسلم قبل مماته هي :الصلاة الصلاة وما ملكت ايمانكم",
        duration: 15
    },
    2:{
        value: "إحدى وصايا الرسول صلى الله عليه وسلم قبل مماته هي :اوصيكم بالنساء خيرا",
        duration: 10
    },
    3:{
        value: "إحدى وصايا الرسول صلى الله عليه وسلم قبل مماته هي :الصلاة الصلاة وما ملكت ايمانكم",
        duration: 20
    },
    4:{
        value:"إحدى وصايا الرسول صلى الله عليه وسلم قبل مماته هي :الصلاة الصلاة وما ملكت ايمانكم",
        duration: 5
    }
};

let wordsEnglish = {
    1:{
        value: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit iusto impedit, fugiat fuga dolor blanditiis voluptate nam, commodi ea delectus excepturi unde in veritatis ducimus, rerum atque nulla nisi error.",
        duration: 15
    },
    2:{
        value: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit iusto impedit,",
        duration: 10
    },
    3:{
        value: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        duration: 20
    },
    4:{
        value: "Lorem, ipsum dolor sit",
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
// ///////////////////////////////////////////////////////////
let srs = document.querySelector('.wrriten-text p');
let btnLetter = document.querySelectorAll('.contain-letter div');
let spanColor = document.querySelector('.wrriten-text p span');
let textInput = [];
let i=0;
let width = 0;
let statment = [
    'ااااااااااااا',
    'بببببببببببببببب',
    'تتتتتتتتتتتتتتتتت',
    'ثثثثثثثثثثثثثثثثثثثث',
    'جججججججججججججججج',
    'حححححححححححححححححححح',
    'خخخخخخخخخخخخخخخخخخخ',
    'ددددددددددددددددددد',
    'ذذذذذذذذذذذذذذذذذذ',
    'ررررررررررررررررررر',
    'ززززززززززززززززززز',
    'سسسسسسسسسسسسسسسسسسس',
    'ششششششششششششششششششششش',
    'صصصصصصصصصصصصصصصصصصصصص',
    'ضضضضضضضضضضضضضضضضضضضضضض',
    'ططططططططططططططططططططط',
    'ظظظظظظظظظظظظظظظظظظظظظظظ',
    'عععععععععععععععععععععع',
    'غغغغغغغغغغغغغغغغغغغغغ',
    'فففففففففففففففففففففف',
    'ققققققققققققققققققققققق',
    'كككككككككككككككككككككككك',
    'للللللللللللللللللللللل',
    'ممممممممممممممممممممممم',
    'ننننننننننننننننننننننن',
    'هههههههههههههههههههههههه',
    'ووووووووووووووووووووووووو',
    'يييييييييييييييييييييييييي'
]

btnLetter.forEach(ele=>{
    ele.addEventListener('click',e=>{
        srs.innerHTML = '';
        srs.innerText = statment[parseInt(ele.dataset.btn)];
        srs.appendChild(spanColor);
        spanColor.style.right=0;
        spanColor.style.width=0;
        width = 0;
        i=0;
        textInput = srs.innerText.split("");
        learnL();
    });
});





function learnL(){
    textInput = srs.innerText.split("");
    document.addEventListener('keydown',setColor);
}

function setColor(e){
    if(textInput[i] == 'س' || textInput[i] == 'ش' || textInput[i] == 'ص' || textInput[i] == 'ض' || textInput[i] == 'ط' || textInput[i] == 'ظ' || textInput[i] == 'ك' || textInput[i] == 'س'){
        spanColor.style.width = '12px';
    } else if(textInput[i+1] === " "){
        spanColor.style.width = '15px';
    }else{
        spanColor.style.width = '7px';
    }
    if(e.keyCode == 32 && e.target == document.body){
        e.preventDefault();
    }
    if(i === textInput.length){
        document.removeEventListener('keydown',setColor);  
    }
    if(e.key !== textInput[i++]){
        let sp = spanColor.cloneNode();
        sp.style.right = width + 'px';
        sp.style.backgroundColor = "red";
        srs.appendChild(sp);
    }
    else{
        let sp = spanColor.cloneNode();
        sp.style.right = width + 'px';
        srs.appendChild(sp);
    }
    width +=parseInt(getComputedStyle(spanColor).width);
    // console.log(getComputedStyle(spanColor).width);
}