# Session 2 — Mad Libs (complete example)

"""
Mad Libs is a simple input/output game:
- ask the user for words (input)
- insert them into a story template (process)
- print the story (output)
"""

noun = input("Give me a noun: ").strip()
verb = input("Give me a verb: ").strip()
adjective = input("Give me an adjective: ").strip()
name = input("Give me a name: ").strip()

# input() always returns strings, so we can use them directly in a story.
story = (
    f"One day, {name.upper()} found a mysterious {adjective} {noun}.\n"
    f"Without thinking, {name} decided to {verb} it...\n"
    f"And that is how the legend of the {noun} began."
)

print("\n--- Your Story ---")
print(story)

