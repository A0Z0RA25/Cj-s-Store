const home = document.querySelector("#home");
const about = document.querySelector("#about");
const container1 = document.querySelector(".home-page");
const container2 = document.querySelector(".about-page");

home.addEventListener('click', showHome);
function showHome(){
    if(container1.style.display = "none"){
        container1.style.display = "block";
        container2.style.display = "none"
    } else {
        conatiner.style.display = "block";
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
