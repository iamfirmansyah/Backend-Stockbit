INSERT INTO "users"
VALUES
	( 1, 'Ali', 2 ),
	( 2, 'Budi', 0 ),
	( 3, 'Cecep', 1 );

-- Answer 
SELECT 
    u.ID,
    u.UserName, 
    users.UserName AS ParentUserName 
FROM users
RIGHT JOIN
    users u ON u.parent = users.ID