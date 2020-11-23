import React from "react";
import "./App.css";
import YTSearch from "youtube-api-search";
// import axios from "axios";
import Deck_A from "./Deck_A";
import Deck_B from "./Deck_B";
import Deck_C from "./Deck_C";
import Deck_D from "./Deck_D";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songList: [
        "https://youtu.be/pnHihK4dI58",
        "https://youtu.be/QUMuDWDVd20",
        "https://youtu.be/4CuJqtNdcJU",
        "https://www.youtube.com/watch?v=ldcZoXz58q4&t",
        "https://www.youtube.com/watch?v=ldcZoXz58q4&t",
        "https://www.youtube.com/watch?v=ldcZoXz58q4&t",
      ],
      songCountA: 0,
      songCountB: 0,
      songCountC: 0,
      songCountD: 0,
    };
  }

  trackSearch = (term) => {
    YTSearch(
      { key: "AIzaSyCTkiorxlq7xyAEz3Kdu4g2lUu28inPtyk", term: term },
      (tracks) => {
        // console.log("tracks: ", tracks);
        this.setState({
          tracks: tracks,
          displayTracks: tracks[0],
        });
      }
    );
  };

  getNextSongA() {
    this.setState({ ...this.state, songCountA: this.state.songCountA + 1 });
  }
  getNextSongB() {
    this.setState({ ...this.state, songCountB: this.state.songCountB + 1 });
  }
  getNextSongC() {
    this.setState({ ...this.state, songCountC: this.state.songCountC + 1 });
  }
  getNextSongD() {
    this.setState({ ...this.state, songCountD: this.state.songCountD + 1 });
  }

  render() {
    console.log(this.state);
    return (
      <>
        <div
          style={{
            height: "80px",
            width: "100%",
            display: "flex",
            justifyContent: "left",
            backgroundColor: "brown",
          }}
        >
          <div
            style={{
              width: "160px",
              height: "80px",
            }}
          >
            TEMPO
          </div>
          <div
            style={{
              width: "160px",
              height: "80px",
            }}
          >
            KEY
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "800px",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <Deck_A
              style={{
                overflow: "hidden",
              }}
              key={1}
              videoId={this.state.songList[this.state.songCountA]}
              getNewSongA={() => {
                this.getNextSongA();
              }}
            >
              A
            </Deck_A>{" "}
            <Deck_B
              key={2}
              videoId={this.state.songList[this.state.songCountB]}
              getNewSongB={() => {
                this.getNextSongB();
              }}
            >
              B
            </Deck_B>{" "}
            <Deck_C
              key={3}
              videoId={this.state.songList[this.state.songCountC]}
              getNewSongC={() => {
                this.getNextSongC();
              }}
            >
              C
            </Deck_C>{" "}
            <Deck_D
              key={4}
              videoId={this.state.songList[this.state.songCountD]}
              getNewSongD={() => {
                this.getNextSongD();
              }}
            >
              D
            </Deck_D>
          </div>
        </div>
      </>
    );
  }
}
