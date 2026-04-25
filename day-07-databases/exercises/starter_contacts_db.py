# Session 7 — Databases
# Build a contact book backed by SQLite

import sqlite3

def get_connection():
    """Create and return a database connection."""
    conn = sqlite3.connect("contacts.db")
    conn.row_factory = sqlite3.Row  # lets us access columns by name
    return conn

def create_table():
    """Create the contacts table if it doesn't exist."""
    conn = get_connection()
    # TODO: Write CREATE TABLE IF NOT EXISTS with columns:
    #       id (INTEGER PRIMARY KEY), name (TEXT), email (TEXT), phone (TEXT)
    conn.close()

def add_contact(name, email, phone):
    """Insert a new contact into the database."""
    conn = get_connection()
    # TODO: Write the INSERT statement
    conn.close()

def list_contacts():
    """Print all contacts."""
    conn = get_connection()
    # TODO: SELECT all contacts and print them
    conn.close()

def find_contact(name):
    """Search for contacts by name (partial match)."""
    conn = get_connection()
    # TODO: Use LIKE to find matching contacts
    conn.close()

# TODO: Add update_phone(name, new_phone) and delete_contact(name)
# TODO: Build a menu loop to drive the app

create_table()

