# Session 8 — Classes
# Refactor the movie ranker to use a Movie class

class Movie:
    def __init__(self, title, year, rating):
        # TODO: Store title, year, and rating as instance attributes
        pass

    def describe(self):
        """Print a formatted description of the movie."""
        # TODO: Print something like: "Inception (2010) — ⭐ 8.8/10"
        pass

    def is_highly_rated(self):
        """Return True if rating is 8.0 or above."""
        # TODO: Return a boolean
        pass

# --- Test your class ---
# Uncomment and run these after implementing the class above:

# m = Movie("Inception", 2010, 8.8)
# m.describe()
# print(m.is_highly_rated())

# movies = [
#     Movie("Inception", 2010, 8.8),
#     Movie("The Room", 2003, 3.7),
#     Movie("Parasite", 2019, 8.5),
# ]

# TODO: Sort the movies list by rating and print each one using .describe()
# BONUS: Add a classmethod Movie.from_dict(data) that creates a Movie from a dictionary

