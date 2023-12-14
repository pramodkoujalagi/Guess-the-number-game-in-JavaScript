function guessTheNumber() {
    const secretNumber = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100

    console.log("Welcome to Guess the Number Game!");

    while (true) {
        const guess = parseInt(prompt("Enter your guess:"));

        if (guess < secretNumber) {
            console.log("Too low! Try again.");
        } else if (guess > secretNumber) {
            console.log("Too high! Try again.");
        } else {
            console.log("Congratulations! You guessed the number.");
            break;
        }
    }
}

guessTheNumber();