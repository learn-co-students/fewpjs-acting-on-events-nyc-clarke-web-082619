// Your code here

//let dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    let dodger = document.getElementById("dodger");
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    console.log(dodger.style.left)
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    let dodger = document.getElementById("dodger");
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    console.log(dodger.style.left);
    dodger.style.left = `${left + 1}px`;
}





document.addEventListener("keydown", function(e) {
    const key = e.key
    if (key === "ArrowLeft") {
        //console.log(e);
        moveDodgerLeft();
    }
});

document.addEventListener("keydown", function(e){
    const key = e.key
    if (key === "ArrowRight"){
        //console.log(e);
        moveDodgerRight();
    }
});