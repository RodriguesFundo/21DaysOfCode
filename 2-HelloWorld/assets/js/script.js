const screen = document.getElementById("main");
//container.addEventListener('click', a=>alert(""))
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

function changeColor(){
    console.log("main")
    screen.classList.add("light");
    
}

document.body.onload= writer(space, text, sleep);

screen.addEventListener('click', changeColor);