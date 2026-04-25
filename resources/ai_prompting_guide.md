# AI Prompting Guide (for students)

## The golden rule
**Form a hypothesis first.**  
Before you ask AI, write what you *think* is happening and *why*.

Bad: “Fix my code.”  
Better: “I think my loop is infinite because the variable never changes. Can you confirm?”

## 5 useful prompt patterns
- **Explain an error**: “Here’s my code + full error. What does the error mean, and what should I check first?”
- **Review (don’t rewrite)**: “Review my function for unclear names/edge cases. Give feedback only.”
- **Explore alternatives**: “Show 2 different approaches and compare trade-offs.”
- **Explain a concept**: “Explain `while` loops using an analogy + one short example.”
- **Decompose a project**: “Break this project into steps. No code yet—just a plan.”

## What NOT to do
- Blind copy/paste without understanding
- Ask for full solutions to homework (you learn less)
- Skip reading the error message

## Examples
### Bad prompt
“My program doesn’t work, fix it.”

### Good prompt
“When I type 'abc' my program crashes with `ValueError`. I think `int()` can’t parse letters. How should I validate input so the program keeps running? Here’s the code: …”

