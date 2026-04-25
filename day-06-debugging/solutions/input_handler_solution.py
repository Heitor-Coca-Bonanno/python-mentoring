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

