import React, { Component } from "react";
import axios from "axios";
import Spinner from "../utils/Spinner";

class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      music: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/get-latest")
      .then(albums => {
        this.setState({ music: albums.data.items });
        this.setState({ loading: false });
      })
      .catch(err => console.log("Error: couldn't receive albums"));
  }

  render() {
    let musicContent;

    if (this.state.loading) {
      console.log("in here");
      musicContent = <Spinner />;
    } else {
      musicContent = this.state.music.map((album, index) => {
        return (
          <div key={index} className="col-xl-4">
            <div className="card text-white img-border bg-primary mt-4 rounded-card">
              <div className="card-header mx-auto">
                <img
                  className="img-border rounded-card responsive-img"
                  src={album.images[1].url}
                  alt=""
                />
              </div>
              <div className="card-body img-border-top">
                <h4 className="card-title text-center">{album.name}</h4>
                <p className="card-text text-center">
                  Released: {album.release_date} <br />
                  <br />
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={album.external_urls.spotify}
                    className="btn btn-secondary"
                  >
                    Listen Now
                  </a>
                </p>
              </div>
            </div>
          </div>
        );
      });
    }

    return (
      <div>
        <div className="row">
          <div className="col-lg-3 mt-4 text-center">
            <a
              target="_blank"
              href="https://open.spotify.com/artist/5ADZ1KqGgl7gP0lQAhbVKN?si=6Q_lCak1RBGJcaZlEAXMgQ"
              rel="noopener noreferrer"
              className="btn btn-lg round-btn btn-outline-secondary mr-3 responsive-btn my-auto btn-big"
            >
              <i className="fa fa-spotify mr-1" />
              Spotify
            </a>
          </div>
          <div className="col-lg-3 mt-4 text-center">
            <a
              target="_blank"
              href="https://itunes.apple.com/us/artist/flight-deck/1354280689"
              rel="noopener noreferrer"
              className="btn btn-lg round-btn btn-outline-secondary mr-3 responsive-btn btn-big"
            >
              <i className="fa fa-apple mr-1" />
              Apple Music
            </a>
          </div>
          <div className="col-lg-3 mt-4 text-center">
            <a
              target="_blank"
              href="https://play.google.com/store/music/artist/Flight_Deck?id=Aq7xrrx7cyecjg5s66cn5wd5x3a"
              rel="noopener noreferrer"
              className="btn btn-lg round-btn btn-outline-secondary mr-3 responsive-btn btn-big"
            >
              <i className="fa fa-google mr-1" />
              Google Play
            </a>
          </div>
          <div className="col-lg-3 mt-4 text-center">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/channel/UCEzP0rxE3rPN9dgwpIL64ag"
              className="btn btn-lg round-btn btn-outline-secondary mr-3 responsive-btn btn-big"
            >
              <i className="fa fa-youtube mr-1" />
              YouTube
            </a>
          </div>
        </div>

        <h1 className="text-center mt-4">Albums / Singles</h1>
        <div className="row">{musicContent}</div>
      </div>
    );
  }
}

export default Music;
