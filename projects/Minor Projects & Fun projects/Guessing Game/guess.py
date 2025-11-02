import random

player_score = 0
computer_score = 0

print("Let's play 'Guess the Number' - Duel Edition!")
print("Each round, you and the computer will try to guess each other's secret number (1 to 10).")
print("First to 3 points wins the game.")

while player_score < 3 and computer_score < 3:
    # Allows player to pick a number for the computer to "guess"
    try:
        player_secret = int(input("\nChoose your secret number (1-10) for the computer to guess: "))
    except ValueError:
        print("Invalid input. Please enter a number.")
        continue

    if player_secret < 1 or player_secret > 10:
        print("Out of range! Please choose a number between 1 and 10.")
        continue

    # Computer picks a number for player to "guess"
    computer_secret = random.randint(1, 10)

    # Player's turn to guess
    try:
        player_guess = int(input("Guess the computer's number (1-10): "))
    except ValueError:
        print("Invalid input. Please enter a number.")
        continue

    if player_guess < 1 or player_guess > 10:
        print("Out of range! Please choose a number between 1 and 10.")
        continue

    # Computer's turn to guess
    computer_guess = random.randint(1, 10)

    print(f"Computer's secret number was: {computer_secret}")
    print(f"Computer guesses your number: {computer_guess}")

    # Evaluate player guess
    if player_guess == computer_secret:
        player_score += 1
        print("You guessed the computer's number! +1 point")
    else:
        print("You missed the computer's number.")

    # Evaluate computer guess
    if computer_guess == player_secret:
        computer_score += 1
        print("Computer guessed your number! +1 point for computer")
    else:
        print("Computer missed your number.")

    print(f"Current Score - Player: {player_score}, Computer: {computer_score}")

if player_score > computer_score:
    print("\nCongratulations! You won the game.")
else:
    print("\nComputer wins the game. Better luck next time!")