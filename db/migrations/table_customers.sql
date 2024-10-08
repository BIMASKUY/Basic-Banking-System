-- Menghapus table customers jika ada (tidak akan ada, karena belum dibuat) --
DROP TABLE IF EXISTS customers CASCADE;

-- Membuat table customers --
CREATE TABLE customers(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone_number VARCHAR(255) NOT NULL,
);

-- Menambahkan index pada kolom name pada table customers --
CREATE INDEX customers_name_index ON customers(name);

-- Menambahkan kolom address pada table customers --
ALTER TABLE customers ADD COLUMN address TEXT;