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

function generateArray(cells) {
    let firstHalf = ["fa-chess-knight", "fa-book-dead", "fa-dice-d6", "fa-dice-d20", "fa-dragon",
        "fa-dungeon", "fa-fist-raised", "fa-hat-wizard", "fa-ring", "fa-skull-crossbones",
        "fa-chess-knight", "fa-book-dead", "fa-dice-d6", "fa-dice-d20", "fa-dragon",
        "fa-dungeon", "fa-fist-raised", "fa-hat-wizard", "fa-ring", "fa-skull-crossbones"];
    let secondHalf = ["fa-chess-knight", "fa-book-dead", "fa-dice-d6", "fa-dice-d20", "fa-dragon",
        "fa-dungeon", "fa-fist-raised", "fa-hat-wizard", "fa-ring", "fa-skull-crossbones",
        "fa-chess-knight", "fa-book-dead", "fa-dice-d6", "fa-dice-d20", "fa-dragon",
        "fa-dungeon", "fa-fist-raised", "fa-hat-wizard", "fa-ring", "fa-skull-crossbones"];
    let imagesArray = [];
    for (let i = 0; i < (cells.length) / 2; i++) {
        imagesArray.push(firstHalf[i]);
        imagesArray.push(secondHalf[i]);
    }
    return imagesArray;
}


let cells = document.getElementsByClassName('memCard');
let imagesArray = shuffle(generateArray(cells));
let click = 0;
let prevCard;

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
        if (click % 2 === 0 && imagesArray[i] != imagesArray[prevCard]) {
            setTimeout(function(){ turnDown(i); turnDown(prevCard);}, 750);
        }
    });
}

