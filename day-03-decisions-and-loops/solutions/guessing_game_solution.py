# Session 3 — Number Guessing Game (complete solution)

"""
Rules:
- computer picks a secret number 1..100
- player keeps guessing
- after each guess, tell the player too high / too low
- count how many attempts it took
"""

import random

secret = random.randint(1, 100)
attempts = 0

print("🎲 I picked a number between 1 and 100.")

while True:
    guess_text = input("Your guess: ").strip()

    try:
        guess = int(guess_text)
    except ValueError:
        print("⚠️  Please type a whole number.")
        continue

    attempts += 1

    if guess < secret:
        print("Too low!")
    elif guess > secret:
        print("Too high!")
    else:
        print(f"✅ Correct! The number was {secret}.")
        print(f"It took you {attempts} attempts.")
        break

