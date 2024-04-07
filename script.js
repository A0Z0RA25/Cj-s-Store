const home = document.querySelector("#home");
const about = document.querySelector("#about");
const container1 = document.querySelector(".home-page");
const container2 = document.querySelector(".about-page");


home.addEventListener('click', showHome);
function showHome(){

    var element = document.querySelector(".container");
    element.classList.add("animate__hinge");

    if(container1.style.display = "none"){
        container1.style.display = "block";
        container2.style.display = "none";
    } else {
        container1.style.display = "block";
    }
}

about.addEventListener('click', showAbout);
function showAbout(){

    var element = document.querySelector("li");
    element.classList.add("animate__hinge");

    if(container2.style.display = "none"){
        container2.style.display = "block";
        container1.style.display = "none"
    } else {
        container2.style.display = "block";
    }
}
//
//let person = prompt("Enter your name");
const names = document.querySelector(".name-intro");
names.textContent = `Hi ` + person + `, WELCOME to`;
if (person === "CJ"){
    const para = document.createElement("p");
    const node = document.createTextNode(`jhjhkHdbbuibvu si ${person}`);
    para.appendChild(node);
    const strat = document.querySelector(".strat");
    strat.appendChild(para);
} else {
    const para = document.createElement("p");
    const node = document.createTextNode(`Naapaka mabit na bata nan si ${person}`);
    para.appendChild(node);
    const strat = document.querySelector(".strat");
    strat.appendChild(para);
 }

const closeBtn = document.querySelector(".close");

closeBtn.addEventListener('click', () =>{
    document.querySelector(".strat").style.display = "none";
});

//

 function specialMes(){
    document.querySelector(".message").style.display = "block"
 }
