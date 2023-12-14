#include <iostream>
#include <cstdlib>
#include <ctime>

int main() {
    srand(static_cast<unsigned int>(time(0)));
    int secretNumber = rand() % 100 + 1; // Generates a random number between 1 and 100
    int guess;

    std::cout << "Welcome to Guess the Number Game!" << std::endl;

    do {
        std::cout << "Enter your guess: ";
        std::cin >> guess;

        if (guess < secretNumber) {
            std::cout << "Too low! Try again." << std::endl;
        } else if (guess > secretNumber) {
            std::cout << "Too high! Try again." << std::endl;
        } else {
            std::cout << "Congratulations! You guessed the number." << std::endl;
        }
    } while (guess != secretNumber);

    return 0;
}
