# Python Cheatsheet (Beginner)

## Variables & types
- `name = "Ana"` → `str`
- `age = 16` → `int`
- `height = 1.72` → `float`
- `is_ready = True` → `bool`

Check type:

```python
print(type(age))
```

## Strings
- `.lower()`, `.upper()`, `.strip()`, `.capitalize()`
- f-strings:

```python
print(f"Hi {name}, you are {age}!")
```

## Lists
- Create: `items = []`
- Add: `items.append(x)`
- Length: `len(items)`
- Loop:

```python
for x in items:
    print(x)
```

## Dictionaries
- Create: `student = {"name": "Ana", "age": 16}`
- Access: `student["name"]`
- Update: `student["age"] = 17`
- Loop:

```python
for key, value in student.items():
    print(key, value)
```

## if / elif / else

```python
if x > 10:
    print("big")
elif x == 10:
    print("ten")
else:
    print("small")
```

## while loops

```python
while condition:
    ...
```

## for loops

```python
for i in range(5):
    print(i)  # 0..4
```

## Functions

```python
def add(a, b):
    return a + b
```

## try / except

```python
try:
    n = int(input("Number: "))
except ValueError:
    print("Not a number!")
```

## Classes

```python
class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self):
        print("woof")
```

## File I/O (text)

```python
with open("data.txt", "w") as f:
    f.write("hello")

with open("data.txt") as f:
    print(f.read())
```

## SQLite basics

```python
import sqlite3

with sqlite3.connect("app.db") as conn:
    conn.execute("CREATE TABLE IF NOT EXISTS t (id INTEGER PRIMARY KEY, name TEXT)")
    conn.execute("INSERT INTO t (name) VALUES (?)", ("Ana",))
    rows = conn.execute("SELECT * FROM t").fetchall()
    print(rows)
```

