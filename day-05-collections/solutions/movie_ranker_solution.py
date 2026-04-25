# Session 5 — Movie Ranker (complete solution)

movies: list[dict] = []


def add_movie(title: str, year: int, rating: float) -> None:
    """Add a movie dictionary to the movies list."""
    movie = {"title": title, "year": year, "rating": rating}
    movies.append(movie)


def list_movies() -> None:
    """Print all movies sorted by rating (highest first)."""
    if not movies:
        print("No movies yet.")
        return

    sorted_movies = sorted(movies, key=lambda m: m["rating"], reverse=True)
    print("\n🎬 Movies (highest rated first):")
    for i, m in enumerate(sorted_movies, 1):
        print(f"  {i}. {m['title']} ({m['year']}) — {m['rating']}/10")


def find_movie(title: str) -> dict | None:
    """Find a movie by title (case-insensitive)."""
    target = title.strip().lower()
    for m in movies:
        if m["title"].lower() == target:
            return m
    return None


def average_rating() -> float:
    """Return the average rating across all movies."""
    if not movies:
        return 0.0
    return sum(m["rating"] for m in movies) / len(movies)


def read_int(prompt: str) -> int:
    while True:
        raw = input(prompt).strip()
        try:
            return int(raw)
        except ValueError:
            print("⚠️  Please enter a whole number.")


def read_float(prompt: str) -> float:
    while True:
        raw = input(prompt).strip()
        try:
            return float(raw)
        except ValueError:
            print("⚠️  Please enter a number (decimals allowed).")


def show_menu() -> None:
    print("\n--- Movie Ranker ---")
    print("1) Add movie")
    print("2) List movies")
    print("3) Find movie")
    print("4) Average rating")
    print("5) Quit")


while True:
    show_menu()
    choice = input("Choose (1-5): ").strip()

    if choice == "1":
        title = input("Title: ").strip()
        year = read_int("Year: ")
        rating = read_float("Rating (0-10): ")
        add_movie(title, year, rating)
        print("✅ Added.")
    elif choice == "2":
        list_movies()
    elif choice == "3":
        title = input("Search title: ").strip()
        found = find_movie(title)
        if found:
            print(f"Found: {found['title']} ({found['year']}) — {found['rating']}/10")
        else:
            print("Not found.")
    elif choice == "4":
        print(f"Average rating: {average_rating():.2f}/10")
    elif choice == "5":
        print("Bye!")
        break
    else:
        print("⚠️  Invalid choice.")

