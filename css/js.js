

function balance_show(){
    var show_b = document.getElementById("balance_show")
    var close_b = document.getElementById("balance_close")

    if(show_b.style.display === "none"){
        show_b.style.display = "block";
    }
    else{
        show_b.style.display = "none";
        close_b.style.display = "block";
    }
}
function balance_close(){
    var show_b = document.getElementById("balance_show")
    var close_b = document.getElementById("balance_close")

    if(close_b.style.display === "none"){
        close_b.style.display = "block";
    }
    else{
        close_b.style.display = "none";
        show_b.style.display = "block";
    }
}


function balance_show(){
    var show_i = document.getElementById("balance_show")
    var close_i = document.getElementById("balance_close")

    if(show_i.style.display === "none"){
        show_i.style.display = "block";
    }
    else{
        show_i.style.display = "none";
        close_i.style.display = "block";
    }
}
function balance_close(){
    var show_i = document.getElementById("balance_show")
    var close_i = document.getElementById("balance_close")

    if(close_i.style.display === "none"){
        close_i.style.display = "block";
    }
    else{
        close_i.style.display = "none";
        show_i.style.display = "block";
    }
}



const copyBtns = [...document.getElementsByClassName('copy-btn')]
console.log(copyBtns)

let previous = null

copyBtns.forEach(btn=> btn.addEventListener('click', ()=>{
    console.log('click')
    const color = btn.getAttribute('data-hex')
    console.log(color) 
    navigator.clipboard.writeText(color)
    btn.textContent = 'Copied'
    btn.style.color = "blueviolet";

    // navigator.clipboard.readText().then(clipText=>{
    //     console.log(clipText)
    //     btn.textContent = `copied ${clipText}`
    // })

    if (previous){
        previous.textContent = 'click'
    }
    previous = btn
}))


var picture_save = document.getElementById("picture_save")
picture_save.style.color = "blueviolet";
picture_save_b.style.boder = "blueviolet";