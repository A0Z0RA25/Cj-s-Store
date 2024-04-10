const home = document.querySelector("#home");
const about = document.querySelector("#about");
const container1 = document.querySelector(".home-page");
const container2 = document.querySelector(".about-page");


home.addEventListener('click', showHome);
function showHome(){

    if(container1.style.display = "none"){
        container1.style.display = "block";
        container2.style.display = "none";
    } else {
        container1.style.display = "block";
    }
}

about.addEventListener('click', showAbout);
function showAbout(){

    if(container2.style.display = "none"){
        container2.style.display = "block";
        container1.style.display = "none"
    } else {
        container2.style.display = "block";
    }
}
//
let person = prompt("Enter your name FIRST name");
const names = document.querySelector(".name-intro");
names.textContent = `Hi ` + person + `, WELCOME to`;

if (person == "CJ"){
    const para = document.createElement("p");
    const node = document.createTextNode(`Si ${person} ay napaka bait na bata, masipag, walang tinatapakang tao, malapit kay God, at wala kanang masasabi kase napaka bait talaga.`);
    para.appendChild(node);
    const strat = document.querySelector(".greatings");
    strat.appendChild(para);

}else if(person == "Shermel" || person == "shermel"){
    const para = document.createElement("p");
    const node = document.createTextNode(`Yang si ${person} 'di pa yan nakaka move on at laging sinasabi na wala na raw pake pero todo stalk parin.`);
    para.appendChild(node);
    const strat = document.querySelector(".greatings");
    strat.appendChild(para);
} 

else if(person == "Denicel" || person == "Denden"){
    const para = document.createElement("p");
    const node = document.createTextNode(`Si ${person} maliit ang tite.`);
    para.appendChild(node);
    const strat = document.querySelector(".greatings");
    strat.appendChild(para);
} 

else if(person === "" || person == null){
    person = window.prompt("SABING ENTER YOUR NAME ABA");
    const names = document.querySelector(".name-intro");
    names.textContent = `Hi ` + person + `, WELCOME to`;


    const para = document.createElement("p");
    const node = document.createTextNode(`Musta pareng ${person}, pag bumili ka ng ballpen ko gaganda ang sulat mo. Pero alam mo kung ano mas maganda?`);
    para.appendChild(node);
    const strat = document.querySelector(".greatings");
    strat.appendChild(para);


}else {
    const para = document.createElement("p");
    const node = document.createTextNode(`Musta pareng ${person}, pag bumili ka ng ballpen ko gaganda ang sulat mo. Pero alam mo kung ano mas maganda?`);
    para.appendChild(node);
    const strat = document.querySelector(".greatings");
    strat.appendChild(para);
 }

const closeBtn = document.querySelector(".close");



//

 function specialMes(){
    document.querySelector(".message").style.display = "block"
 }

 let btn = document.querySelector('.strat .close')
let hinge = document.querySelector('.strat')

btn.addEventListener('click', () => {
  hinge.classList.toggle('animated')
})

//

function showAtrri(){
    const ballpenHidden = document.querySelector(".hidden");
    const ballAttri = document.querySelector(".attributes");

    if(ballpenHidden.style.display = "block"){
        ballpenHidden.style.display = "none";
        ballAttri.style.display = "block";
    } else{
        ballpenHidden.style.display = "none";
        ballAttri.style.display = "block";
    }
    
}

function attriBtn(){
    const ballpenHidden = document.querySelector(".hidden");
    const ballAttri = document.querySelector(".attributes");

    ballAttri.style.display = "none"
    ballpenHidden.style.display = "block"
}
