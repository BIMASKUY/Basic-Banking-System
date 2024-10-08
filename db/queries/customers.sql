-- Mendapatkan semua kolom dari table customers --
SELECT * FROM customers;

-- Mencari customers dengan nama 'bima' --
SELECT * FROM customers WHERE name = 'bima';

-- Menghapus customers dengan nama 'bima' --
DELETE FROM customers WHERE name = 'bima';

-- Update customers dengan nama 'bima' --
UPDATE customers SET name = 'bima_baru' WHERE name = 'bima';

-- Menambahkan CTE (Common Table Expression) untuk mendapatkan nama customers --
WITH customersNames AS (
	SELECT name FROM customers
)
SELECT * FROM customersNames;

-- Memasukkan 1 data ke table customers --
INSERT INTO customers (name, email, phone_number, address) VALUES ('bima', 'bima@gmail.com', '081234567890', 'dramaga');

-- Menghapus semua data dari table customers --
DELETE FROM customers;

-- Stored procedure automation data random customers --
DO $$
DECLARE
    i INT;
BEGIN
    FOR i IN 1..10 LOOP
        INSERT INTO customers (name, email, phone_number, address) VALUES
        (
            'Customer ' || i,  -- Name
            'customer' || i || '@gmail.com',  -- Email
            '123-456-78' || LPAD(i::TEXT, 2, '0'),  -- Phone number
            'Address for Customer ' || i  -- Description
        );
    END LOOP;
END $$;