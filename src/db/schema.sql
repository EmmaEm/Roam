DROP DATABASE IF EXISTS roam;
CREATE DATABASE roam;

\c roam;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  picture VARCHAR(255) DEFAULT 'http://www.pieglobal.com/wp-content/uploads/2015/10/placeholder-user.png',
  current_city VARCHAR(255),
  join_date DATE DEFAULT CURRENT_DATE
)
