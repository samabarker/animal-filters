//Stuff we will change when we clock the myBtn
stuffToChange = () => {
    document.getElementById("my-h1").innerHTML = "Goodbye World";
    document.getElementById("my-text").style.color = "blue";

    let para = document.getElementsByClassName("my-p");
    for (let item of para) {
        item.style.color = "green";
    }

    let newPara = document.createElement("p");
    let node = document.createTextNode("This is a new paragraph");
    newPara.appendChild(node);
    let element = document.getElementById("main-content");
    element.append(newPara);

    document.getElementById("myBtn").style.display = "none";
}

// Change the stuff as specified in stuffToChange function
document.getElementById("myBtn").addEventListener("click", stuffToChange);

// When hovering over hover-p, alert hello
document.getElementById("hover-p").addEventListener("mouseover", () => {
    alert("Hello");
});

// When clicking on the link, do not follow link. Instead, alert link blocked
document.getElementById("my-link").addEventListener("click", (event) => {
    event.preventDefault();
    alert("Link blocked")
});

// Change the myButton styling when it is clicked
let myButton = document.getElementById("click-it").addEventListener("click", (event) => {
    let btn = event.currentTarget;
    btn.style.backgroundColor = "red";
    btn.innerHTML = "I have been clicked"
})

// When submitBtn is clicked, get first name and last name and alert
let submitBtn = document.getElementById("submitBtn").addEventListener("click", (event) => {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;

    let radios = document.getElementsByName("gender");
    let radioValue;
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            radioValue = radios[i].value;
            console.log(radioValue)
        }
    }
    alert(`Hello ${fname} ${lname}! Your gender is ${radioValue}.`)
})
