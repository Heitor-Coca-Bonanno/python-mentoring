# 🐍 Python Mentoring — Course Plan for Claude Code

> Paste this file to Claude Code and say:
> **"Read PLAN.md and scaffold the full repository structure described here, including all folders, README files, starter code, and solution stubs."**

---

## Repository Name
`python-mentoring`

## Top-Level README.md
```
# 🐍 Python Mentoring Course

A 10-session, 2-hour-per-week beginner Python course for teenagers.
Covers logical thinking, core Python, databases, OOP, Git, and AI-assisted development.

## How to use this repo
- Each session lives in its own folder (`day-01-how-computers-think`, etc.)
- Inside each folder: `README.md` (lesson + challenge), `exercises/` (starter code), `solutions/` (reference)
- The `resources/` folder has cheatsheets for Python, Git, debugging, and AI prompting

## Sessions at a Glance
| # | Folder | Topic |
|---|--------|-------|
| 1 | day-01-how-computers-think | Algorithms, pseudocode, logic |
| 2 | day-02-first-python | Variables, types, input/output |
| 3 | day-03-decisions-and-loops | Conditions, loops, control flow |
| 4 | day-04-functions | Functions, parameters, return values |
| 5 | day-05-collections | Lists, dictionaries |
| 6 | day-06-debugging | Errors, exceptions, debugging mindset |
| 7 | day-07-databases | Files, SQLite, CRUD |
| 8 | day-08-classes | OOP, classes, methods |
| 9 | day-09-dev-workflow | Git, GitHub, readable code |
| 10 | day-10-mini-project | Full project + showcase |
```

---

## Repository Structure to Scaffold

```
python-mentoring/
├── README.md
├── PLAN.md                            ← this file
│
├── day-01-how-computers-think/
│   ├── README.md
│   ├── exercises/
│   │   └── flowchart_template.md
│   └── solutions/
│       └── morning_routine_example.md
│
├── day-02-first-python/
│   ├── README.md
│   ├── exercises/
│   │   └── starter_intro.py
│   └── solutions/
│       └── mad_libs_solution.py
│
├── day-03-decisions-and-loops/
│   ├── README.md
│   ├── exercises/
│   │   └── starter_quiz.py
│   └── solutions/
│       └── guessing_game_solution.py
│
├── day-04-functions/
│   ├── README.md
│   ├── exercises/
│   │   └── starter_converter.py
│   └── solutions/
│       └── temperature_converter_solution.py
│
├── day-05-collections/
│   ├── README.md
│   ├── exercises/
│   │   └── starter_movies.py
│   └── solutions/
│       └── movie_ranker_solution.py
│
├── day-06-debugging/
│   ├── README.md
│   ├── exercises/
│   │   └── broken_programs/
│   │       ├── bug_01.py
│   │       ├── bug_02.py
│   │       ├── bug_03.py
│   │       ├── bug_04.py
│   │       └── bug_05.py
│   └── solutions/
│       └── input_handler_solution.py
│
├── day-07-databases/
│   ├── README.md
│   ├── exercises/
│   │   └── starter_contacts_db.py
│   └── solutions/
│       └── contact_book_solution.py
│
├── day-08-classes/
│   ├── README.md
│   ├── exercises/
│   │   └── starter_movie_class.py
│   └── solutions/
│       └── bank_account_solution.py
│
├── day-09-dev-workflow/
│   ├── README.md
│   ├── exercises/
│   │   └── refactor_this.py
│   └── solutions/
│       └── refactored_example.py
│
├── day-10-mini-project/
│   ├── README.md
│   ├── task_manager/
│   │   └── starter_task_manager.py
│   ├── trivia_quiz/
│   │   └── starter_trivia.py
│   └── budget_tracker/
│       └── starter_budget.py
│
└── resources/
    ├── python_cheatsheet.md
    ├── git_cheatsheet.md
    ├── ai_prompting_guide.md
    └── debugging_checklist.md
```

---

## Session Details for File Content Generation

### DAY 01 — How Computers Think

**day-01-how-computers-think/README.md** should contain:
- Explanation of algorithms using a recipe analogy
- The input → process → output model (vending machine analogy)
- What pseudocode is and why we write it before code
- In-session exercises: pseudocode for 3 everyday tasks + flowchart
- Take-home challenge: write a morning routine algorithm with at least 10 steps, one decision, one loop
- AI prompt tip: "I wrote this algorithm to describe logging into a website. Can you tell me if I'm missing any steps and explain why they matter?"

