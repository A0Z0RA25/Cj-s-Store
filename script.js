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
    const strat = document.querySelector(".strat");
    strat.appendChild(para);

}else if(person == "Shermel" || person == "shermel"){
    const para = document.createElement("p");
    const node = document.createTextNode(`Yang si ${person} 'di pa yan nakaka move on at laging sinasabi na wala na raw pake pero todo stalk parin.`);
    para.appendChild(node);
    const strat = document.querySelector(".strat");
    strat.appendChild(para);
} 

else if(person == "Denicel" || person == "Denden"){
    const para = document.createElement("p");
    const node = document.createTextNode(`Si ${person} maliit ang tite.`);
    para.appendChild(node);
    const strat = document.querySelector(".strat");
    strat.appendChild(para);
} 

else if(person === "" || person == null){
    person = window.prompt("SABING ENTER YOUR NAME ABA");
    const names = document.querySelector(".name-intro");
    names.textContent = `Hi ` + person + `, WELCOME to`;


    const para = document.createElement("p");
    const node = document.createTextNode(`Yan si ${person} isa yan sa pinaka mabait ko na kaklase eh, alam ko kaya sya pumunta sa website na 'to para bumili ng tinda ko. Napaka bait talagang tao aba lagi ko yan ipagdarasal kapag bumili yan.'😇😇😇`);
    para.appendChild(node);
    const strat = document.querySelector(".strat");
    strat.appendChild(para);


}else {
    const para = document.createElement("p");
    const node = document.createTextNode(`Yan si ${person} isa yan sa pinaka mabait ko na kaklase eh, alam ko kaya sya pumunta sa website na 'to para bumili ng tinda ko. Napaka bait talagang tao aba lagi ko yan ipagdarasal kapag bumili yan.'😇😇😇`);
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
