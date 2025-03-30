"use client";
const AllProjects = [
  {
    title: "Puissance 4",
    projectId: "puissance-4",
    description:
      "Créer un jeu de Puissance 4 entièrement fonctionnel en JavaScript Vanilla, en appliquant la Programmation Orientée Objet (POO) et en manipulant directement le DOM.", 
    solution:"J'ai créée une classe Puissance4 permettant de générer dynamiquement une grille de jeu, gérer l’interaction des joueurs et l'ajout des pièces dans la grille, et détecter les conditions de victoire (alignement horizontal, vertical, diagonal)",
    extractTitle : " Initialisation de la grille",
    codeExplaination : "Ce code génère dynamiquement une grille en créant des lignes et des colonnes de div, chacune représentant une case de jeu. Chaque case est associée à un eventListener pour gérer l'ajout des pièces lorsqu’un joueur clique dessus.",
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
    gif: "/gif/puissance4.gif",
    // gallery: ["/thumbnails/puissance4-thumbnail.webp", ],
    link: "https://luandasarah.github.io/Projet-WebAcademy-Puissance4/",
    // githubLink: "",
  },


  {
    title: "Spotify Clone",
    projectId: "spotify-clone",
    description: "Clone simplifié de Spotify réalisé avec React, permettant d'afficher dynamiquement des albums, des artistes et des genres de musique grâce à une API.",
    solution:"J'ai développé une interface interactive en React qui récupère et affiche des albums, artistes et genres de musique en effectuant des requêtes API dynamiques. L'affichage est mis à jour au scroll pour une navigation fluide.",
    extractTitle : "Affichage dynamique des albums, artistes et genres",
    codeExplaination : "Ce code récupère dynamiquement les albums effectuant une requête API. Il met à jour l'affichage au scroll et empêche les doublons.",
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
    gif: "/gif/Spotify.gif",
    githubLink: "https://github.com/luandaSarah/Projet-WebAcademy-Spotify",
  },

  {
    title: "To Do List",
    projectId: "to-do-list",
    description: "Mini application de gestion de tâches permettant d'ajouter, supprimer et modifier des tâches, avec une barre de progression et sauvegarde dans le localStorage.",
    solution: "Les tâches sont ajoutées dynamiquement en haut de la liste. Il est possible de les barrer pour les marquer comme terminées, ce qui les déplace en bas de la liste et met à jour la barre de progression. Les tâches sont également sauvegardées dans le localStorage.",
    extractTitle: "Ajout des taches",
    codeExplaination: "Ce code permet d'ajouter une tâche à la To Do List en cliquant sur le bouton ajouter. Si la valeur entrée est vide, alors elle n'est pas ajoutée",
    codeExtract: 
    `button.addEventListener("click", () => {
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
    gif: "/gif/ToDoList.gif",
    link: "https://luandasarah.github.io/ToDoList/",
  },
];

export default AllProjects;
