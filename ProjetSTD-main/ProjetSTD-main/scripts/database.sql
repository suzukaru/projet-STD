-- Pour charger ce fichier SQL dans le fichier database.db de SQLITE3
-- Executer cette commande dans un terminal : sqlite3 database.db < scripts/database.sql

CREATE TABLE arme (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    color TEXT NOT NULL
);

INSERT INTO arme (name, color) VALUES ('Infanterie', '#ffcc00d7');
INSERT INTO arme (name, color) VALUES ('Cavalerie', '#ffffffff');
INSERT INTO arme (name, color) VALUES ('Artillerie', '#FF4500');
INSERT INTO arme (name, color) VALUES ('Génie', '#808080');
INSERT INTO arme (name, color) VALUES ('Transmissions', '#00CED1');
INSERT INTO arme (name, color) VALUES ('Matériel', '#fa00edff');
INSERT INTO arme (name, color) VALUES ('Train', '#006305ff');