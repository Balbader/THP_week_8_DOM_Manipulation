// Modification #1:
const changeTitle = (str) => {
    const str_1 = "Ce que j'ai appris a THP";
    const str_2 = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
    let title = document.getElementsByTagName("h1")[0].innerHTML = str_1;
    let subTitle = document.querySelectorAll("p.lead")[0].textContent = str_2;
}
changeTitle();

// Modification #2:
const changeCallToAction = () => {
    //change text
    const callToAction = document.querySelectorAll("a.btn.btn-primary.my-2")[0].firstChild.textContent = "Ok je veux tester !";
    const callToAction_2 = document.querySelectorAll("a.btn.btn-secondary.my-2")[0].firstChild.textContent = "Non Merci";
    // add url
    const addHref = document.querySelectorAll("a.btn.btn-primary.my-2")[0];
    const addHref_2 = document.querySelectorAll("a.btn.btn-secondary.my-2")[0];
    addHref.setAttribute("href", "http://www.thehackingproject.org");
    addHref_2.setAttribute("href", "https://www.pole-emploi.fr/accueil/");
}
changeCallToAction();

// Modification #3:
const changeLogoName = () => {
    const logoName = document.querySelectorAll("a.navbar-brand.d-flex.align-items-center>strong")[0];
    logoName.textContent = "The THP Experience";
    logoName.style.fontSize = "2em";
}
changeLogoName();

// Modification #4:
const populateImages = () => {
    let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
    let arrImages = document.querySelectorAll("img.card-img-top");
    imagesArray.forEach((value, index) => {
        arrImages[index].src = value;
    });
}
populateImages();

// Modification #5:
const deleteLastCards = () => {
    for(i = 0; i <= 6; i++) {
        let parent = document.querySelectorAll("div.album")[0].getElementsByClassName("container")[0].getElementsByClassName("row")[0];
		let child = parent.lastChild;
		parent.removeChild(child);
    }
}
deleteLastCards();

// Modification #6:
const changeCardText = () => {
    let cardText = document.querySelectorAll("p.card-text");
    for(i = 0; i < 3; i++) {
        switch(i) {
            case 0:
            cardText[i].textContent = "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web";
            break ;
            case 1:
            cardText[i].textContent = "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML";
            break ;
            case 2:
            cardText[i].textContent = "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype.";
            break ;
        }
    }
}
changeLogoName();

// Modification #7:
const changeViewButton = () => {
    let parent = document.querySelectorAll("div.btn-group");
    parent.forEach((div, i) => {
        let child = div.firstElementChild;
        child.classList.remove("btn-outline-secondary");
        child.classList.add("btn-success");
    })
}
changeViewButton();

// Modification #8:
const addRow = () => {
    let row1 = document.querySelectorAll("div.album")[0].getElementsByClassName("container")[0].getElementsByClassName("row")[0];
	row1.insertAdjacentHTML('afterend', '<div class="row"></div>');
	row2 =  document.querySelectorAll("div.album")[0].getElementsByClassName("container")[0].getElementsByClassName("row")[1];
	let thirdCard = row1.childNodes[5];
	row2.appendChild(thirdCard);
}
addRow();