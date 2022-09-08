
var btnClick= document.getElementById('frozen_Cloud');

function changeTime(){
    btnClick.innerText= "Welcome summer";
    btnClick.className="btnClickScript";
}

addEventListener('click', changeTime)