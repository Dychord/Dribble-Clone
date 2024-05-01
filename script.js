const change = document.getElementById('change');
function changeColor(){
    const red = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)
    change.style.backgroundColor = `rgb(${red},${green},${blue})`
}

setInterval(changeColor, 4000);