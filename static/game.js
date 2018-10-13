function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function turnUp(i) {
    cells[i].classList.replace("fa-scroll", imagesArray[i]);
}

function turnDown(i) {
    cells[i].classList.replace(imagesArray[i], "fa-scroll");
}

// you can select elements by multiple ways, for example by their class
let cells = document.getElementsByClassName('memCard');
let imagesArray = ["fa-chess-knight", "fa-book-dead", "fa-dice-d6", "fa-dice-d20", "fa-dragon",
    "fa-dungeon", "fa-fist-raised", "fa-hat-wizard", "fa-ring", "fa-skull-crossbones",
    "fa-chess-knight", "fa-book-dead", "fa-dice-d6", "fa-dice-d20", "fa-dragon",
    "fa-dungeon", "fa-fist-raised", "fa-hat-wizard", "fa-ring", "fa-skull-crossbones",
    "fa-chess-knight", "fa-book-dead", "fa-dice-d6", "fa-dice-d20", "fa-dragon",
    "fa-dungeon", "fa-fist-raised", "fa-hat-wizard", "fa-ring", "fa-skull-crossbones",
    "fa-chess-knight", "fa-book-dead", "fa-dice-d6", "fa-dice-d20", "fa-dragon",
    "fa-dungeon", "fa-fist-raised", "fa-hat-wizard", "fa-ring", "fa-skull-crossbones"];
let click = 0;
let prevCard;
// shuffle(imagesArray);

for (let i = 0; i < cells.length; i++) {
    // we uses classic for loop to have the "indexes" of the elements
    let cell = cells[i];
    cell.addEventListener('click', function() {
        click += 1;
        console.log(click);
        turnUp(i);
        if (click % 2 === 1) {
            prevCard = i;
        }
        if (click % 2 === 0) {
            setTimeout(function(){ turnDown(i);}, 3000);
            setTimeout(function(){ turnDown(prevCard);}, 3000);
        }
    });
}

