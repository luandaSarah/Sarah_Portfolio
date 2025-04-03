"use client";
const AllProjects = [
  {
    title: "Spotify Clone",
    projectId: "spotify-clone",
    description:
      "Clone simplifié de Spotify réalisé avec React, permettant d'afficher dynamiquement des albums, des artistes et des genres de musique grâce à une API.",
    solution:
      "J'ai développé une interface interactive en React permettant de récupérer et d'afficher dynamiquement des albums, artistes et genres musicaux via des requêtes API. L'affichage se met à jour au scroll pour une navigation fluide. Une barre de recherche avec filtres permet d'affiner les résultats. La page d\'accueil affiche des albums de façon aléatoire. Chaque album est associé à un genre et à un artiste via un ID. Il contient également des morceaux de musique qu\'il est possible d\'écouter directement depuis l\'interface.",
    extractTitle: "Requête API pour récupérer dynamiquement les artistes et albums.",
    codeExplaination:
      "Ce code récupère dynamiquement des données via une requête GET, met à jour l'affichage lors du défilement et évite les doublons. L'encapsulation dans le hook useEffect permet le re-render du composant à chaque changement de page contenant les nouvelles données.",
    codeExtract: `useEffect(() => {
        fetch("http://localhost:8000/data?page=" + page +"&limit=20",{
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((newData) => {
                setData((prevData) => {
                    const updatedData = [...prevData];
                    newData.forEach(item => {
                        if (!updatedData.find(a => a.id === item.id)) {
                            updatedData.push(item);
                        }
                    });
                    return updatedData;
                });
            });
    }, [page]);`,
    technologies: ["react", "css", "docker"],
    img: "/thumbnails/spotify.webp",
    githubLink: "https://github.com/luandaSarah/Projet-WebAcademy-Spotify",
  },

  {
    title: "Puissance 4",
    projectId: "puissance-4",
    description:
      "J'ai développé un jeu de Puissance 4 entièrement fonctionnel en JavaScript Vanilla, en appliquant la Programmation Orientée Objet (POO) et en manipulant directement le DOM pour une expérience interactive et dynamique",
    solution:
      "J'ai créé une classe Puissance4 permettant de générer dynamiquement une grille de jeu, de gérer l’interaction des joueurs et l'ajout des pièces dans la grille, ainsi que de détecter les conditions de victoire (alignements horizontaux, verticaux et diagonaux). Lors de l'instanciation de cette classe, il est possible de définir la taille de la grille.",
    extractTitle: " Initialisation de la grille",
    codeExplaination:
      "Ce code génère dynamiquement une grille en créant des lignes et des colonnes de div, chacune représentant une case de jeu. Chaque case est associée à un eventListener pour gérer l'ajout des pièces lorsqu’un joueur clique dessus.",
    codeExtract: `createGrid() {
    this.grid = document.createElement("div");
    this.grid.id = "grid";
    this.grid.style.display = "flex";
    this.grid.style.flexDirection = "column";

    this.board = [];

    for (let r = 0; r < this.caseX; r++) {
        let row = [];
        let rowContainer = document.createElement("div");
        rowContainer.style.display = "flex";

        for (let c = 0; c < this.caseY; c++) {
            row.push(" ");
            let tile = document.createElement("div");
            tile.id = r + '_' +c;
            tile.classList.add("tile");
            tile.addEventListener("click", (event) => this.setPieces(event.target));
            rowContainer.appendChild(tile);
        }

        this.grid.appendChild(rowContainer);
        this.board.push(row);
    }

    document.body.appendChild(this.grid);
}
`,
    technologies: ["javascript", "html", "css"],
    img: "/thumbnails/puissance4.webp",
    // gallery: ["/thumbnails/puissance4-thumbnail.webp", ],
    link: "https://luandasarah.github.io/Projet-WebAcademy-Puissance4/",
    // githubLink: "",
  },
  {
    title: "To Do List",
    projectId: "to-do-list",
    description:
      "Mini-application de gestion de tâches permettant d'ajouter, de modifier et de supprimer des tâches, avec une barre de progression interactive et une sauvegarde dans le localStorage.",
    solution:
      "Les tâches sont ajoutées dynamiquement en haut de la liste. Une fois terminées, elles sont déplacées en bas et la barre de progression se met à jour. Un bouton permet de sauvegarder les informations dans le localStorage, assurant ainsi leur persistance même après un rechargement de la page.",
    extractTitle: "Ajout des taches",
    codeExplaination:
      "Ce code permet d'ajouter une tâche à la To Do List en cliquant sur le bouton ajouter. Si la valeur entrée est vide, alors elle n'est pas ajoutée",
    codeExtract: `button.addEventListener("click", () => {
  if (input.value === "") {
    return;
  }

  const taskContainer = document.createElement("div");
  taskContainer.innerHTML = 
    "<li>" + input.value + "</li> 
    <i class="fa-solid fa-trash delete-btn"></i>
    <i class="fa-solid fa-pen modify-btn"></i>"
  ;
  taskContainer.classList.add("task-container");
  list.prepend(taskContainer);
  input.value = "";

  const deleteBtn = taskContainer.querySelector(".delete-btn");
  const modifyBtn = taskContainer.querySelector(".modify-btn");

  handleDeleteBtn(deleteBtn);
  handleModifyBtn(modifyBtn, taskContainer);
});`,
    technologies: ["javascript", "css", "html"],
    img: "/thumbnails/to-do-list.webp",
    link: "https://luandasarah.github.io/ToDoList/",
  },
];

export default AllProjects;
