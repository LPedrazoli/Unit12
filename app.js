let userNum = document.getElementById("getNumber");
userNum.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        run(e);
    }
})

userNum.focus();

let counter = 0;

function run() {
    randomNum();
    userNumber();
    compareNumbers();
}

function randomNum() {
    let ran = Math.floor(Math.random() * 10);
    return  ran;
}

function userNumber() {
    let user = document.getElementById("getNumber").value;
    return user;
}

function compareNumbers() {
    let a = userNumber();
    let b = randomNum();
    let z = document.getElementById("compare");
    let c = document.getElementById("counter");

    if (a != b) {
        z.innerHTML = "Numbers are not the same. The computer got " + b + ", and the user got " + a + ".";
        z.style.backgroundColor = "white";
        z.style.borderStyle = "solid";
        z.style.borderWidth = "5px";
        z.style.borderColor = "black";
        z.style.color = "red";
        z.style.padding = "20px";
        z.style.textAlign = "center";
        counter++;
        c.innerHTML = "You have tried " + counter + " times to get it right.";
        c.style.backgroundColor = "white";
        c.style.borderStyle = "solid";
        c.style.borderWidth = "5px";
        c.style.borderColor = "black";
        c.style.color = "red";
        c.style.padding = "20px";
        c.style.textAlign = "center";
        counter = 0;
        document.querySelector("body").style.backgroundColor = "green";
    }
    if (a == b) {
        z.innerHTML = "Numbers are the same. The computer got " + b + ", and the user got " + a + ".";
        z.style.backgroundColor = "white";
        z.style.borderStyle = "solid";
        z.style.borderWidth = "5px";
        z.style.borderColor = "black";
        z.style.color = "green";
        z.style.padding = "20px";
        z.style.textAlign = "center";
        c.innerHTML = "You have tried " + counter + " times to get it right.";
        c.style.backgroundColor = "white";
        c.style.borderStyle = "solid";
        c.style.borderWidth = "5px";
        c.style.borderColor = "black";
        c.style.color = "green";
        c.style.padding = "20px";
        c.style.textAlign = "center";
        counter = 0;
        document.querySelector("body").style.backgroundColor = "green";
    }

    resetInput();
}

function resetInput() {
    document.getElementById("getNumber").value = "";
}
