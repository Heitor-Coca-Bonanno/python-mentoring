# Session 4 — Temperature Converter (complete solution)

def celsius_to_fahrenheit(celsius: float) -> float:
    """Convert Celsius to Fahrenheit. Formula: (C × 9/5) + 32"""
    return (celsius * 9 / 5) + 32


def fahrenheit_to_celsius(fahrenheit: float) -> float:
    """Convert Fahrenheit to Celsius. Formula: (F - 32) × 5/9"""
    return (fahrenheit - 32) * 5 / 9


def celsius_to_kelvin(celsius: float) -> float:
    """Convert Celsius to Kelvin. Formula: C + 273.15"""
    return celsius + 273.15


def show_menu() -> None:
    """Print the options menu."""
    print("\n--- Temperature Converter ---")
    print("1. Celsius → Fahrenheit")
    print("2. Fahrenheit → Celsius")
    print("3. Celsius → Kelvin")
    print("4. Quit")


def read_number(prompt: str) -> float:
    """Read a float from the user, retrying until valid."""
    while True:
        raw = input(prompt).strip()
        try:
            return float(raw)
        except ValueError:
            print("⚠️  Please enter a valid number (example: 12 or 12.5).")


while True:
    show_menu()
    choice = input("Choose an option (1-4): ").strip()

    if choice == "4":
        print("Bye!")
        break

    if choice not in {"1", "2", "3"}:
        print("⚠️  Please choose 1, 2, 3, or 4.")
        continue

    value = read_number("Enter the temperature: ")

    if choice == "1":
        result = celsius_to_fahrenheit(value)
        print(f"{value:.2f}°C = {result:.2f}°F")
    elif choice == "2":
        result = fahrenheit_to_celsius(value)
        print(f"{value:.2f}°F = {result:.2f}°C")
    else:
        result = celsius_to_kelvin(value)
        print(f"{value:.2f}°C = {result:.2f}K")

