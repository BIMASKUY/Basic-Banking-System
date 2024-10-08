-- Membuat tipe data enum untuk status transaksi --
CREATE TYPE transaction_type AS ENUM ('credit', 'debit');

-- Membuat table transactions --
CREATE TABLE transactions(
    id SERIAL PRIMARY KEY,
    account_id INT NOT NULL,
    description TEXT NOT NULL,
    amount INT NOT NULL,
    milliseconds_date BIGINT NOT NULL,
    type transaction_type NOT NULL,
    FOREIGN KEY (account_id) REFERENCES accounts(id)
);

-- Menambahkan index pada kolom type, amount, dan milliseconds_date pada table transactions
CREATE INDEX idx_transaction_type_date ON transactions(type, amount, milliseconds_date);