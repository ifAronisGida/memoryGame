function main() {

    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    //array shuffling algorithm

    function turnUp(i) {
        cells[i].classList.replace("fa-scroll", imagesArray[i]);
        click += 1;
    }

    //turns up a card

    function turnDown(i) {
        cells[i].classList.replace(imagesArray[i], "fa-scroll");
    }

    //turns down a card

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

    //generates an array for any card number which is always winnable

    function checkWin(cells) {
        let score = 0;
        for (let i = 0; i < cells.length; i++) {
            let cell = cells[i];
            if (!cell.classList.contains("fa-scroll")) {
                score += 1;
            }
        }
        if (score === cells.length) return true;
        else return false;
    }

    //checks wincondition

    let cells = document.getElementsByClassName('memCard');
    let imagesArray = shuffle(generateArray(cells));
    let click = 0;
    let prevCard;
    //sets gamestate

    for (let i = 0; i < cells.length; i++) {
        // we uses classic for loop to have the "indexes" of the elements
        let cell = cells[i];
        cell.addEventListener('click', function () {
            console.log(click);
            turnUp(i);
            if (click % 2 === 1) {
                prevCard = i; //saves which card to turn down and compare with the next
            }
            if (click % 2 === 0 && imagesArray[i] !== imagesArray[prevCard]) { //if the cards don't match they will turn down
                setTimeout(function () { //waits 1 second before turning down cards
                    turnDown(i);
                    turnDown(prevCard);
                }, 1000);
            }
            if (checkWin(cells)) { //checks if game is over
                alert("You win the game!");
            }
        });
    }
}

main();


