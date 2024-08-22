function abilitiesEfect() {
    var skills = document.getElementById("skills");
    var len_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (len_skills >= 500) {
        let abilities = document.querySelectorAll(".progress");
        abilities[0].classList.add("javascript");
        abilities[1].classList.add("htmlcss");
        abilities[2].classList.add("python");
        abilities[3].classList.add("linux");
        abilities[4].classList.add("windows");
        abilities[5].classList.add("comunication");
        abilities[6].classList.add("teamwork");
        abilities[7].classList.add("resolution");
        abilities[8].classList.add("dedication");
        abilities[9].classList.add("learning");
        abilities[10].classList.add("af");
        abilities[11].classList.add("github");
        abilities[12].classList.add("initiative");
        abilities[13].classList.add("adaptability");
    }
}

window.onscroll = function () {
    abilitiesEfect();
}
