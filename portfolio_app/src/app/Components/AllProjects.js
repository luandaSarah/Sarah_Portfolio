"use client";
const AllProjects = [
  {
    title: "Mini Indeed",
    slug: "mini-indeed",
    description:
      "Micro-plateforme de recherche d'emploi sous forme de mini-framework MVC en PHP",
    solution:
      "J'ai développé une application MVC, permettant de réaliser un CRUD complet pour la gestion de postes en mode administrateur.",
    extractTitle:
      "Démonstration d'une partie du processus de création de postes en tant qu'administrateur",
    codeExplaination:
      "J'ai créé une route permettant l'accès à un administrateur à la page de création de postes. Je vérifie d'abord que mon utilisateur est bien connecté et qu'il possède le rôle admin. Dans ma classe PosteController, je gère toute la logique liée à mes postes. La méthode create me permet de gérer la création à partir d'un formulaire que l'on va afficher en méthode HTTP GET. On va ensuite récupérer les données de ce formulaire en méthode POST. Ces données passent d'abord par un traitement avant d'être envoyées en base de données. Une fois le poste créé, l'utilisateur est renvoyé vers la page d'index.",
    codeExtract: `Router:
  Gestion des autorisations d'accès:

        //on verifie si l'url commence par '/admin/'

        if (preg_match("~^" . self::ADMIN_URL . "~", $url)) {

            //on verife si l'utilisateur est connecté Et qu'il à le rôle admin
          
            if (empty($_SESSION['USER']) || !in_array('ROLE_ADMIN', $_SESSION['USER']['roles'])) {

               //si non, on affiche un message d'erreur
                $_SESSION['flash']['danger'] = "Vous n'avez pas accés à cette page";

                //Et on redirige vers la page de connexion 
                $response = new Response('', 403, ['location' => self::LOGIN_URL]);
                $response->send();

                return;
            }
        }
            
PosteController: 
    Création de la route : 
    #[Route(name: 'admin.poste.create', url: '/admin/postes/create', methods: ['GET', 'POST'])]
     public function create(): Response
    {
        //On instancie le formulaire 
        $form = new PosteForm();

        //On vérifie si le formulaire a été soumis et si les données sont valides
        if ($form->validate(['title', 'description'], $_POST)) {
            $title = strip_tags(trim($_POST['title']));
            $description = strip_tags(trim($_POST['description']));
            $enabled = isset($_POST['enabled']) ? true : false;

            //On envoe en BDD vers le model en instanciant un nouvel objet Poste

            (new Poste)
                ->setTitle($title)
                ->setDescription($description)
                ->setEnabled($enabled)
                ->setUserId($_SESSION['USER']['id'])
                ->create()
            ;

            //On redirigie vers la page d'index avec un message de succès
            $this->addFlash('success', "Le poste a été créé avec succès !");
            return $this->redirectToRoute('admin.poste.index');
        }

        //on affiche le formulaire dans dans la view 
        return $this->render('backend/poste/create.php', ['form' => $form->createForm()]);
    }

    `,
    technologies: ["php", "docker", "mysql"],
    img: [
      "/thumbnails/indeed-home.webp",
      "/thumbnails/indeed-auth.webp",
      "/thumbnails/indeed-admin.webp",
      "/thumbnails/indeed-add.webp",
    ],
    githubLink: "https://github.com/luandaSarah/mini_framework_mvc",
  },
  {
    title: "Book Store",
    slug: "bookstore",
    description: "Application de gestion d'une librairie en VueJS",
    solution:
      "A partir de requêtes à une API REST, j'ai effectué un CRUD complet me permettant, d'ajouter, modifier, supprimer et d'afficher des livres sur mon application.",
    extractTitle: "Ajout d'un livre",
    codeExplaination:
      "Requête API en méthode POST pour la modification d'un livre en récupérant dynamiquement son identifiant en méthode GET. ",
    codeExtract: `
const getAllBooks = async () => {
    try {
        const response = await fetch('http://localhost:3000/books?page=1&perPage=500');
        if (!response.ok) {
            throw new Error('Erreur HTTP ! statut : ' + response.status);
        }
        const data = await response.json();
        allBooks.value = data;
    } catch (error) {
        console.log('Error lors de la requête: ' + error)
    }
}






onBeforeMount(async () => {
    await getAllBooks();
})


const newBook = ref([])
const title = ref('');
const titleO = ref('');
const aLName = ref('');
const aFName = ref('');
const genre = ref('');
const recap = ref('');
const year = ref('');
const cover = ref('');




const errorMessage = ref('');
const successMessage = ref('');
let successStatus = null;




const createBook = async () => {
    newBook.value = {
        "author": {
            "firstName": aFName.value,
            "lastName": aLName.value
        },


        "title": title.value,
        "originalTitle": titleO.value,
        "publicationYear": year.value,
        "genre": genre.value,
        "coverUri": cover.value,
        "recap": recap.value,
    }
    // console.log(newBook)
    try {
        const response = await fetch('http://localhost:3000/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newBook.value)


        });


        if (!response.ok) {
            errorMessage.value = "Une erreur s'est produite lors de l'ajout du livre";
            successStatus = false;
            throw new Error("'Erreur HTTP ! statut :' + response.status);




        }






     
        // console.log('Livre ajouté avec succès:', data);
        successMessage.value = "Le livre a bien été ajouté !"
        successStatus = true;
    } catch (error) {
        // console.error('Erreur lors de la requête :', error);
        errorMessage.value = "Une erreur s'est produite lors de l'ajout du livre"
        successStatus = false;


    }


}`,

    technologies: ["vue", "docker"],
    img: [
      "/thumbnails/bookstore-home.webp",
      "/thumbnails/bookstore-create.webp",
      "/thumbnails/bookstore-admin.webp",
    ],
    githubLink: "https://github.com/luandaSarah/bookstore-project",
  },
  {
    title: "Spotify Clone",
    slug: "spotify-clone",
    description:
      "Clone simplifié de Spotify réalisé avec React, permettant d'afficher dynamiquement des albums, des artistes et des genres de musique grâce à une API.",
    solution:
      "J'ai développé une interface interactive en React permettant de récupérer et d'afficher dynamiquement des albums, artistes et genres musicaux via des requêtes API. L'affichage se met à jour au scroll pour une navigation fluide. Une barre de recherche avec filtres permet d'affiner les résultats. La page d'accueil affiche des albums de façon aléatoire. Chaque album est associé à un genre et à un artiste via un ID. Il contient également des morceaux de musique qu'il est possible d'écouter directement depuis l'interface.",
    extractTitle:
      "Requête API pour récupérer dynamiquement les artistes et albums.",
    codeExplaination:
      "Ce code récupère dynamiquement des données via une requête GET, met à jour l'affichage lors du défilement et évite les doublons. L'encapsulation dans le hook useEffect permet le re-render du composant à chaque changement de page contenant les nouvelles données.",
    codeExtract: `useEffect( ()=> {
        const fetchAlbums= async () => {
        try {


       const res = await fetch('http://localhost:8000/albums?page=' + page + '&limit=20');


       if(!res.ok) {
        console.error('Erreur HTTP ! statut : ' + res.status);
       }
            const data = await res.json();
                console.log(data)
                setAlbums((prevAlbums) => {
                    const updatedAlbums = [...prevAlbums];
                    data.forEach(album => {
                        if (!updatedAlbums.find(a => a.id === album.id)) {
                            updatedAlbums.push(album);
                        }
                    });
                    return updatedAlbums;
                });
        } catch(error) {
            console.error('Erreur lors de la requête :' + error)
        }}


        fetchAlbums();
    }, [page]);`,

    technologies: ["react", "css", "docker"],
    img: "/thumbnails/spotify.webp",
    githubLink: "https://github.com/luandaSarah/Projet-WebAcademy-Spotify",
  },

  {
    title: "Puissance 4",
    slug: "puissance-4",
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
    slug: "to-do-list",
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
