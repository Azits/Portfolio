const data = [
    {
        nom: "Portfolio",
        categorie: "Développement Web",
        Image: "./img/Portfolio.png",
        description: "Un portfolio interactif et moderne conçu pour présenter mes compétences en développement web, mes projets réalisés et mes connaissances en programmation."
    },
    {
        nom: "Pirate Defense",
        categorie: "Développement C++",
        Image: "./img/image_pirate_defense.png",
        description: "Pirate Defense est un jeu de type tower defense développé en C++ avec une version texte sur terminal (Wintxt) ainsi qu'une version graphique jouable, utilisant SFML."
    },
    {
        nom: "Simulation Virus",
        categorie: "Développement C++",
        Image: "./img/IMG.png",
        description: "Simulation de propagation de virus en C++ avec une interface graphique développée avec la bibliothèque SFML. Le programme simule la propagation d'un virus dans une population de personnes."
    }
];
const technologie=[
    {
        nom: "HTML",
        Image: "./img/html5.svg",
    },
    {
        nom: "CSS",
        Image: "./img/css.svg",
    },
    {   
        nom: "JavaScript",
        Image: "./img/javascript.svg",
    },
    {
        nom: "C++",
        Image: "./img/cplusplus.svg",
    },
    {
        nom: "SFML",
        Image: "./img/sfml.svg",
    },
    {
        nom: "Git",
        Image: "./img/github.svg",
    },
    {
        nom: "figma pour le prototypage",
        Image: "./img/figma.svg",
    }
];

function ajouterProjet() {
    const carts = document.querySelector('#carts');

    if (!carts) {
        console.error("Erreur: L'élément #carts n'existe pas dans le DOM.");
        return;
    }

    data.forEach((projet) => {
        
        const carte = document.createElement('div');
        carte.classList.add('carte');

       
        const bar = document.createElement('div');
        bar.id = "bar";
        bar.innerHTML = `
            <img src="img/circle-solid (2).svg" height="12" width="12">
            <img src="img/circle-solid (1).svg" height="12" width="12">
            <img src="img/circle-solid.svg" height="12" width="12">
        `;

    
        const divImage = document.createElement('div');
        divImage.id = "image";
        divImage.innerHTML = `<img src="${projet.Image}" alt="${projet.nom}">`;

        
        const divInformation = document.createElement('div');
        divInformation.id = "information";
        divInformation.innerHTML = `
            <h2>${projet.nom}</h2>
            <p>${projet.description}</p>
        `;

        
        carte.appendChild(bar);
        carte.appendChild(divImage);
        carte.appendChild(divInformation);

        carts.appendChild(carte);
    });
}
function ajouterTechnologies() {
    const carts = document.querySelector("#Connaissance #carts");

    if (!carts) {
        console.error("Erreur: L'élément #carts n'existe pas dans le DOM.");
        return;
    }

    technologie.forEach((tech) => {

        const carte = document.createElement("div");
        carte.classList.add("carte");

    
        const divImage = document.createElement("div");
        divImage.id = "image";
        divImage.innerHTML = `<img src="${tech.Image}" alt="${tech.nom}">`;

    
        const divInformation = document.createElement("div");
        divInformation.id = "information";
        divInformation.innerHTML = `<h2>${tech.nom}</h2>`;

        
        carte.appendChild(divImage);
        carte.appendChild(divInformation);

        carts.appendChild(carte);
    });
}
function afficherTout() {
    if (window.innerWidth < 768) { 
        alert("⚠️ Attention : Ce site n'est pas encore optimisé pour les tailles d'exrans téléphones. Une version responsive arrivera bientôt !");
    }
    ajouterProjet();
    ajouterTechnologies();
}
document.addEventListener("DOMContentLoaded", afficherTout);

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menu-toggle");
    const nav = document.querySelector("nav");

    toggle.addEventListener("click", () => {
        nav.classList.toggle("open");
    });
});