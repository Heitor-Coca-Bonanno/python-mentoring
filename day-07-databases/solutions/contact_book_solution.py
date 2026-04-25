# Session 7 — SQLite Contact Book (complete solution)

import sqlite3

DB_PATH = "contacts.db"


def get_connection() -> sqlite3.Connection:
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def create_table() -> None:
    with get_connection() as conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS contacts (
                id    INTEGER PRIMARY KEY AUTOINCREMENT,
                name  TEXT NOT NULL,
                email TEXT,
                phone TEXT
            )
            """
        )


def add_contact(name: str, email: str, phone: str) -> None:
    with get_connection() as conn:
        conn.execute(
            "INSERT INTO contacts (name, email, phone) VALUES (?, ?, ?)",
            (name, email, phone),
        )


def list_contacts() -> None:
    with get_connection() as conn:
        rows = conn.execute("SELECT * FROM contacts ORDER BY name").fetchall()
    if not rows:
        print("No contacts yet.")
        return
    print("\n📋 Contacts:")
    for r in rows:
        print(f"  [{r['id']}] {r['name']} — {r['email'] or '-'} — {r['phone'] or '-'}")


def find_contact(query: str) -> None:
    with get_connection() as conn:
        rows = conn.execute(
            "SELECT * FROM contacts WHERE name LIKE ? ORDER BY name",
            (f"%{query}%",),
        ).fetchall()
    if not rows:
        print("No matches.")
        return
    for r in rows:
        print(f"  [{r['id']}] {r['name']} — {r['email'] or '-'} — {r['phone'] or '-'}")


def update_phone(contact_id: int, new_phone: str) -> None:
    with get_connection() as conn:
        conn.execute("UPDATE contacts SET phone = ? WHERE id = ?", (new_phone, contact_id))


def delete_contact(contact_id: int) -> None:
    with get_connection() as conn:
        conn.execute("DELETE FROM contacts WHERE id = ?", (contact_id,))


def read_int(prompt: str) -> int:
    while True:
        raw = input(prompt).strip()
        try:
            return int(raw)
        except ValueError:
            print("⚠️  Please enter a whole number.")


def show_menu() -> None:
    print("\n--- Contact Book ---")
    print("1) Add contact")
    print("2) List contacts")
    print("3) Search by name")
    print("4) Update phone by id")
    print("5) Delete by id")
    print("6) Quit")


def main() -> None:
    create_table()
    while True:
        show_menu()
        choice = input("Choose (1-6): ").strip()

        if choice == "1":
            name = input("Name: ").strip()
            email = input("Email: ").strip()
            phone = input("Phone: ").strip()
            add_contact(name, email, phone)
            print("✅ Added.")
        elif choice == "2":
            list_contacts()
        elif choice == "3":
            query = input("Search: ").strip()
            find_contact(query)
        elif choice == "4":
            cid = read_int("Contact id: ")
            phone = input("New phone: ").strip()
            update_phone(cid, phone)
            print("✅ Updated.")
        elif choice == "5":
            cid = read_int("Contact id: ")
            delete_contact(cid)
            print("🗑️  Deleted.")
        elif choice == "6":
            print("Bye!")
            break
        else:
            print("⚠️  Invalid choice.")


if __name__ == "__main__":
    main()

