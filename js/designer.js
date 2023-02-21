let sideMenu = document.querySelector(".side-menu");
let btnSideMenu = document.querySelector(".side-menu .btn-side-menu");
let spanBtnSideMenu = document.querySelectorAll(".side-menu .btn-side-menu span");
let shapeIconSource = document.querySelectorAll('.shape-icon-source');
let tooltipOuter = document.querySelector('.tooltip-outer');


btnSideMenu.onclick = function () {
    sideMenu.classList.toggle("width-side-menu");
    spanBtnSideMenu[1].classList.toggle("display-none");
    spanBtnSideMenu[0].classList.toggle("rotate1");
    spanBtnSideMenu[2].classList.toggle("rotate2");
    if (!sideMenu.classList.contains("width-side-menu")) {
        shapeIconSource.forEach(ele => {
            if (ele.classList.contains('active')) {
                tooltipOuter.style.top = ele.offsetTop + ele.offsetHeight / 7 + 'px';
                tooltipOuter.style.display = 'block';
                tooltipOuter.children[0].innerHTML = ele.dataset.name;
                setTimeout(() => {
                    tooltipOuter.style.display = 'none';
                }, 6000);
            }
        });
    }
}

////////////////////////////////////////////////////////////////////////////////////////

// let squer = document.querySelector('.square');
// let circle = document.querySelector('.circle');
// let squtextDesignerer = document.querySelector('.text-designer');
// let line = document.querySelector('.line');
let btnDesigner = document.querySelectorAll('.tools-designer > div');
let containDesigner = document.querySelector('.contain-designer');
let container = document.querySelector('.container');
let sectionDesigner = document.querySelector('.section-designer');
let mainSource = document.querySelector('.main-source');
let footer = document.querySelector('footer');
let heightError = parseInt(getComputedStyle(sectionDesigner).paddingBottom) + footer.offsetHeight;

btnDesigner.forEach(ele => {
    ele.addEventListener('click', e => {
        btnDesigner.forEach(ele => {
            ele.classList.remove('active');
        });
        ele.classList.add('active');
        if (ele.classList.contains('square')) {
            let sq = document.createElement('div');
            sq.classList.add('squar');
            setElement(sq);
        }
        if (ele.classList.contains('circle')) {
            let cl = document.createElement('div');
            cl.classList.add('circle-shape');
            setElement(cl);
        }
        if (ele.classList.contains('text-designer')) {
            let tx = document.createElement('p');
            tx.classList.add('text-shape');
            tx.setAttribute('contenteditable', 'true');
            // tx.innerHTML = 'dhjd';
            setElement(tx);
        }
        if (ele.classList.contains('line')) {
            let li = document.createElement('hr');
            li.classList.add('line-shape');
            setElement(li);
        }
    })
});

function setElement(element) {
    document.body.appendChild(element);
    element.style.left = containDesigner.clientWidth - 300 + "px";
    element.style.top = containDesigner.clientHeight - 200 + "px";
    if(window.innerWidth <= 768){
        element.style.top = containDesigner.clientHeight + 120 + "px";
    }
    element.focus();
    element.onmouseover = function (e) {
        // document.removeEventListener('mousemove', () => { });
        if (e.pageX < (parseInt((getComputedStyle(element).left)) + element.offsetWidth - 10) && e.pageY < (parseInt((getComputedStyle(element).top)) + element.offsetHeight - 10)) {
            element.style.cursor = 'pointer';
            setPotion(element);
        }
        else if (e.pageX > (parseInt((getComputedStyle(element).left)) + element.offsetWidth - 10) && e.pageX < (parseInt((getComputedStyle(element).left)) + element.offsetWidth + 10) && e.pageY < (parseInt((getComputedStyle(element).top)) + element.offsetHeight - 10)) {
            element.style.cursor = 'ew-resize';
            setWidth(element);
        }
        else if (e.pageY > (parseInt((getComputedStyle(element).top)) + element.offsetHeight - 5) && e.pageY < (parseInt((getComputedStyle(element).top)) + element.offsetHeight + 15)) {
            element.style.cursor = 'n-resize';
            setHeight(element);
        }
    }
}


