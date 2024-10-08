-- Mendapatkan semua akun berdasarkan nama customer --
SELECT FROM accounts INNER JOIN customers ON accounts.customer_id = customers.id WHERE customers.name = 'Customer1';

-- Mendapatkatkan account berdasarkan balance dari terbesar hingga terkecil --
SELECT * FROM accounts ORDER BY balance DESC;

-- Mengupdate balance akun dengan id 1 --
UPDATE accounts SET balance = 1000 WHERE id = 1;

-- Menghapus akun dengan id 1 --
DELETE FROM accounts WHERE id = 1;

-- Menghapus semua data dari table accounts --
DELETE FROM accounts;

-- Stored procedure automation data random accounts --
DO $$
DECLARE
    i INT;
BEGIN
    FOR i IN 3..10 LOOP
        INSERT INTO accounts (customer_id, balance) VALUES
        (
            i,  -- Customer ID
            i * 1000  -- Balance
        );
    END LOOP;
END $$;