//paper requirements to print books

function paperRequirements(firstBookCopy, secondBookCopy, thirdBookCopy) {
    const paperForFirstBook = 100;
    const paperForSecondBook = 200;
    const paperForThirdBook = 300;
    let totalPaper = [];

    let paperNeed1stBook = firstBookCopy * paperForFirstBook;
    let paperNeed2ndBook = secondBookCopy * paperForSecondBook;
    let paperNeed3rdBook = thirdBookCopy * paperForThirdBook;

    totalPaper.push(paperNeed1stBook)
    totalPaper.push(paperNeed2ndBook)
    totalPaper.push(paperNeed3rdBook)

    return totalPaper
}

console.log(paperRequirements(1,1,1))