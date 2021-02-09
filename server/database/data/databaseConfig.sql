CREATE DATABASE rawdatydev;
CREATE USER rawdatyuser WITH superuser password '123456';
ALTER DATABASE rawdatydev OWNER TO rawdatyuser;
-- test db
CREATE DATABASE rawdatytest;
CREATE USER rawdatyuser2 WITH superuser password '123456';
ALTER DATABASE rawdatytest OWNER TO rawdatyuser2;
