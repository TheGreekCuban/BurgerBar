--    * Create the `burgers_db`.
--    * Switch to or use the `burgers_db`.
--    * Create a `burgers` table with these fields:
--      * **id**: an auto incrementing int that serves as the primary key.
--      * **burger_name**: a string.
--      * **devoured**: a boolean.
-- 3. Still in the `db` folder, create a `seeds.sql` file. In this file, write insert queries to populate the `burgers` table with at least three entries.

INSERT INTO burgers (burger_name)
VALUES  ("AVOCADO TURKEY BURGER"),
        ("BUFFALO BACON BURGER"),
        ("GRILLED CHEESE BURGER"),
        ("CARDIAC ARREST BURGER")