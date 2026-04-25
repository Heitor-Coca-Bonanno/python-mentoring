# Session 9 — Refactored example (one possible clean version)

from __future__ import annotations

import sqlite3
from typing import Any

DB_PATH = "db.db"


def insert_row(name: str, email: str, phone: str) -> None:
    """Insert one row into table t (name/email/phone)."""
    with sqlite3.connect(DB_PATH) as conn:
        conn.execute("INSERT INTO t VALUES (?, ?, ?)", (name, email, phone))


def search_by_name(query: str) -> list[tuple[Any, ...]]:
    """Return rows from table t whose name matches the query."""
    with sqlite3.connect(DB_PATH) as conn:
        cur = conn.execute("SELECT * FROM t WHERE name LIKE ?", (f"%{query}%",))
        return cur.fetchall()


def average_rating(items: list[dict[str, Any]]) -> float:
    """Compute average of the 'rating' key across items."""
    if not items:
        return 0.0
    total = sum(float(item["rating"]) for item in items)
    return total / len(items)

