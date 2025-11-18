# Moodify

Is a web based music player which utilizes the Deezer API to stream music. The application was created for the Software Project course during my studies together with an other student.

## Features

- User Accounts
- Query Songs
- Likes & Playlists
- Song Recommendations
- Party Rooms

## Architecture

Moodify is a 3 layer application with a frontend built with Angular, a backend built with Spring Boot and a PostgreSQL database. Songs were fetched using the DeezerAPI.

### Party Rooms

Users can crete party rooms and invite other users to listen to music together, users can suggest new songs to be played and vote on them. Party rooms use WebSocket to facilitate the connection.