**day-01-how-computers-think/exercises/flowchart_template.md** should contain:
- A blank markdown template with sections: Title, Inputs, Steps (numbered), Decisions (if/else), Output
- An example already filled in for "making a cup of tea"

**day-01-how-computers-think/solutions/morning_routine_example.md** should contain:
- A complete example morning routine algorithm with 12 steps, 2 decisions, 1 loop
- Drawn as ASCII flowchart

---

### DAY 02 — Your First Python

**day-02-first-python/README.md** should contain:
- Variable = labeled box analogy
- Data types: str, int, float, bool — with real-life examples
- print() and input() explained
- Why str(age) is needed when combining types
- In-session exercises: self-intro program, type exploration
- Take-home challenge: Mad Libs generator (asks for noun, verb, adjective, name → prints funny story)
- AI prompt tip: "I got this Python error: [paste error]. I think it means [guess]. Am I right? Explain why Python behaves this way."

**day-02-first-python/exercises/starter_intro.py** should contain:
```python
# Session 2 — Your First Python
# Fill in each TODO to complete the program

# TODO: Ask the user for their name and store it in a variable called 'name'

# TODO: Ask the user for their age and store it as an integer

# TODO: Ask the user for their favorite hobby

# TODO: Print a sentence that uses all three variables
# Example output: "Hi! My name is Alex, I'm 16 years old and I love skateboarding."

# BONUS: Print the name in ALL CAPS using a string method
```

**day-02-first-python/solutions/mad_libs_solution.py** should contain a complete Mad Libs solution with comments explaining each line.

---

### DAY 03 — Decisions & Loops

**day-03-decisions-and-loops/README.md** should contain:
- if/elif/else explained with traffic light analogy
- while loop explained with washing machine analogy
- for loop for iterating over sequences
- Control flow concept: programs don't always run top to bottom
- In-session exercises: quiz game with scoring
- Take-home challenge: number guessing game using random.randint(1, 100) with "too high"/"too low" hints and attempt counter
- AI prompt tip: "I wrote a number guessing game using a while loop. Show me another way to write the same logic and explain the trade-offs."

**day-03-decisions-and-loops/exercises/starter_quiz.py** should contain:
```python
# Session 3 — Decisions & Loops
# Build a 3-question quiz game

score = 0

# Question 1 — already done for you as an example
answer = input("What is the capital of France? ").strip().lower()
if answer == "paris":
    print("✅ Correct!")
    score += 1
else:
    print("❌ Wrong! The answer is Paris.")

# TODO: Add Question 2 here

# TODO: Add Question 3 here

# TODO: Print the final score out of 3
# BONUS: Use a for loop and a list of question dictionaries instead
```

**day-03-decisions-and-loops/solutions/guessing_game_solution.py** should contain a complete number guessing game solution with comments.

---

### DAY 04 — Functions

**day-04-functions/README.md** should contain:
- Function = remote control button analogy (hides internal complexity)
- Coffee machine analogy: inputs (parameters) → process → output (return value)
- Difference between printing inside a function vs returning a value
- DRY principle: Don't Repeat Yourself
- In-session exercises: refactor quiz into functions, write is_even() and fizzbuzz()
- Take-home challenge: temperature converter toolkit with celsius_to_fahrenheit(), fahrenheit_to_celsius(), celsius_to_kelvin() and a menu
- AI prompt tip: "Here is my function. Can you review it and tell me what's unclear or could break? Don't rewrite it — give me feedback so I can fix it myself."

**day-04-functions/exercises/starter_converter.py** should contain:
```python
# Session 4 — Functions
# Complete each function body. Do not change the function signatures.

def celsius_to_fahrenheit(celsius):
    """Convert Celsius to Fahrenheit. Formula: (C × 9/5) + 32"""
    # TODO: return the converted value
    pass

def fahrenheit_to_celsius(fahrenheit):
    """Convert Fahrenheit to Celsius. Formula: (F - 32) × 5/9"""
    # TODO: return the converted value
    pass

def celsius_to_kelvin(celsius):
    """Convert Celsius to Kelvin. Formula: C + 273.15"""
    # TODO: return the converted value
    pass

def show_menu():
    """Print the options menu."""
    print("\n--- Temperature Converter ---")
    print("1. Celsius → Fahrenheit")
    print("2. Fahrenheit → Celsius")
    print("3. Celsius → Kelvin")
    print("4. Quit")

# TODO: Write the main loop that shows the menu, takes user input,
#       calls the right function, and prints the result.
# BONUS: Add input validation so the program doesn't crash on bad input.
```