function setPotion(element) {
    element.onmousedown = function (e) {
        function moveAt(pageX, pageY) {
            if (parseInt(getComputedStyle(element).right) < sectionDesigner.offsetWidth - (containDesigner.clientWidth + container.offsetLeft)) {
                element.style.left = sectionDesigner.offsetWidth - (sectionDesigner.offsetWidth - (containDesigner.clientWidth + container.offsetLeft) + element.offsetWidth + 5) + "px";
                document.removeEventListener('mousemove', onMouseMove);
            }
            else if (parseInt(getComputedStyle(element).top) + element.offsetHeight + heightError >= document.documentElement.offsetHeight) {
                element.style.top = (document.documentElement.offsetHeight - (element.offsetHeight + heightError + 10)) + "px";
                document.removeEventListener('mousemove', onMouseMove);
            }
            else if (parseInt(getComputedStyle(element).top) <= document.documentElement.offsetHeight - (containDesigner.offsetHeight + heightError - 10)) {
                element.style.top = (document.documentElement.offsetHeight - (containDesigner.offsetHeight + heightError - 15)) + "px";
                document.removeEventListener('mousemove', onMouseMove);
            }
            else if (parseInt(getComputedStyle(element).left) <= container.offsetLeft + 10) {
                element.style.left = (container.offsetLeft + 15) + 'px';
                document.removeEventListener('mousemove', onMouseMove);
            }
            else {
                element.style.left = pageX - element.offsetWidth / 2 + "px";
                element.style.top = pageY - element.offsetHeight / 2 + "px";
            }

        }
        moveAt(e.pageX, e.pageY);
        function onMouseMove(e) {
            moveAt(e.pageX, e.pageY);
            if (e.pageX < parseInt(getComputedStyle(element).left) || e.pageX > (parseInt(getComputedStyle(element).left) + element.offsetWidth) ||
                e.pageY < parseInt(getComputedStyle(element).top) || e.pageY > (parseInt(getComputedStyle(element).top) + element.offsetHeight)) {
                element.removeEventListener('mousemove', onMouseMove);
                element.onmouseup = null;
            }
        }
        element.onmouseup = function () {
            element.removeEventListener('mousemove', onMouseMove);
            element.onmouseup = null;
        };
        element.addEventListener('mousemove', onMouseMove);

    };


    element.ondragstart = function () {
        return false;
    };
}


function setWidth(ele) {
    ele.onmousedown = function (e) {
        function widthAt(pageX) {
            if (e.pageX < parseInt(getComputedStyle(ele).left) || e.pageX > (parseInt(getComputedStyle(ele).left) + ele.offsetWidth) ||
                e.pageY < parseInt(getComputedStyle(ele).top) || e.pageY > (parseInt(getComputedStyle(ele).top) + ele.offsetHeight)) {
                ele.removeEventListener('mousemove', onMouseM);
                ele.onmouseup = null;
            }
            else
                ele.style.width = pageX - ele.offsetLeft + 5 + "px";
        }
        widthAt(e.pageX);
        function onMouseM(e) {
            widthAt(e.pageX);
            if (e.pageX < parseInt(getComputedStyle(ele).left) || e.pageX > (parseInt(getComputedStyle(ele).left) + ele.offsetWidth) ||
                e.pageY < parseInt(getComputedStyle(ele).top) || e.pageY > (parseInt(getComputedStyle(ele).top) + ele.offsetHeight)) {
                ele.removeEventListener('mousemove', onMouseM);
                ele.onmouseup = null;
            }
        }
        ele.addEventListener('mousemove', onMouseM);
        ele.onmouseup = function () {
            ele.removeEventListener('mousemove', onMouseM);
            ele.onmouseup = null;
        };
    }
    ele.ondragstart = function () {
        return false;
    };
}
function setHeight(ele) {
    ele.onmousedown = function (e) {
        function widthAt(pageY) {
            if (e.pageX < parseInt(getComputedStyle(ele).left) || e.pageX > (parseInt(getComputedStyle(ele).left) + ele.offsetWidth) ||
                e.pageY < parseInt(getComputedStyle(ele).top) || e.pageY > (parseInt(getComputedStyle(ele).top) + ele.offsetHeight)) {
                ele.removeEventListener('mousemove', onMouseM);
                ele.onmouseup = null;
            }
            else
                ele.style.height = pageY - ele.offsetTop + 5 + "px";
        }
        widthAt(e.pageY);
        function onMouseM(e) {
            widthAt(e.pageY);
            if (e.pageX < parseInt(getComputedStyle(ele).left) || e.pageX > (parseInt(getComputedStyle(ele).left) + ele.offsetWidth) ||
                e.pageY < parseInt(getComputedStyle(ele).top) || e.pageY > (parseInt(getComputedStyle(ele).top) + ele.offsetHeight)) {
                ele.removeEventListener('mousemove', onMouseM);
                ele.onmouseup = null;
            }
        }
        ele.addEventListener('mousemove', onMouseM);
        ele.onmouseup = function () {
            ele.removeEventListener('mousemove', onMouseM);
            ele.onmouseup = null;
        };
    }
    ele.ondragstart = function () {
        return false;
    };
}




