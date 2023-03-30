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

SELECT * FROM users;

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

SELECT * FROM products

