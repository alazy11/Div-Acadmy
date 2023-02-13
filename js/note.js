
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
// ///////////////////////////////////////////////////////////////
let inp=document.getElementById("input-note");
let btnList=document.getElementById("btn");
let btnListEdit=document.getElementById("btn-edit");
let container=document.getElementById("text-contain");
let arrInputs = [];
let editEleId = 0;
btnList.onclick = addTOarr;
// document.addEventListener("keydown",e=>{
//     if(e.key == "Enter")
//     addTOarr();
//     else
//     return false;
// }) 
if(localStorage.getItem("notes"))
{
    arrInputs = JSON.parse(localStorage.getItem("notes"));
    console.log(arrInputs);
    addListItem();
}

function addTOarr(){
    if(inp.value === ""){
        inp.style.animationPlayState="running";
    }
    else{
        arrInputs.push({
            id: arrInputs.length,
            text: inp.value
        });
        addListItem();
    }
}

function addListItem(){
    container.innerHTML = "";
    btnListEdit.style.display = 'none';
    btnList.style.display = 'block';
        arrInputs.forEach(ele=>{
            let eleList=document.createElement("div");
            let eleListdele=document.createElement("div");
            let eleListEdit=document.createElement("div");
            let listText=document.createElement("p");
            let eleicon=document.createElement("i");
            let eleiconedit=document.createElement("i");
            listText.classList.add('list-text');
            eleicon.classList.add("fa-solid","fa-xmark");
            eleiconedit.classList.add("fa-solid","fa-pen-to-square");
            eleListdele.className = "delete";
            eleListEdit.className = "edit";
            listText.innerText = ele.text;
            eleList.className = "list";
            eleList.setAttribute("data-id",`${ele.id}`);
            eleListdele.appendChild(eleicon);
            eleListEdit.appendChild(eleiconedit);
            eleList.appendChild(listText);
            eleList.appendChild(eleListdele);
            eleList.appendChild(eleListEdit);
            container.appendChild(eleList);
        });
        localStorage.setItem("notes",JSON.stringify(arrInputs));
        inp.value = "";
}


let Textlist = document.querySelectorAll('.list-text');
let overlayNote = document.querySelector('.overlay-note');
let textNote = document.querySelector('.text-note');
let closeNote = document.querySelector('.close-note');


container.addEventListener('click',e=>{
    console.log(e.target);
    if(e.target.className === 'list-text')
    // ele.addEventListener('click',e=>{
        textNote.innerText = e.target.innerText;
        overlayNote.style.display = 'block';
    // });
})

// container.forEach(ele=>{
//     console.log(ele);

// });

closeNote.onclick = function(){
    overlayNote.style.display = 'none';
}


editFromList();
function editFromList(){
    container.addEventListener("click",e=>{
        if(e.target.classList.contains("fa-pen-to-square")){
            inp.value = arrInputs[parseInt(e.target.closest(".list").dataset.id)].text;
            editEleId = arrInputs[parseInt(e.target.closest(".list").dataset.id)].id;
            e.target.closest(".list").style.display = "none";
            btnListEdit.style.display = 'block';
            btnList.style.display = 'none';
            editElemList(editEleId,inp.value);
        }
    })
}
function editElemList(editEleId,inb){
    inp.oninput = function(){
        inb =inp.value;
    }
    btnListEdit.addEventListener("click",function(){
        if(inb === "" || inb === " "){
            btnListEdit.removeEventListener("click",()=>{});
            addListItem();
        } else {
            arrInputs[editEleId].text = inb;
            addListItem();
        }
    });  
}

deleteFromList();
function deleteFromList(){
    container.addEventListener("click",e=>{
        if(e.target.className === "fa-solid fa-xmark"){
            arrInputs.splice([parseInt(e.target.closest(".list").dataset.id)],1);
            ResetArr(arrInputs);
            addListItem();
        }
    })
}
function ResetArr(arr){
    arr.forEach((ele,ind)=>{
        ele.id = ind;
    });
}
// /////////////////////////////////////////////////////////////////////