**day-04-functions/solutions/temperature_converter_solution.py** should contain a complete solution with input validation and comments.

---

### DAY 05 — Collections

**day-05-collections/README.md** should contain:
- List = numbered shelf (ordered, indexed)
- Dictionary = real dictionary (lookup by key, not position)
- When to use each: lists for sequences of similar things, dicts for named properties of one thing
- Looping over both with for loops
- List of dictionaries pattern for structured data
- In-session exercises: in-memory contacts manager with add/find/list functions
- Take-home challenge: movie ranker — add movies (title, year, rating), list sorted by rating, find by title, calculate average
- AI prompt tip: "I'm building a movie list app. Should I use a list, a dictionary, or a list of dictionaries? Explain the trade-offs without writing the code."

**day-05-collections/exercises/starter_movies.py** should contain:
```python
# Session 5 — Collections
# Build a movie ranker using a list of dictionaries

movies = []  # This will hold all our movies

def add_movie(title, year, rating):
    """Add a movie dictionary to the movies list."""
    # TODO: Create a dictionary with keys: title, year, rating
    # TODO: Append it to the movies list
    pass

def list_movies():
    """Print all movies sorted by rating (highest first)."""
    # TODO: Sort movies by rating (hint: look up 'sorted' with a key= argument)
    # TODO: Print each movie in a readable format
    pass

def find_movie(title):
    """Find and return a movie by title (case-insensitive). Return None if not found."""
    # TODO: Loop through movies and return the matching one
    pass

def average_rating():
    """Return the average rating across all movies."""
    # TODO: Calculate and return the average
    # BONUS: Handle the case where movies list is empty
    pass

# --- Main Program ---
# TODO: Build a simple menu loop to let the user add, list, and search movies
```

**day-05-collections/solutions/movie_ranker_solution.py** should contain a complete solution with comments.

---

### DAY 06 — Debugging

**day-06-debugging/README.md** should contain:
- Three types of errors: syntax (grammar mistake), runtime (impossible instruction), logic (wrong answer silently)
- Reading error messages as clues, not attacks
- Debugging as detective work: evidence → hypothesis → test
- Using print() as a magnifying glass
- try/except for handling runtime errors gracefully
- In-session exercises: diagnose 5 broken programs, refactor converter with try/except
- Take-home challenge: get_positive_integer(prompt) function that loops until valid input
- AI prompt tip: "Here is my code and error. I think the problem is on line X because Y. Am I right? Explain why Python behaves this way."

**day-06-debugging/exercises/broken_programs/bug_01.py** — syntax error (missing colon or mismatched quotes)
**day-06-debugging/exercises/broken_programs/bug_02.py** — runtime error (division by zero or index out of range)
**day-06-debugging/exercises/broken_programs/bug_03.py** — type error (adding string and int)
**day-06-debugging/exercises/broken_programs/bug_04.py** — logic error (off-by-one in a loop, gives wrong result silently)
**day-06-debugging/exercises/broken_programs/bug_05.py** — name error (variable used before assignment)

Each broken file should have a comment at the top: `# This program should [describe what it's supposed to do]. Find and fix the bug.`

**day-06-debugging/solutions/input_handler_solution.py** should contain:
```python
# Complete solution for the bulletproof input handler
def get_positive_integer(prompt):
    """Keep asking until user enters a valid positive integer."""
    while True:
        try:
            value = int(input(prompt))
            if value > 0:
                return value
            else:
                print("⚠️  Please enter a number greater than 0.")
        except ValueError:
            print("⚠️  That's not a valid number. Try again.")
```

---

### DAY 07 — Databases

**day-07-databases/README.md** should contain:
- Why data disappears when a program ends (RAM vs disk)
- Files (JSON) as a notebook — good for simple things
- Why databases exist: relationships, searching, integrity
- Tables, rows, columns analogy with spreadsheets
- SQLite basics: connect, create table, INSERT, SELECT
- CRUD operations: Create, Read, Update, Delete
- In-session exercises: save movie ranker to JSON, then rebuild with SQLite
- Take-home challenge: contact book with SQLite — add, list, search, update, delete
- AI prompt tip: "Why use SQLite instead of a JSON file? Give me specific situations where a database is clearly better."

