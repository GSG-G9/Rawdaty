BEGIN;

DROP TABLE IF EXISTS kindergarten,user, location, comments CASCADE;

CREATE TABLE kindergarten(
id SERIAL PRIMARY KEY,
kindergarten_name VARCHAR(50)	not null,
user_id	SERIAL	REFERENCES user(id),
cover_image	TEXT not null,
description	TEXT not null,
location_id	SERIAL	REFERENCES location(id),
phone_number INTEGER not null,
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
location_name TEXT not null
);

CREATE TABLE user(
id SERIAL PRIMARY KEY,
user_name VARCHAR(50) not null,
email VARCHAR(255) not null,
password VARCHAR(50) not null,
is_admin BOOLEAN SET DEFAULT false,
create_at TIMESTAMP	SET DEFAULT now()
);

CREATE TABLE comment(
id SERIAL PRIMARY KEY,
kindergarten_id	INTEGER REFERENCES Kindergarten(id),
user_name VARCHAR(50)	not null,
comment	TEXT not null,
rating DECIMAL	not null,
create_at TIMESTAMP	SET DEFAULT now()
);

COMMIT;

