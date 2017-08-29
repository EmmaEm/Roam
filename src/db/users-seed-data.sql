INSERT INTO users (name, username, email, password, current_city) VALUES ('Daenerys', 'Khaleesi', 'dragons@ravens.com', 'Viserion', 'Dragonstone'), ('Jon Snow', 'knownothing', 'kingofthenorth@ravens.com', 'Ghost', 'Winterfell'), ('Arya Stark', 'noone', 'assassin@ravens.com', 'valarmorghulis', 'Winterfell');

INSERT INTO posts (city_id, title, city, content, user_id) VALUES
(1, 'Icy Wasteland of the Dead', 'The Wall', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1'),
(4, 'Experience Targaryen History', 'Dragonstone', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1'),
(3, 'Queen Bitch Lives Here', 'King''s Landing', 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '1'),
(3, 'Too Hot', 'King''s Landing', 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '3'),
(3, 'Too many people', 'King''s Landing', 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '2');

INSERT INTO cities (city, state, country, picture) VALUES
('The Wall', 'The North', 'Westeros', 'https://vignette4.wikia.nocookie.net/gameofthrones/images/9/97/The_Wall_from_the_south.jpg/revision/latest?cb=20150323201042'),
('Braavos', null, 'Essos', 'https://vignette4.wikia.nocookie.net/gameofthrones/images/7/7b/Titan_of_Braavos.jpg/revision/latest?cb=20150504024857'),
('King''s Landing', 'The Crownlands', 'Westeros', 'http://4.bp.blogspot.com/-qvKU5jdS0Ro/VMGb2ZL70nI/AAAAAAAAKyQ/zPzZVMxGf3w/s1600/game-of-thrones-king''s-landing-wallpapers_28141_1280x1024.jpg'),
('Dragonstone', 'The Crownlands', 'Westeros', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dragonstone-1501268917.png'),
('Winterfell', 'The North', 'Westeros', 'https://vignette4.wikia.nocookie.net/gameofthrones/images/0/08/1x01_Winterfell.jpg/revision/latest?cb=20170813191451');