**day-07-databases/exercises/starter_contacts_db.py** should contain:
```python
# Session 7 — Databases
# Build a contact book backed by SQLite

import sqlite3

def get_connection():
    """Create and return a database connection."""
    conn = sqlite3.connect("contacts.db")
    conn.row_factory = sqlite3.Row  # lets us access columns by name
    return conn

def create_table():
    """Create the contacts table if it doesn't exist."""
    conn = get_connection()
    # TODO: Write CREATE TABLE IF NOT EXISTS with columns:
    #       id (INTEGER PRIMARY KEY), name (TEXT), email (TEXT), phone (TEXT)
    conn.close()

def add_contact(name, email, phone):
    """Insert a new contact into the database."""
    conn = get_connection()
    # TODO: Write the INSERT statement
    conn.close()

def list_contacts():
    """Print all contacts."""
    conn = get_connection()
    # TODO: SELECT all contacts and print them
    conn.close()

def find_contact(name):
    """Search for contacts by name (partial match)."""
    conn = get_connection()
    # TODO: Use LIKE to find matching contacts
    conn.close()

# TODO: Add update_phone(name, new_phone) and delete_contact(name)
# TODO: Build a menu loop to drive the app

create_table()
```

**day-07-databases/solutions/contact_book_solution.py** should contain a complete solution with all CRUD operations and a menu.

---

### DAY 08 — Classes

**day-08-classes/README.md** should contain:
- Class = blueprint for a house; object = actual house built from it
- Dog class analogy: attributes (name, breed) and methods (bark, eat)
- __init__ as the "setup" that runs when an object is created
- self explained: "this specific object, not all objects of this type"
- Difference between a function that prints vs a method that acts on the object's data
- In-session exercises: Movie class refactoring the Session 5 ranker
- Take-home challenge: BankAccount class with deposit(), withdraw(), print_statement()
- AI prompt tip: "Should the borrow() method live on the Book class or the Library class? Give arguments for each without writing code."

**day-08-classes/exercises/starter_movie_class.py** should contain:
```python
# Session 8 — Classes
# Refactor the movie ranker to use a Movie class

class Movie:
    def __init__(self, title, year, rating):
        # TODO: Store title, year, and rating as instance attributes
        pass

    def describe(self):
        """Print a formatted description of the movie."""
        # TODO: Print something like: "Inception (2010) — ⭐ 8.8/10"
        pass

    def is_highly_rated(self):
        """Return True if rating is 8.0 or above."""
        # TODO: Return a boolean
        pass

# --- Test your class ---
# Uncomment and run these after implementing the class above:

# m = Movie("Inception", 2010, 8.8)
# m.describe()
# print(m.is_highly_rated())

# movies = [
#     Movie("Inception", 2010, 8.8),
#     Movie("The Room", 2003, 3.7),
#     Movie("Parasite", 2019, 8.5),
# ]

# TODO: Sort the movies list by rating and print each one using .describe()
# BONUS: Add a classmethod Movie.from_dict(data) that creates a Movie from a dictionary
```

**day-08-classes/solutions/bank_account_solution.py** should contain:
```python
# BankAccount class — complete solution

class BankAccount:
    def __init__(self, owner, initial_balance=0):
        self.owner = owner
        self.balance = initial_balance
        self.transactions = []

    def deposit(self, amount):
        if amount <= 0:
            print("Deposit amount must be positive.")
            return
        self.balance += amount
        self.transactions.append(f"+${amount:.2f} (deposit)")
        print(f"Deposited ${amount:.2f}. New balance: ${self.balance:.2f}")

    def withdraw(self, amount):
        if amount <= 0:
            print("Withdrawal amount must be positive.")
            return
        if amount > self.balance:
            print(f"Insufficient funds. Balance is ${self.balance:.2f}")
            return
        self.balance -= amount
        self.transactions.append(f"-${amount:.2f} (withdrawal)")
        print(f"Withdrew ${amount:.2f}. New balance: ${self.balance:.2f}")

    def transfer(self, amount, target_account):
        self.withdraw(amount)
        target_account.deposit(amount)

    def print_statement(self):
        print(f"\n📄 Statement for {self.owner}")
        print("-" * 30)
        for t in self.transactions:
            print(f"  {t}")
        print(f"  Balance: ${self.balance:.2f}")
        print("-" * 30)
```

---

### DAY 09 — Dev Workflow

