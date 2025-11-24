# Moodify

**Moodify** is a web-based music player that uses the Deezer API to stream music. The application was developed as part of a Software Project course during my studies, together with another student.

## Features

- User accounts
- Song search
- Likes & playlists
- Personalized recommendations
- Shared “Party Rooms” for group listening

## Architecture

Moodify follows a classic three-layer architecture:

- **Frontend:** Angular
- **Backend:** Spring Boot
- **Database:** PostgreSQL

Music data is retrieved via the Deezer API.

### Party Rooms

Users can create Party Rooms and invite others to enjoy music together in real time. Participants can suggest tracks, vote on upcoming songs, and collaboratively shape the playlist. Real-time interactions are enabled through WebSockets.
