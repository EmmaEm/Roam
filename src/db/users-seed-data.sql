INSERT INTO users (name, username, email, password, current_city) VALUES ('Daenerys', 'Khaleesi', 'dragons@ravens.com', 'Viserion', 'Dragonstone'), ('Jon Snow', 'knownothing', 'kingofthenorth@ravens.com', 'Ghost', 'Winterfell'), ('Arya Stark', 'noone', 'assassin@ravens.com', 'valarmorghulis', 'Winterfell');

INSERT INTO posts (title, city, content, user_id) VALUES ('Icy Wasteland of the Dead', 'The Wall', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1'), ('Experience Targaryen History', 'Dragonstone', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1'),  ('Too many people', 'King''s Landing', 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '2');

INSERT INTO cities (city, state, country) VALUES
('The Wall', 'The North', 'Westeros'),
('Braavos', null, 'Essos'),
('King''s Landing', 'The Crownlands', 'Westeros'),
('Dragonstone', 'The Crownlands', 'Westeros'),
('Winterfell', 'The North', 'Westeros');
