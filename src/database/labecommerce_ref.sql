-- Active: 1680809540142@@127.0.0.1@3306
CREATE TABLE users(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL, 
    password TEXT NOT NULL,
    created_at TEXT DEFAULT(DATETIME('now', 'localtime')) NOT NULL
);

INSERT INTO users (id, name, email, password)
VALUES 
("1", "Thalita Costa", "thalitacosta@email.com", "abc123"), 
("2", "Alan Martins", "alanmartins@email.com", "123adf"),
("3", "Guilherme Lopes", "guilherme@email.com", "142ab"),
("4", "Andrea Lopes", "andreals@email.com", "xs5211"),
("5", "Ana Beatriz", "ana@email.com", "xs5211");

SELECT * FROM users;

CREATE TABLE products(
    id TEXT PRIMARY KEY UNIQUE NOT NULL, 
    name TEXT NOT NULL, 
    price REAL NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT UNIQUE
);

INSERT INTO products 
VALUES 
("01", "Sabonete Líquido Facial", 86.90,"Rosto", null), 
("02", "Espuma de banho", 111.65, "Banho e Corpo", null),
("03", "Hidratante Labial", 22.80, "Rosto", null),
("04", "Serum Antioxidante", 60.00, "Rosto", null),
("05", "Fragrância Capim Limão", 130.00, "Fragrâncias", null),
("06", "Óleo Bifásico Corporal", 60.00, "Banho e Corpo", null),
("07", "Hidratante Corporal", 45.62, "Banho e Corpo", null),
("08", "Creme de Mãos Hidratante", 22.00,"Banho e Corpo", null),
("09", "Máscara Facial Esfoliante", 85.00, "Rosto", null);

SELECT * FROM products;

CREATE TABLE purchases (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    total_price REAL NOT NULL,
    paid INTEGER NOT NULL,
    created_at TEXT DEFAULT(DATETIME('now', 'localtime')) NOT NULL,
    buyer_id TEXT NOT NULL,
    FOREIGN KEY (buyer_id) REFERENCES users(id)
);

INSERT INTO purchases (id, total_price, paid, buyer_id)
VALUES ("01a", 450, 0, "2"),
("02a", 140, 0, "4"),
("03a", 96, 0, "1"),
("04a", 35, 0, "1"),
("05a", 250, 0, "4"),
("06a", 242, 0, "3"),
("07a", 123, 0, "3");

SELECT * FROM purchases;


CREATE TABLE purchases_products (
    purchase_id TEXT NOT NULL,
    product_id TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    FOREIGN KEY (purchase_id) REFERENCES purchases(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

INSERT INTO purchases_products
VALUES ("01a", "03", 2),
("01a", "07", 1),
("02a", "01", 3),
("04a", "03", 5),
("04a", "05", 2);

SELECT * FROM purchases_products;

SELECT
    purchases.buyer_id,
    purchases_products.purchase_id,
    purchases_products.quantity,
    purchases.total_price,
    products.id,
    products.name,
    products.price
FROM purchases_products
INNER JOIN purchases
ON purchases_products.purchase_id = purchases.id
LEFT JOIN products
ON products.id = purchases_products.product_id;