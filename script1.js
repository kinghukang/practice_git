function playGame(userChoice) {
    var choices = ['rock', 'paper', 'scissors'];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

    if (userChoice === computerChoice) {
        document.getElementById('result').innerHTML = "It's a tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        document.getElementById('result').innerHTML = "You win!";
    } else {
        document.getElementById('result').innerHTML = "Computer wins!";
    }
}
