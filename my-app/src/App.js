import React from "react";
import "./App.css";
import youtube from "./YoutubeAPI";
import Search from "./Search";
import Searchlist from "./Searchlist";
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
        // "https://youtu.be/pnHihK4dI58",
        // "https://youtu.be/QUMuDWDVd20",
        // "https://youtu.be/4CuJqtNdcJU",
        // "https://www.youtube.com/watch?v=ldcZoXz58q4&t",
        // "https://www.youtube.com/watch?v=ldcZoXz58q4&t",
        // "https://www.youtube.com/watch?v=ldcZoXz58q4&t",
      ],
      songSelectA: false,
      songSelectB: false,
      songSelectC: false,
      songSelectD: false,
    };
  }

  getNextSongA() {
    this.setState({ ...this.state, songSelectA: true });
  }
  getNextSongB() {
    this.setState({ ...this.state, songSelectB: true });
  }
  getNextSongC() {
    this.setState({ ...this.state, songSelectC: true });
  }
  getNextSongD() {
    this.setState({ ...this.state, songSelectD: true });
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
    console.log("response", response);
  };
  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  handleVideoSelect = (video) => {
    this.setState({ ...this.state, songSelectA: false });
  };

  render() {
    // console.log("is this the video: ",this.state);
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
          {this.state.songSelectA && (
            <div
              style={{
                width: "404px",
                height: "644px",
                border: "0.25px solid white",
                borderRadius: "8px",
                marginRight: "4px",
                opacity: "50%",
              }}
            >
              <Search handleFormSubmit={this.handleSubmit} />
              <Searchlist
                handleVideoSelect={this.handleVideoSelect}
                videos={this.state.videos}
              />
            </div>
          )}

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
                // videoId={this.state.songList[this.state.songCountA]}
                videoId={this.state?.selectedVideo?.id?.videoId}
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
