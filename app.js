function getScore(elem) {
    const addButton = document.getElementById('addButton');
    const minusButton = document.getElementById('minusButton');
    const scoreDisplay = document.getElementById('scoreDisplay');

    let score = parseInt(scoreDisplay.textContent);
    // console.log('score', score);
    if (elem == 1) {
        score += 5;
    }
    if (elem == -1) {
        score -= 1;
    }

    scoreDisplay.textContent = score;
}