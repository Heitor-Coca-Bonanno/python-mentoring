# Day 02 — Your First Python

## Variables = labeled boxes
A **variable** is like a labeled box you can put a value into.

- The **label** is the variable name (like `age`)
- The **value** is what’s inside (like `16`)

You can change what’s inside the box, but the label stays the same.

## Data types
Python values have **types**:

- `str` — text, like `"hello"`
- `int` — whole number, like `16`
- `float` — decimal number, like `3.14`
- `bool` — `True` / `False`

Real-life examples:
- `str`: your name
- `int`: your age
- `float`: your height in meters
- `bool`: “is it raining?”

## Talking to the user: print() and input()
- `print()` shows output.
- `input()` asks the user for text and returns a **string**.

Important: `input()` always returns `str`, even if the user types `16`.

## Why str(age) is needed

```python
age = 16
print("I am " + str(age) + " years old")
```

Without `str(age)`, Python complains because it can’t combine text and numbers automatically.

## In-session exercises
- Make a self-intro program (name, age, hobby).
- Explore types with `type(value)`.

## Take-home challenge
### Mad Libs generator
Ask for:
- noun
- verb
- adjective
- name

Then print a funny story using f-strings.

## AI prompt tip
> I got this Python error: [paste error]. I think it means [guess]. Am I right? Explain why Python behaves this way.

