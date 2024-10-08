-- Membuat table accounts --
CREATE TABLE accounts(
    id SERIAL PRIMARY KEY,
    customer_id INT NOT NULL,
    balance INT NOT NULL,
    delete_this_field BOOLEAN,
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);

-- Menghapus kolom delete_this_field pada table accounts --
ALTER TABLE accounts DROP COLUMN delete_this_field;

-- Menambahkan index pada kolom balance pada table accounts --
CREATE INDEX accounts_balance_index ON accounts(balance);