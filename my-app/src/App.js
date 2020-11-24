import React from "react";
import "./App.css";
import youtube from "./YoutubeAPI";
import Search from "./Search";
import Deck_A from "./Deck_A";
import Deck_B from "./Deck_B";
import Deck_C from "./Deck_C";
import Deck_D from "./Deck_D";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
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

  handleSubmit = async (termFromSearchBar) => {
    const response = await youtube.get("/search", {
      params: {
        q: termFromSearchBar,
      },
    });

    this.setState({
      videos: response.data.items,
    });
    console.log("this is resp", response);
  };
  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    console.log(this.state);
    return (
      <>
        <div
          style={{
            height: "80px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        ></div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Search handleFormSubmit={this.handleSubmit} />
          <div
            style={{
              width: "808px",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <div className="deckcontainer">
              <Deck_A
                key={1}
                videoId={this.state.songList[this.state.songCountA]}
                getNewSongA={() => {
                  this.getNextSongA();
                }}
              >
                A
              </Deck_A>{" "}
            </div>
            <div className="deckcontainer">
              <Deck_B
                key={2}
                videoId={this.state.songList[this.state.songCountB]}
                getNewSongB={() => {
                  this.getNextSongB();
                }}
              >
                B
              </Deck_B>{" "}
            </div>
            <div className="deckcontainer">
              <Deck_C
                key={3}
                videoId={this.state.songList[this.state.songCountC]}
                getNewSongC={() => {
                  this.getNextSongC();
                }}
              >
                C
              </Deck_C>{" "}
            </div>
            <div className="deckcontainer">
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
        </div>
      </>
    );
  }
}
