CREATE TABLE "users" (
"id"  SERIAL ,
"first_name" VARCHAR ,
"last_name" VARCHAR ,
"email" VARCHAR ,
"admin_flag" BOOLEAN DEFAULT 'false' ,
"password" VARCHAR ,
PRIMARY KEY ("id")
);

CREATE TABLE "curricula" (
"id"  SERIAL ,
"type_id" INTEGER ,
"title" VARCHAR ,
"description" TEXT ,
"assignment_dt" DATE ,
"feedback_dt" DATE ,
"dt_created" DATE ,
"dt_modified" DATE ,
"topic_id" INTEGER ,
"instructor_id" INTEGER ,
PRIMARY KEY ("id")
);

CREATE TABLE "assignment_types" (
"id"  SERIAL ,
"type" VARCHAR ,
PRIMARY KEY ("id")
);

CREATE TABLE "student_feedback" (
"id"  SERIAL ,
"student_id" INTEGER ,
"curriculum_id" INTEGER ,
"feedback_dt" DATE ,
PRIMARY KEY ("id")
);

CREATE TABLE "topics" (
"id"  SERIAL ,
"topic" VARCHAR ,
PRIMARY KEY ("id")
);

CREATE TABLE "instructors" (
"id"  SERIAL ,
"first_name" VARCHAR ,
"last_name" VARCHAR ,
PRIMARY KEY ("id")
);

ALTER TABLE "curricula" ADD FOREIGN KEY ("type_id") REFERENCES "assignment_types" ("id");
ALTER TABLE "curricula" ADD FOREIGN KEY ("topic_id") REFERENCES "topics" ("id");
ALTER TABLE "curricula" ADD FOREIGN KEY ("instructor_id") REFERENCES "instructors" ("id");
ALTER TABLE "student_feedback" ADD FOREIGN KEY ("student_id") REFERENCES "users" ("id");
ALTER TABLE "student_feedback" ADD FOREIGN KEY ("curriculum_id") REFERENCES "curricula" ("id");