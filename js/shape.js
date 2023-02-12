let sideMenu = document.querySelector(".side-menu");
let btnSideMenu = document.querySelector(".side-menu .btn-side-menu");
let spanBtnSideMenu = document.querySelectorAll(".side-menu .btn-side-menu span");
let exapleButt = document.querySelectorAll(".card-shape button");
let htmlCode = document.querySelector(".html-code");
let cssCode = document.querySelector(".css-code");
let editShape = document.querySelector(".edit-shape");
let editShapeButt = document.querySelector(".edit-shape button");
let overlayCode = document.querySelector(".overlay-code");
let closeCode = document.querySelector(".close-code");
let tabMenu = document.querySelectorAll(".tab-menu div");
let cards = document.querySelectorAll(".cards .card-shape");

console.log(exapleButt[0]);
console.log("vcjndf");

btnSideMenu.onclick = function(){
    sideMenu.classList.toggle("width-side-menu");
    spanBtnSideMenu[1].classList.toggle("display-none");
    spanBtnSideMenu[0].classList.toggle("rotate1");
    spanBtnSideMenu[2].classList.toggle("rotate2");
}
// /////////////////////////////////////////////////////////////////////
let codeMenu = [{
    name : 'button',
    codeShape : '<button>بحث</button>',
    countHTML: 1,
    codeHTML : `<span>&lt;button&gt;</span>Shape<span>&lt;/button&gt;</span>`,
    countCss: 10,
    codeCss : `<span class="tag">button{</span>   
    <span class="prop">padding</span>:<span>10px 25px;</span>
    <span class="prop">font-size</span>:<span>14px;</span> 
    <span class="prop">border</span>:<span>0;</span> 
    <span class="prop">background-color</span>:<span> #0e75eb;</span>
    <span class="prop">border-radius</span>:<span> 5px;</span>
    <span class="prop">color</span>:<span> white;</span>
    <span class="prop">cursor</span>:<span> pointer;</span>
    <span class="prop">font-weight</span>:<span> 500;</span>
    <span class="tag">}</span>`
},
{
    name : 'input',
    codeShape : '<input type="text" placeholder="بحث">',
    countHTML: 1,
    codeHTML : `<span>&lt;input <span class="attr">type=<span>"text"</span></span> <span class="attr">placeholder=<span>"بحث"</span></span>&gt;</span>`,
    countCss: 24,
    codeCss : `<span class="tag">input[type = "text"]{</span>
    <span class="prop">display</span>:<span> inline-block;</span>
    <span class="prop">padding</span>:<span> 12px 10px;</span>
    <span class="prop">border-radius</span>:<span> 5px;</span>
    <span class="prop">border</span>:<span> 0;</span>
    <span class="prop">font-size</span>:<span> 14px;</span>
    <span class="prop">font-weight</span>:<span> 500;</span>
    <span class="prop">transition</span>:<span> .2s;</span>
<span class="tag">}</span>

<span class="tag">input[type = "text"]:focus{</span>
    <span class="prop">outline</span>:<span> 0;</span>
    <span class="prop">border</span>:<span> 2px solid #0e75eb;</span>
<span class="tag">}</span>

<span class="tag">input[type = "text"]::placeholder{</span>
<span class="prop">color</span>:<span> #9baacf;</span>
<span class="prop">transition</span>:<span> .3s;</span>
<span class="tag">}</span>

<span class="tag">input[type = "text"]:focus::placeholder{</span>
<span class="prop">opacity</span>:<span> 0;</span>
<span class="tag">}</span>
`
},
{
    name : 'table',
    codeShape : `<table class="normal-table">
    <tr>
    <th>الاسم</th>
    <th>العمر</th>
    <th>الجنسية</th>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>`,
    countHTML: 22,
    codeHTML : `<span>&lt;table&gt;</span>
    <span>&lt;tr&gt;</span>
        <span>&lt;th&gt;</span>الاسم<span>&lt;/th&gt;</span>
        <span>&lt;th&gt;</span>العمر<span>&lt;/th&gt;</span>
        <span>&lt;th&gt;</span>الجنسية<span>&lt;/th&gt;</span>
    <span>&lt;/tr&gt;</span>
    <span>&lt;tr&gt;</span>
        <span>&lt;td&gt;</span><span>&lt;/td&gt;</span>
        <span>&lt;td&gt;</span><span>&lt;/td&gt;</span>
        <span>&lt;td&gt;</span><span>&lt;/td&gt;</span>
    <span>&lt;/tr&gt;</span>
    <span>&lt;tr&gt;</span>
        <span>&lt;td&gt;</span><span>&lt;/td&gt;</span>
        <span>&lt;td&gt;</span><span>&lt;/td&gt;</span>
        <span>&lt;td&gt;</span><span>&lt;/td&gt;</span>
    <span>&lt;/tr&gt;</span>
    <span>&lt;tr&gt;</span>
        <span>&lt;td&gt;</span><span>&lt;/td&gt;</span>
        <span>&lt;td&gt;</span><span>&lt;/td&gt;</span>
        <span>&lt;td&gt;</span><span>&lt;/td&gt;</span>
    <span>&lt;/tr&gt;</span>
<span>&lt;/table&gt;</span>
    `,
    countCss: 18,
    codeCss : `<span class="tag">table{</span>
    <span class="prop">border</span>:<span> 1px solid #0e75eb;</span>
    <span class="prop">border-collapse</span>:<span> collapse;</span>
    <span class="prop">width</span>:<span>  80%;</span>
    <span class="tag">}</span>

    <span class="tag">table tr th{</span>
    <span class="prop">padding</span>:<span> 10px;</span>
    <span class="prop">border</span>:<span> 1px solid black;</span>
    <span class="prop">font-size</span>:<span> 15px;</span>
    <span class="prop">color</span>:<span> #0e75eb;</span>
    <span class="tag">}</span>

    <span class="tag">table tr td{</span>
    <span class="prop">padding</span>:<span> 10px;</span>
    <span class="prop">border</span>:<span> 1px solid black;</span>
    <span class="prop">height</span>:<span> 30px;</span>
    <span class="tag">}</span>
`
},
{
    name : 'checkbox',
    codeShape : `<div>
    <p>اللغات التي تجيدها</p>
    <input type="checkbox" id="checkbox1" name="ckeck">
    <label for="checkbox1">HTML</label><br>
    <input type="checkbox" id="checkbox2" name="ckeck">
    <label for="checkbox2">Css</label><br>
    <input type="checkbox" id="checkbox3" name="ckeck">
    <label for="checkbox3">javascript</label>
</div>`,
    countHTML: 7,
    codeHTML : `<span>&lt;p&gt;</span>اللغات التي تجيدها<span>&lt;/p&gt;</span>
    <span>&lt;input <span class="attr">type=<span>"checkbox"</span></span> <span class="attr">id=<span>"checkbox1"</span></span>&gt;</span>
    <span>&lt;label <span class="attr">for=<span>"checkbox1"</span></span>&gt;</span>HTML<span>&lt;/label&gt;</span> &lt;br&gt;
    <span>&lt;input <span class="attr">type=<span>"checkbox"</span></span> <span class="attr">id=<span>"checkbox2"</span></span>&gt;</span>
    <span>&lt;label <span class="attr">for=<span>"checkbox2"</span></span>&gt;</span>Css<span>&lt;/label&gt;</span> &lt;br&gt;
    <span>&lt;input <span class="attr">type=<span>"checkbox"</span></span> <span class="attr">id=<span>"checkbox3"</span></span>&gt;</span>
    <span>&lt;label <span class="attr">for=<span>"checkbox3"</span></span>&gt;</span>javascript<span>&lt;/label&gt;</span> &lt;br&gt;
    `,
    countCss: 9,
    codeCss : `<span class="tag">p{</span>
    <span class="prop">margin-bottom</span>:<span> 8px;</span>
    <span class="tag">}</span>
    
    <span class="tag">input[type = 'checkbox']{</span>
    <span class="prop">accent-color</span>:<span> #0e75eb;</span>
    <span class="tag">}</span>
    
    <span class="tag">label{</span>
    <span class="prop">font-size</span>:<span> 15px;</span>
    <span class="tag">}</span>
`
}
];

