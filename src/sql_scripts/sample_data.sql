USE nutriverse;

INSERT INTO users (username, users_first_and_last_name, display_name, email, users_password, is_admin) VALUES
	('alexis-lee', 'Alexis Lee', 'Alexis', 'alexis-lee@nutriverse.com', 'password', TRUE),
	('patricia-santos', 'Patricia Buchner Santos', 'Patricia', 'patricia-santos@nutriverse.com', 'password', TRUE),
	('zoe-b-scott', 'Zoe Bianca Scott', 'Zoe', 'zoe-scott@nutriverse.com', 'password', TRUE);

INSERT INTO dataset (age, gender, weight_kg, weight_pounds, height_cm, height_feet, activity_level, pregnancy_status) VALUES
	(25, 'female', 64, Null, 168, Null, 'moderate', 'pregnant'),
	(35, 'female', 68, Null, 173, Null, 'low', 'lactating'),
	(30, 'female', 55, Null, 160, Null, 'high', 'pregnant'),
	(27, 'male', 62, Null, 178, Null, 'moderate', Null),
	(21, 'male', 76, Null, 180, Null, 'high', Null),
	(21, 'male', 76, Null, 180, Null, 'high', Null),
	(54, 'female', 76, Null, 171, Null, 'moderate', Null),
	(20, 'male', 62, Null, 173, Null, 'high', Null),
	(38, 'female', 51, Null, 165, Null, 'moderate', 'lactating'),
	(19, 'female', 60, Null, 166, Null, 'high', Null),
	(49, 'male', 52, Null, 177, Null, 'low', Null),
	(33, 'female', 81, Null, 159, Null, 'high', 'pregnant'),
	(76, 'female', 50, Null, 154, Null, 'low', Null),
	(28, 'female', 66, Null, 166, Null, 'moderate', 'pregnant'),
	(21, 'male', 88, Null, 194, Null, 'low', Null);