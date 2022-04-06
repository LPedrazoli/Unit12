let userNum = document.getElementById("getNumber");
userNum.addEventListener("keydown", function (e) {
    if (e.keycode == 13) {
        run(e);
    }
})

function run() {
    document.getElementById("paragraph").innerHTML = "Hello World!";
    document.getElementById("paragraph").style.backgroundColor = "green";
    document.getElementById("paragraph").style.color = "red";
    document.getElementById("paragraph").style.padding = "20px";
    randomNum();
    userNumber();
    compareNumbers();

}

function randomNum() {
    let ran = Math.floor(Math.random() * 10);
    let x = document.getElementById("random")
    x.innerHTML = ran;
    x.style.textAlign = "center";
    x.style.backgroundColor = "green";
    x.style.color = "red";
    x.style.padding = "20px";
}