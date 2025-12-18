import sqlite3
from dto.arme_dto import ArmeDTO

class ArmeDAO:

    def __init__(self, db_path="database.db"):
        self.db_path = db_path

    def get_all(self):
        conn = sqlite3.connect(self.db_path)
        conn.row_factory = sqlite3.Row

        rows = conn.execute("SELECT id, name, color FROM arme").fetchall()
        conn.close()

        return [
            ArmeDTO(id=row["id"], name=row["name"], color=row["color"])
            for row in rows
        ]