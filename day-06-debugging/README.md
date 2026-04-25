# Day 06 — Debugging

## Three types of errors
- **Syntax**: Python can’t parse the code (grammar mistake)
- **Runtime**: code runs, then crashes (impossible instruction)
- **Logic**: code runs, but gives the wrong answer (no crash)

## Debugging mindset
Debugging is detective work:
**evidence → hypothesis → test**

## Tools
- Read the full error message
- Use `print()` to inspect values
- Use `try/except` for expected bad input

## Exercise
Fix the 5 broken programs in `exercises/broken_programs/`.

## Challenge
Write `get_positive_integer(prompt)` that loops until valid input.