// function properties1() {

// }


// /////////////////////////////////////////////////////////////


let colorBackground = document.querySelector('.color-background');
let colorBackgroundBor = document.querySelector('.color-background-border');
let color = document.querySelector('.color-ch');
let colorBor = document.getElementById('color-border');
let textColor = document.getElementById('text-color');
let colorChoiced = document.querySelector('.color-choiced');

color.oninput = function () {
    setInput(textColor, colorBackground, color);
}
colorBor.oninput = function(){
    setInputColor(colorBackgroundBor, colorBor);
}
function setInput(texColor, backColor, item) {
    texColor.value = item.value;
    backColor.style.backgroundColor = item.value;
}
function setInputColor(backColor, item) {
    backColor.style.backgroundColor = item.value;
}

let effectsToolOne  = document.querySelector('.effects-tool-one');
let textBorder = document.getElementById('text-border');
let textWidth = document.getElementById('text-width');
let textHieght = document.getElementById('text-hieght');
let menuLeft = document.querySelector('.click-left');

document.addEventListener('click', e => {
    if (e.target.className === 'squar' || e.target.className === 'circle-shape' || e.target.className === 'line-shape' ) {
        effectsToolOne.style.display = 'block';
        e.target.focus();
        properties1(e.target);
    }
    // if (e.target.className === 'squar') {
    //     effectsToolOne.style.display = 'block';
    //     e.target.focus();
    //     properties1(e.target);
    // }
})
document.addEventListener('contextmenu', e => {
    if (e.target.className === 'squar' || e.target.className === 'circle-shape' || e.target.className === 'line-shape' ) {
        e.preventDefault();
        document.body.appendChild(menuLeft);
        menuLeft.style.left = e.pageX + 'px';
        menuLeft.style.top = e.pageY + 'px';
        menuLeft.style.display = 'block';
        menuLeft.firstElementChild.addEventListener('click',ev=>{
            e.target.remove();
            menuLeft.style.display = 'none';
        });
        document.addEventListener('click',e=>{
            menuLeft.style.display = 'none';
        })
    }
    // if (e.target.className === 'squar') {
    //     effectsToolOne.style.display = 'block';
    //     e.target.focus();
    //     properties1(e.target);
    // }
})

function properties1(ele){
    color.addEventListener('input',e=>{
        ele.style.backgroundColor = color.value;
    });
    colorBor.addEventListener('input',e=>{
        ele.style.borderColor = colorBor.value;
    });
    textBorder.addEventListener('input',e=>{
        ele.style.borderWidth = textBorder.value + 'px';
    });
    textWidth.addEventListener('input',e=>{
        ele.style.width = textWidth.value + 'px';
    });
    textHieght.addEventListener('input',e=>{
        ele.style.height = textHieght.value + 'px';
    });
}