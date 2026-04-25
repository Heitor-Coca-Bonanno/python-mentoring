# Debugging Checklist

1. **Read the full error message** (not just the last line).
2. **Identify the type**:
   - Syntax error (can’t parse)
   - Runtime error (crashed while running)
   - Logic error (runs but wrong result)
3. **Find the line number** the error points to.
4. **Print evidence**:
   - Add `print()` above and below the suspicious line.
   - Print variable values and `type(value)`.
5. **Make a hypothesis**: “I think X is happening because Y.”
6. **Test the hypothesis** by changing one small thing.
7. **If stuck**: search the error text online.
8. **Then ask AI** with:
   - your code (smallest snippet that reproduces)
   - the full error
   - your hypothesis

