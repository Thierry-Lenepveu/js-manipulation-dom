const animalsToAdopt = [
    {
      name: "Lucky",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Tiffanie_at_cat_show.jpg/199px-Tiffanie_at_cat_show.jpg"
    },
    {
      name: "Symba",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Tiffany4_%282018%3B_cropped_2023%29.jpg/240px-Tiffany4_%282018%3B_cropped_2023%29.jpg"
    },
    {
      name: "Léo",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Norskskogkatt_Evita_3.JPG/245px-Norskskogkatt_Evita_3.JPG"
    },
    {
      name: "Milo",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/CyprusShorthair.jpg/320px-CyprusShorthair.jpg"
    },
    {
      name: "Charly",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Highlander-7.jpg/293px-Highlander-7.jpg"
    }
  ];

function createCard(animal, divElement) {
    
    let figureElement = createFigure(animal);

    divElement.appendChild(figureElement);
}

function createFigure(animal) {
    let figureElement = document.createElement("figure");

    // create img node.
    let imageElement = document.createElement("img");
    imageElement.classList.add("card-body");
    imageElement.src = animal.picture;
    figureElement.appendChild(imageElement);

    let figcaptionElement = createFigCaption(animal.name);
    figureElement.appendChild(figcaptionElement);

    return figureElement;
}

function createFigCaption(animalName) {
    let figcaptionElement = document.createElement("figcaption");
    figcaptionElement.classList.add("card-body");

    let h2TitleElement = document.createElement("h2");
    h2TitleElement.classList.add("card-title");
    h2TitleElement.innerHTML = animalName;
    figcaptionElement.appendChild(h2TitleElement);

    let buttonElement = document.createElement("button");
    buttonElement.classList.add("card-button");
    buttonElement.innerHTML = "Adopt Now";
    buttonElement.addEventListener("click", function() {
        alert(`${animalName} adopted !`)
    } );
    figcaptionElement.appendChild(buttonElement);

    return figcaptionElement;
}

let divElement = document.querySelector("div.cards");
animalsToAdopt.forEach( item => createCard(item, divElement) );

