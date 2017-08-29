DROP DATABASE IF EXISTS roam;
CREATE DATABASE roam;

\c roam;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  username VARCHAR(20) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  picture VARCHAR(255) DEFAULT 'http://www.pieglobal.com/wp-content/uploads/2015/10/placeholder-user.png',
  current_city VARCHAR(255),
  join_date DATE DEFAULT CURRENT_DATE
);

CREATE TABLE cities (
  city_id  SERIAL PRIMARY KEY,
  city VARCHAR(50) NOT NULL,
  state VARCHAR(50),
  country VARCHAR(50),
  picture VARCHAR(255) DEFAULT 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'
);

CREATE TABLE posts (
  post_id  SERIAL PRIMARY KEY,
  city_id INT,
  user_id INT,
  city VARCHAR(50) NOT NULL,
  title VARCHAR(100) NOT NULL,
  content VARCHAR(255),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);
