const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#';
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16 )]
    }
    return color;
}

let interval; // for global scope

const  startChangingColor = function(){

    if(!interval){
        interval = setInterval(changeBgColor, 1000)
    }

    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
}
const  stopChangingColor = function(){
    clearInterval(interval);
    interval = null; 

    // optimizing the code by clearing possible memory but 
    // this will hinder the process when we will click start button again 
    //as now the variable has been declared as null so opmitizing that code too 

}

document.getElementById('start').addEventListener('click' , startChangingColor)
document.getElementById('stop').addEventListener('click' , stopChangingColor)