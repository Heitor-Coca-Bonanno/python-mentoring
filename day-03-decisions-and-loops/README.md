# Day 03 — Decisions & Loops

## if / elif / else (traffic light analogy)
Programs can make decisions:

```python
if condition:
    ...
elif other_condition:
    ...
else:
    ...
```

**Traffic light**:
- if green → go
- elif yellow → slow down
- else (red) → stop

## Loops
### while loop (washing machine analogy)
A **while loop** repeats while a condition is true.

```python
while condition:
    ...
```

Like a washing machine: keep spinning **while** time is left.

### for loop (iterate over a sequence)
A **for loop** goes item-by-item through something (list, range, string).

```python
for item in items:
    ...
```

## Control flow
Programs don’t always run top-to-bottom. Decisions and loops change the path.

## In-session exercise
Build a short quiz game with scoring (starter in `exercises/starter_quiz.py`).

## Take-home challenge
### Number guessing game
Build a guessing game:
- computer picks `random.randint(1, 100)`
- player guesses until correct (while loop)
- print “too high” / “too low”
- count attempts

## AI prompt tip
> I wrote a number guessing game using a while loop. Show me another way to write the same logic and explain the trade-offs.

