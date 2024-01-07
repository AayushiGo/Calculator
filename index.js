

function display(val){


    
    document.getElementById('result').value += val
    
    

    return val

}


function solve(){

    let x = document.getElementById('result').value

    let y = eval(x);

    document.getElementById('result').value = y

    return y

}


function clearScreen(){

    document.getElementById('result').value = ''

}



var body = document.querySelector(".main")
var crsr = document.querySelector(".cursor")

body.addEventListener("mousemove" , function(details){
    crsr.style.left = details.x +"px"
    crsr.style.top = details.y +"px"
    
})