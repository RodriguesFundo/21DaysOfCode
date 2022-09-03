const screen = document.getElementById("main");
const th1= document.getElementById("h1");
const space = document.getElementsByTagName("h1")['h1']
const text= ".<Hello world/>";
const sleep=250;
var color="ligth";

function writer(space, text, sleep){

    let string= text.split("").reverse();     

    let writer=setInterval(() => {
        if(!string.length){
            return clearInterval(writer);
        }
        let next= string.pop();
 
        space.innerHTML+=next;

    }, sleep);

}
function changeColor(back,fore){
    document.body.style.backgroundColor=back;
    th1.style.color= fore;
}


function controler(){
    
    if (color=="light") {
        changeColor('#121212','#0de218');
        color= "dark"   
    } else if (color="dark") {
        changeColor('#fff','#b00de2');
        color="light"   
    }
}

document.body.onload= writer(space, text, sleep);

screen.addEventListener('click', controler);