BEGIN;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-- CREATE EXTENSION IF NOT EXISTS "postgis";

-- DROP TABLE if EXISTS surfbreak CASCADE;

CREATE TABLE IF NOT EXISTS public.surfbreak
(
    name character varying NOT NULL,
    id uuid NOT NULL,
    region character varying NOT NULL,
    latitude Numeric(10,7) NOT NULL,
    longitude Numeric(10,7) NOT NULL,
    create_timestamp timestamp without time zone NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO surfbreak VALUES ('Winki Pop', 'ad131f93-a07d-4549-acda-a3762a665c6d', 'Surf Coast', '-38.368730', '144.286120', current_timestamp);
INSERT INTO surfbreak VALUES ('Bells Beach', '11ef0462-1f09-4d2f-9c43-8ba61ef31b7f', 'Surf Coast', '-38.371725', '144.283352', current_timestamp);
INSERT INTO surfbreak VALUES ('Fairhaven', '98b7e5b5-78bf-4807-9af5-f5ca1db51fbe', 'Surf Coast', '-38.469299', '144.083907', current_timestamp);
INSERT INTO surfbreak VALUES ('Eastern View', 'eaf150fa-63d3-461b-bf2d-2e528eeb05dd', 'Surf Coast', '-38.473016', '144.058364', current_timestamp);
INSERT INTO surfbreak VALUES ('Lorne Point', 'eba7ed74-1cc2-4b3a-a472-6bb971a3d778', 'Surf Coast', '-38.542733', '143.979457', current_timestamp);
INSERT INTO surfbreak VALUES ('Wye River', '7b682dd7-2a6b-4b01-9d79-308d2d12f04d', 'Surf Coast', '-38.637388', '143.894694', current_timestamp);

END;