closeCode.onclick = function(){
    overlayCode.style.display = 'none';
};
exapleButt.forEach(ele=>{
    ele.addEventListener('click',e=>{
        addCode(ele);
        overlayCode.style.display = 'block';
    });
});
function addCode(Ele){
        codeMenu.forEach(ele=>{
            if(ele.name == Ele.parentElement.dataset.code){
                editShape.innerHTML = "";
                editShape.innerHTML = ele.codeShape;
                createEle(ele.countHTML,ele.codeHTML,ele.countCss,ele.codeCss);
            }});
        // editShapeButt.classList.remove("active");
    }
    // else if(ele.matches(".exaple-shape > button:nth-of-type(2)")){
    //     createEle(1,`<span>&lt;button&gt;</span>Shape<span>&lt;/button&gt;</span>`,16,
    //     `<span class="tag">button{</span>   
    //     <span class="prop">padding</span>:<span>10px 25px;</span>
    //     <span class="prop">font-size</span>:<span>14px;</span> 
    //     <span class="prop">border</span>:<span>0;</span> 
    //     <span class="prop">background-color</span>:<span> #0e75eb;</span>
    //     <span class="prop">border-radius</span>:<span> 5px;</span>
    //     <span class="prop">color</span>:<span> white;</span>
    //     <span class="prop">cursor</span>:<span> pointer;</span>
    //     <span class="prop">font-weight</span>:<span> 500;</span>
    //     <span class="prop">transition</span>:<span> .3s;</span>
    //     <span class="tag">}</span>
        
    //     <span class="tag">button:hover{</span>
    //     <span class="prop">background-color</span>:<span> #ffffff;</span>
    //     <span class="prop">color</span>:<span> #0e75eb;</span>
    //     <span class="tag">}</span>
    //     `);
    //     editShapeButt.classList.add("active");
    // }
//     else if(ele.matches(".exaple-shape > button:nth-of-type(3)")){
//         editShape.innerHTML = "";
//         editShape.innerHTML = `<input type="text" placeholder="بحث">`;
//         createEle(1,,);
//         editShapeButt.classList.add("active");
//     }
// }

function createEle(lineH,codeHT,lineC,codeCS){
    let pH = document.createElement("p");
    let pC = document.createElement("p");
    let preH = document.createElement("pre");
    let preC = document.createElement("pre");
    let codeH = document.createElement("code");
    let codeC = document.createElement("code");
    for(let i=1;i<=lineH;i++){
        let spanH = document.createElement("span");
        spanH.innerText = i;
        pH.appendChild(spanH);
    }
    for(let i=1;i<=lineC;i++){
        let spanC = document.createElement("span");
        spanC.innerText = i;
        pC.appendChild(spanC);
    }
    codeH.innerHTML = codeHT;
    preH.appendChild(codeH);
    codeC.innerHTML = codeCS;
    preC.appendChild(codeC);

    htmlCode.innerHTML = "";
    htmlCode.appendChild(pH);
    htmlCode.appendChild(preH);

    cssCode.innerHTML = "";
    cssCode.appendChild(pC);
    cssCode.appendChild(preC);
}

// //////////////////////////////////////////////////////////////////

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