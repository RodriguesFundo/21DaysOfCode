const container= document.getElementById('container');
var colorControle=0;
var mode= document.getElementById('mode');
var buttons = document.querySelectorAll('button');
var screen = document.getElementById('screen');
var screenValue='';

for (btn of buttons) {
    btn.addEventListener('click', (e)=> {
        buttonText= e.target.innerText;
        // console.log(buttonText);
        if (buttonText=='x') {
            buttonText='*'
            screenValue+=buttonText;
            screen.value= screenValue;
            // console.log(screenValue)
        } else if (buttonText=='+') {
            buttonText='+'
            screenValue+=buttonText;
            screen.value= screenValue;
            // console.log(screenValue)
        } else if (buttonText=='-') {
            buttonText='-'
            screenValue+=buttonText;
            screen.value= screenValue;
            // console.log(screenValue)
        } else if (buttonText=='/') {
            buttonText='/'
            screenValue+=buttonText;
            screen.value= screenValue;
            // console.log(screenValue)
        }
         else if(buttonText=='=') {
            screen.value= eval(screenValue);
            console.log(screenValue)
        } else if(buttonText=='AC') {
            screenValue="";
            screen.value=screenValue;
        }else if(buttonText=='M') {
            if (colorControle==0) {
                container.className='container'    
                screen.className='screen'
                mode.className='ligth btn'
                colorControle=1;
            } else if(colorControle==1){
                container.className='darkContainer';
                screen.className='darkScreen'
                mode.className= 'dark btn';
                colorControle=0;
            }
        }
         else{
            screenValue+=buttonText
            screen.value= screenValue
        }
    })
        
}