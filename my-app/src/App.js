import React from "react";
import cx from "classnames";
import "./App.css";
import youtube from "./YoutubeAPI";
import Search from "./Search";
import Searchlist from "./Searchlist";
import Deck_A from "./Deck_A";
import Deck_B from "./Deck_B";
import Deck_C from "./Deck_C";
import Deck_D from "./Deck_D";
import "./IMM.svg";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      // songList: [],
      // selectedVideoA: null,
      songSelectA: false,
      songSelectB: false,
      songSelectC: false,
      songSelectD: false,
    };
  }

  getNextSongA() {
    this.setState({
      ...this.state,
      songSelectA: true,
      songSelectB: false,
      songSelectC: false,
      songSelectD: false,
    });
  }
  getNextSongB() {
    this.setState({
      ...this.state,
      songSelectB: true,
      songSelectA: false,
      songSelectC: false,
      songSelectD: false,
    });
  }
  getNextSongC() {
    this.setState({
      ...this.state,
      songSelectC: true,
      songSelectB: false,
      songSelectA: false,
      songSelectD: false,
    });
  }
  getNextSongD() {
    this.setState({
      ...this.state,
      songSelectD: true,
      songSelectB: false,
      songSelectC: false,
      songSelectA: false,
    });
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

  handleVideoSelectA = (video) => {
    this.setState({ ...this.state, songSelectA: false, selectedVideoA: video });
  };

  handleVideoSelectB = (video) => {
    this.setState({ ...this.state, songSelectB: false, selectedVideoB: video });
  };

  handleVideoSelectC = (video) => {
    this.setState({ ...this.state, songSelectC: false, selectedVideoC: video });
  };

  handleVideoSelectD = (video) => {
    this.setState({ ...this.state, songSelectD: false, selectedVideoD: video });
  };

  handleCloseA = () => {
    this.setState({ ...this.state, songSelectA: false });
  };

  handleCloseB = () => {
    this.setState({ ...this.state, songSelectB: false });
  };

  handleCloseC = () => {
    this.setState({ ...this.state, songSelectC: false });
  };

  handleCloseD = () => {
    this.setState({ ...this.state, songSelectD: false });
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
            <div className="searchclosebox">
              <div
                className="searchclose"
                onClick={() => {
                  this.handleCloseA();
                }}
              ></div>
              <div className="searchbox">
                <Search handleFormSubmit={this.handleSubmit} />
                <Searchlist
                  key={11}
                  handleVideoSelect={this.handleVideoSelectA}
                  videos={this.state.videos}
                />
              </div>
            </div>
          )}

          {this.state.songSelectB && (
            <div className="searchclosebox">
              <div
                className="searchclose"
                onClick={() => {
                  this.handleCloseB();
                }}
              ></div>
              <div className="searchbox">
                <Search handleFormSubmit={this.handleSubmit} />
                <Searchlist
                  key={11}
                  handleVideoSelect={this.handleVideoSelectB}
                  videos={this.state.videos}
                />
              </div>
            </div>
          )}

          {this.state.songSelectC && (
            <div className="searchclosebox">
              <div
                className="searchclose"
                onClick={() => {
                  this.handleCloseC();
                }}
              ></div>
              <div className="searchbox">
                <Search handleFormSubmit={this.handleSubmit} />
                <Searchlist
                  key={11}
                  handleVideoSelect={this.handleVideoSelectC}
                  videos={this.state.videos}
                />
              </div>
            </div>
          )}

          {this.state.songSelectD && (
            <div className="searchclosebox">
              <div
                className="searchclose"
                onClick={() => {
                  this.handleCloseD();
                }}
              ></div>
              <div className="searchbox">
                <Search handleFormSubmit={this.handleSubmit} />
                <Searchlist
                  key={11}
                  handleVideoSelect={this.handleVideoSelectD}
                  videos={this.state.videos}
                />
              </div>
            </div>
          )}

          <div
            style={{
              width: "808px",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <div
              className={cx({
                deckcontainer: true,
                selecteddeck:
                  this.state.songSelectB === true ||
                  this.state.songSelectC === true ||
                  this.state.songSelectD === true,
              })}
            >
              <Deck_A
                key={111}
                videoId={this.state?.selectedVideoA?.id?.videoId}
                getNewSongA={() => {
                  this.getNextSongA();
                }}
              >
                A
              </Deck_A>{" "}
            </div>
            <div
              className={cx({
                deckcontainer: true,
                selecteddeck:
                  this.state.songSelectA === true ||
                  this.state.songSelectC === true ||
                  this.state.songSelectD === true,
              })}
            >
              <Deck_B
                key={222}
                videoId={this.state?.selectedVideoB?.id?.videoId}
                getNewSongB={() => {
                  this.getNextSongB();
                }}
              >
                B
              </Deck_B>{" "}
            </div>
            <div
              className={cx({
                deckcontainer: true,
                selecteddeck:
                  this.state.songSelectA === true ||
                  this.state.songSelectB === true ||
                  this.state.songSelectD === true,
              })}
            >
              <Deck_C
                key={333}
                videoId={this.state?.selectedVideoC?.id?.videoId}
                getNewSongC={() => {
                  this.getNextSongC();
                }}
              >
                C
              </Deck_C>{" "}
            </div>
            <div
              className={cx({
                deckcontainer: true,
                selecteddeck:
                  this.state.songSelectA === true ||
                  this.state.songSelectB === true ||
                  this.state.songSelectC === true,
              })}
            >
              <Deck_D
                key={444}
                videoId={this.state?.selectedVideoD?.id?.videoId}
                getNewSongD={() => {
                  this.getNextSongD();
                }}
              >
                D
              </Deck_D>
            </div>
          </div>
          <div
            style={{
              width: "80px",
              opacity: "50%",
            }}
          >
            <img
              style={{
                width: "80px",
                marginTop: "8px",              }}
              src="IMM.svg"
            ></img>
          </div>
        </div>
      </>
    );
  }
}
