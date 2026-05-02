# 🐍 Python Mentoring Course

A 10-session, 2-hour-per-week beginner Python course for teenagers.
Covers logical thinking, core Python, databases, OOP, Git, and AI-assisted development.

## How to use this repo (students)
- **Use the web portal as your main interface**: lesson text, examples, practice editor, and solutions are meant to be read and used in the browser.
- Run a local server from the repository root, then open **`http://localhost:8000/portal/#/`**.
- Each session still lives in its own folder (`day-01-how-computers-think`, etc.) with `README.md`, `exercises/`, and `solutions/` for mentors and for offline use.

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
### Open the course portal (recommended)
From the repo root:

```bash
python3 -m http.server 8000
```

Then open **`http://localhost:8000/portal/#/`** (home), or **`http://localhost:8000/`** and click **GO TO COURSE**.

Lesson pages load markdown from this repo (README, resources, exercises). Serving over `http://localhost` is required so the portal can fetch those files.

### Run Python exercises
From any `day-XX-.../exercises/` folder:

```bash
python3 your_file.py
```

