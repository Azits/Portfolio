function afficherProjets() {
    const container = document.getElementById("projets-cards");
    data.forEach((projet) => {
      const html = `
        <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm border-0 hover-scale">
                <div class="card-top-bar d-flex gap-2 p-2">
                    <img src="img/circle-solid (2).svg" height="12" width="12" alt="close">
                    <img src="img/circle-solid (1).svg" height="12" width="12" alt="minimize">
                    <img src="img/circle-solid.svg" height="12" width="12" alt="maximize">
                </div>
                <img src="${projet.Image}" class="card-img-top" alt="${projet.nom}">
                <div class="card-body text-center">
                    <h5 class="card-title">${projet.nom}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${projet.categorie}</h6>
                    <p class="card-text">${projet.description}</p>
                    <a href="${projet.github}" class="btn btn-outline-dark btn-sm mt-2" target="_blank">
                        <i class="bi bi-github me-1"></i> Voir sur GitHub
                    </a>
                </div>
    
            </div>
        </div>
      `;
      container.innerHTML += html;
    });
  }
  
  function afficherTechnologies() {
    const container = document.getElementById("skills-cards");
    technologie.forEach((tech) => {
      const html = `
        <div class="col-6 col-md-3 mb-4 text-center">
          <img src="${tech.Image}" alt="${tech.nom}" style="height: 60px;">
          <p class="mt-2 fw-bold">${tech.nom}</p>
        </div>
      `;
      container.innerHTML += html;
    });
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    afficherProjets();
    afficherTechnologies();
  });
  