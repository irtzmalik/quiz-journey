USE quiz_journey;

INSERT INTO Users (name,token,createdAt, updatedAt) VALUES 
('Anya', 'D894DA7BC9BB7ABC45C2DE2738C51E34813C21D6',CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO Characters (name,points, user_id, createdAt,updatedAt) VALUES
('Brad',30,2,CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO Locations (name, image, category, createdAt, updatedAt) VALUES
('Earth Science', '/assets/img/mountains.png', 'geography', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);