**day-09-dev-workflow/README.md** should contain:
- Git = save system that saves every version forever
- Google Docs version history analogy
- Core Git workflow: git init → git add → git commit → git push
- What makes a good commit message (imperative, specific, why not what)
- Code readability: naming conventions, comments, function length
- In-session exercises: create GitHub repo, push first commit, practice workflow 3 times, refactor messy code
- Take-home challenge: push all previous sessions to GitHub with a README per folder
- AI prompt tip: "Here is a function I wrote. Suggest a docstring for it and explain what makes a good docstring."
- Git cheatsheet embedded in README

**day-09-dev-workflow/exercises/refactor_this.py** should contain intentionally messy Python code:
```python
# This code works but is hard to read. Refactor it.
# Goals: better variable names, add comments, extract functions, fix formatting

import sqlite3
def f(x,y,z):
 conn=sqlite3.connect('db.db')
 c=conn.cursor()
 c.execute('INSERT INTO t VALUES (?,?,?)',(x,y,z))
 conn.commit()
 conn.close()

def g(n):
 conn=sqlite3.connect('db.db')
 c=conn.cursor()
 r=c.execute('SELECT * FROM t WHERE name LIKE ?',('%'+n+'%',)).fetchall()
 conn.close()
 return r

def h(items):
 t=0
 for i in items:
  t=t+i['rating']
 if len(items)==0:
  return 0
 return t/len(items)
```

**day-09-dev-workflow/solutions/refactored_example.py** should contain the clean, commented, well-named version.

---

### DAY 10 — Mini-Project

**day-10-mini-project/README.md** should contain:
- Three project options with full descriptions
- How the session is structured (60 min build + 60 min present)
- Questions the student should be able to answer about their code
- Reflection template for the final README entry
- AI prompt tip: "Help me break down [project] into pieces before I start coding. What are the main components? What should I build first? What are the tricky parts? No code — just help me think."

**day-10-mini-project/task_manager/starter_task_manager.py**:
```python
# Mini-Project Option A — CLI Task Manager
# Features: add task, complete task, delete task, list tasks (sorted by due date)
# All data saved in SQLite

import sqlite3
from datetime import datetime

# TODO: Set up database connection and create tasks table
# Columns: id, title, due_date (TEXT in YYYY-MM-DD format), completed (INTEGER 0 or 1)

# TODO: Implement add_task(title, due_date)
# TODO: Implement complete_task(task_id)
# TODO: Implement delete_task(task_id)
# TODO: Implement list_tasks(show_completed=False)
# TODO: Build the menu loop
```

**day-10-mini-project/trivia_quiz/starter_trivia.py**:
```python
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
```

**day-10-mini-project/budget_tracker/starter_budget.py**:
```python
# Mini-Project Option C — Budget Tracker
# Features: log income/expenses with categories, summary by category, SQLite storage

import sqlite3

# TODO: Set up DB with transactions table
# Columns: id, type (income/expense), amount, category, description, date

# TODO: Implement add_transaction(type, amount, category, description)
# TODO: Implement show_summary() — totals grouped by category
# TODO: Implement show_balance() — total income minus total expenses
# TODO: Build the menu loop
```

---

## Resources Files to Generate

### resources/python_cheatsheet.md
Include quick references for: variables and types, string methods, list methods, dictionary methods, if/elif/else, for loops, while loops, functions with return, try/except, classes, file I/O, SQLite basics.

### resources/git_cheatsheet.md
Include: git init, git status, git add, git commit, git push, git pull, git log, git diff, git branch, .gitignore basics. Each command with a one-line explanation and example.

### resources/ai_prompting_guide.md
Include:
- The golden rule: form a hypothesis before asking AI
- 5 prompt patterns for developers: explain error, review code, explore alternatives, explain a concept, help decompose a problem
- What NOT to do: blind copy-paste, asking for full solutions, skipping understanding
- Example good prompts and bad prompts side-by-side

### resources/debugging_checklist.md
Include a step-by-step checklist: read the full error message, identify error type, find the line number, add print() above and below, check variable types, search the error online, form a hypothesis, then ask AI.

---

## Claude Code Prompt to Use

After reading this file, use the following prompt:

```
Read PLAN.md carefully. Then scaffold the full python-mentoring repository:

1. Create every folder and file listed in the Repository Structure
2. For each session folder, generate the README.md content based on the session details
3. Generate all starter code files with the exact content shown (TODOs intact)
4. Generate all solution files with complete, commented working code
5. Generate all four resource files with full content
6. Create the top-level README.md

Make sure:
- All Python files are syntactically valid
- Comments explain the purpose of each TODO
- Solution files include docstrings and inline comments explaining key decisions
- README files use clear markdown with headings, code blocks, and emoji for readability
```
