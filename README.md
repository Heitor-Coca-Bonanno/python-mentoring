# 🐍 Python Mentoring Course

A 10-session, 2-hour-per-week beginner Python course for teenagers.
Covers logical thinking, core Python, databases, OOP, Git, and AI-assisted development.

## How to use this repo
- Each session lives in its own folder (`day-01-how-computers-think`, etc.)
- Inside each folder:
  - `README.md` (lesson + challenge)
  - `exercises/` (starter code)
  - `solutions/` (reference solutions)
- The `resources/` folder has cheatsheets for Python, Git, debugging, and AI prompting
- The interactive portal is in `portal/` (open `portal/index.html`)

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

## Quickstart
### Open the interactive portal (local)
- Open `portal/index.html` in your browser.
- If your browser blocks local file access for some features, run a local server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/portal/`.

### Run Python exercises
From any `day-XX-.../exercises/` folder:

```bash
python3 your_file.py
```

