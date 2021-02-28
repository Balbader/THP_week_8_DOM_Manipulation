// Modification #1:

const changeTitle = (str) => {
    const str_1 = "Ce que j'ai appris a THP";
    const str_2 = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
    let title = document.getElementsByTagName("h1")[0].innerHTML = str_1;
    let subTitle = document.querySelectorAll("p.lead")[0].textContent = str_2;
};
changeTitle();