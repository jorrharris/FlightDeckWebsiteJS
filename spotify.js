const keys = require("./keys/keys");
require("isomorphic-fetch");

class Spotify {
  constructor(name, artist_id) {
    this.name = name;
    this.artist_id = artist_id;
    this.client_id = keys.spotifyClientID;
    this.client_secret = keys.spotifySecret;
    this.redirect = "https://localhost:5000/callback/";
  }

  async authorize(data) {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization:
          "Basic " +
          "Yzg4OWYzMjM5MjI0NGM4MGIyMzIyOTI5ODQ2ZjZmZWQ6MWMwZjJjODgwYTA1NDhiM2I1ZWViNmM2MjNiZmRjOTc=",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: "grant_type=client_credentials"
    });

    const resData = await response.json();
    return resData;
  }

  async getAlbums() {
    let ax;
    await this.authorize().then(data => (ax = data.access_token));
    const profileResponse = await fetch(
      `https://api.spotify.com/v1/artists/${
        this.artist_id
      }/albums?include_groups=single%2Cappears_on&market=US`,
      {
        headers: { Authorization: `Bearer ${ax}` }
      }
    );
    const tracks = await profileResponse.json();
    return tracks;
  }
}

module.exports = Spotify;
