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