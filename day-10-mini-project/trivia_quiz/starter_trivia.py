# Mini-Project Option B — Trivia Quiz App
# Features: questions in SQLite by category, player picks category,
#           high scores saved between sessions, Question and Game classes

import sqlite3
import random

class Question:
    def __init__(self, text, options, correct_index):
        # TODO: Store attributes
        pass

    def ask(self):
        """Display the question and options, return True if answered correctly."""
        # TODO: Implement
        pass

class Game:
    def __init__(self, category):
        # TODO: Load questions from DB for the given category
        pass

    def run(self):
        """Run through all questions, track score, save high score."""
        # TODO: Implement
        pass

# TODO: Set up DB with questions table and high_scores table
# TODO: Build category selection menu

