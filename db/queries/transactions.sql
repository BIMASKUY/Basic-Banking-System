
-- Mendapatkan semua transaksi berdasarkan deskripsi gaji --
SELECT * FROM transactions WHERE description LIKE '%gaji%';

-- Mendapatkan semua transaksi berdasarkan jumlah lebih dari 1000 --
SELECT * FROM transactions WHERE amount > 1000;

-- Melakukan transaction dengan metode transaction --
BEGIN;
    INSERT INTO transactions (account_id, description, amount, milliseconds_date, type) VALUES (1, 'Gaji bulan ini', 5000000, 1719605920514, 'credit');
    UPDATE accounts SET balance = balance + 5000000 WHERE id = 1;
COMMIT;

-- Mendapatkan data berdasarkan tipe --
SELECT * FROM transactions WHERE type = 'credit';

-- Mendapatkan account yang tidak pernah transaksi -- 
SELECT * FROM accounts WHERE id NOT IN (SELECT account_id FROM transactions);

-- Mengkategorikan transaksi berdasarkan tipe dan jumlah --
SELECT type, SUM(amount) FROM transactions GROUP BY type;