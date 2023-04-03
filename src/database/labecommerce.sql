-- Active: 1679965053246@@127.0.0.1@3306
CREATE TABLE users(
    id TEXT PRIMARY KEY UNIQUE NOT NULL, 
    email TEXT UNIQUE NOT NULL, 
    password TEXT NOT NULL
);

INSERT INTO users 
VALUES 
("1", "thalitacosta@gmail.com", "abc123"), 
("2", "alanmartins@gmail.com", "123adf"),
("3", "guilhermecosta@icloud.com", "142ab"),
("4", "andreals@gmail.com", "xs5211");

-- EXERCÍCIO 1
SELECT * FROM users;

INSERT INTO users 
VALUES 
("5", "anabeatriz@gmail.com", "sen123");

-- EXERCÍCIO 2
DELETE FROM users
WHERE id = "3";

UPDATE users
SET password = "123456"
WHERE id = "1";

-- EXERCÍCIO 3
SELECT * FROM users
ORDER BY email ASC;
------------------------------------------------------

CREATE TABLE products(
    id TEXT PRIMARY KEY UNIQUE NOT NULL, 
    name TEXT NOT NULL, 
    price REAL NOT NULL,
    category TEXT NOT NULL
);

INSERT INTO products 
VALUES 
("01", "Sabonete Líquido Facial", 86.90,"Rosto"), 
("02", "Espuma de banho", 111.65, "Banho e Corpo"),
("03", "Hidratante Labial", 22.80, "Rosto"),
("04", "Serum Antioxidante", 60.00, "Rosto"),
("05", "Fragrância Capim Limão", 130.00, "Fragrâncias"),
("06", "Óleo Corporal", 60.00, "Banho e Corpo"),
("07", "Hidratante Corporal", 45.62, "Banho e Corpo");

SELECT * FROM products;

-- EXERCÍCIO 1
SELECT * FROM products
WHERE name LIKE "%Hidratante%";

INSERT INTO products 
VALUES 
("08", "Creme de Mãos Hidratante", 22.00,"Banho e Corpo"),
("09", "Máscara Facial Esfoliante", 85.00, "Rosto");

-- EXERCÍCIO 2
SELECT * FROM products
WHERE id = "05";

DELETE FROM products
WHERE id = "08";

UPDATE products
SET price = 68.00
WHERE id = "09";

-- EXERCÍCIO 3
SELECT * FROM products
WHERE name LIKE "%Hidratante%"
ORDER BY price ASC
LIMIT 20 OFFSET 0;

SELECT * FROM products
WHERE name LIKE "%Hidratante%" 
AND price > 25 
AND price < 50;

