BEGIN;

DROP TABLE IF EXISTS kindergarten , users, locations, comments CASCADE;

CREATE TABLE users(
id SERIAL PRIMARY KEY,
users_name VARCHAR(50) NOT NULL,
email VARCHAR(255) NOT NULL,
password TEXT NOT NULL,
is_admin VARCHAR(50)  DEFAULT 'false',
create_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE locations(
id SERIAL PRIMARY KEY,
location_name TEXT NOT NULL
);

CREATE TABLE kindergartens(
id SERIAL PRIMARY KEY,
kindergarten_name VARCHAR(255)	NOT NULL,
users_id	SERIAL	REFERENCES users(id),
cover_image	TEXT NOT NULL,
description	TEXT NOT NULL,
location_id	SERIAL	REFERENCES locations(id),
phone_number INTEGER NOT NULL,
latitude Decimal(8,6),
longitude Decimal(9,6),
min_price FLOAT,	
max_price FLOAT,	
periods	TEXT,	
images_gallery TEXT,	
request_status VARCHAR(50),	
is_enable VARCHAR(50)  DEFAULT 'false'
);

CREATE TABLE comments(
id SERIAL PRIMARY KEY,
kindergarten_id	INTEGER REFERENCES kindergartens(id)ON UPDATE CASCADE ON DELETE CASCADE,
users_name VARCHAR(50) NOT NULL,
comment	TEXT NOT NULL,
rating DECIMAL	NOT NULL,
create_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

COMMIT;



