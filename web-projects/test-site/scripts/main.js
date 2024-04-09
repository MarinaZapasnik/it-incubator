let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === 'images/dream.jpg') {
        myImage.setAttribute('src', "images/dream2.jpg");
    } else {
        myImage.setAttribute("src", "images/dream.jpg");
    }
};


let changeUserButton = document.createElement('button');
let textChangeUserButton = 'Change User';
changeUserButton.append(textChangeUserButton);
document.body.append(changeUserButton)


let myHeading = document.querySelector("h1");


function setUserName() {
    let myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Your wishes come true, " + myName;


if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Your wishes come true, " + storedName;
}
}

changeUserButton.onclick = function () {
    setUserName();
};

