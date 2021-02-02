BEGIN;

DROP TABLE IF EXISTS kindergarten,user, location, comments CASCADE;

CREATE TABLE kindergarten(
id SERIAL PRIMARY KEY,
kindergarten_name VARCHAR(50)	NOT NULL,
user_id	SERIAL	REFERENCES user(id),
cover_image	TEXT NOT NULL,
description	TEXT NOT NULL,
location_id	SERIAL	REFERENCES location(id),
phone_number INTEGER NOT NULL,
latitude INTEGER,
longitude INTEGER,
min_price INTEGER,	
max_price INTEGER,	
periods	TEXT,	
images_gallery TEXT,	
request_status TEXT,	
is_enable BOOLEAN SET DEFAULT false,
create_at	TIMESTAMP SET DEFAULT now()
);

CREATE TABLE location(
id SERIAL PRIMARY KEY,
location_name TEXT NOT NULL
);

CREATE TABLE user(
id SERIAL PRIMARY KEY,
user_name VARCHAR(50) NOT NULL,
email VARCHAR(255) NOT NULL,
password VARCHAR(50) NOT NULL,
is_admin BOOLEAN SET DEFAULT false,
create_at TIMESTAMP	SET DEFAULT now()
);

CREATE TABLE comment(
id SERIAL PRIMARY KEY,
kindergarten_id	INTEGER REFERENCES Kindergarten(id),
user_name VARCHAR(50)	NOT NULL,
comment	TEXT NOT NULL,
rating DECIMAL	NOT NULL,
create_at TIMESTAMP	SET DEFAULT now()
);

COMMIT;



