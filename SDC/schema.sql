/*  Execute this file from the command line by typing:
 *    psql postgres < schema.sql
*/

DROP DATABASE IF EXISTS airbnb_morePlaces;

CREATE DATABASE airbnb_morePlaces;

\c airbnb_morePlaces;

CREATE TABLE IF NOT EXISTS residences (
  id SERIAL PRIMARY KEY,
  residenceName varchar(50),
  price varchar(8),
  lat DECIMAL(9,6),
  long DECIMAL(9,6),
  imageurl varchar(3)
);