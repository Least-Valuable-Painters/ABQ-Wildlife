
DROP TABLE IF EXISTS favorite;
DROP TABLE IF EXISTS comment;
DROP TABLE IF EXISTS image;
DROP TABLE IF EXISTS location;
DROP TABLE IF EXISTS `user`;


CREATE TABLE `user` (
                         userId BINARY(16) NOT NULL,
                         userActivationToken CHAR(32),
                         userEmail VARCHAR(128) NOT NULL UNIQUE,
                         userHash  CHAR(97) NOT NULL,
                         userIsAdmin BOOLEAN NOT NULL,
                         userName VARCHAR(128) NOT NULL,
                         UNIQUE(userEmail),
                         PRIMARY KEY(userId)
);

CREATE TABLE location (
                       locationId BINARY(16) NOT NULL,
                       locationDateCreated DATE NOT NULL,
                       locationDescription VARCHAR(128) NOT NULL,
                       locationLat TINYINT NOT NULL,
                       locationLng TINYINT NOT NULL,
                       locationName VARCHAR(255) NOT NULL,
                       UNIQUE(locationId),
                       PRIMARY KEY(locationId)
);

CREATE TABLE image (
                       imageId BINARY(16) NOT NULL,
                       imageLocationId BINARY(16) NOT NULL,
                       imageUserId BINARY(16) NOT NULL,
                       imageCloudinaryId VARCHAR(255) NOT NULL,
                       imageDateCreated DATETIME(6) NOT NULL,
                       imageUrl CHAR(255) NOT NULL,
                       INDEX(imageLocationId),
                       INDEX(imageUserId),
                       FOREIGN KEY(imageLocationId) REFERENCES location(locationId),
                       FOREIGN KEY(imageUserId) REFERENCES `user`(userId),
                       PRIMARY KEY (imageId)
);

CREATE TABLE comment (
                        commentId BINARY(16) NOT NULL,
                        commentImageId BINARY(16) NOT NULL,
                        commentUserId BINARY(16) NOT NULL,
                        commentContent VARCHAR(255),
                        commentDate DATETIME(6),
                        INDEX(commentUserId),
                        INDEX(commentImageId),
                        FOREIGN KEY(commentImageId) REFERENCES image(imageId),
                        FOREIGN KEY(commentUserId) REFERENCES `user`(userId),
                        PRIMARY KEY(commentId)
);

CREATE TABLE favorite (
                       favoriteLocationId BINARY(16) NOT NULL,
                       favoriteUserId BINARY(16) NOT NULL,
                       INDEX(favoriteLocationId),
                       INDEX(favoriteUserId),
                       FOREIGN KEY(favoriteLocationId) REFERENCES location(locationId),
                       FOREIGN KEY(favoriteUserId) REFERENCES `user`(userId),
                       PRIMARY KEY(favoriteLocationId, favoriteUserId)
);