CREATE TABLE koalas(
	"id" SERIAL PRIMARY KEY,
	"age" varchar(3),
	"gender" varchar(10),
	"ready_for_transfer" varchar(10),
	"notes" varchar(128),
  "koala_name" varchar(35)
);

SELECT * FROM koalas ORDER BY id ASC;

INSERT INTO koalas (age, gender, ready_for_transfer, notes, koala_name) VALUES ('2', 'F', 'true', 'test Koala', 'Oliver');

UPDATE koalas SET ready_for_transfer=true WHERE id=2;