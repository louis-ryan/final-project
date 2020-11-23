import React from "react";
import "./App.css";
// import axios from "./axios";
import Deck from "./Deck";

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
      songCount1: 0,
    };
  }

  // componentDidMount() {
  //   axios.get("/").then(({ data }) => {
  //     const { id, url, bpm, key } = data;
  //     this.setState({
  //       // Add urls to the songList array
  //     })
  //   })
  // }

  getNextSong1() {
    this.setState({ ...this.state, songCount1: this.state.songCount1 + 1 });
  }

  render() {
    console.log(this.state);
    return (
      <>
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
            <Deck
              key={1}
              videoId={this.state.songList[this.state.songCount1]}
              getNewSong={() => {
                this.getNextSong1();
              }}
            ></Deck>{" "}
            <Deck
              key={2}
              videoId={this.state.songList[this.state.songCount1]}
              getNewSong={() => {
                this.getNextSong1();
              }}
            ></Deck>{" "}
            <Deck
              key={3}
              videoId={this.state.songList[this.state.songCount1]}
              getNewSong={() => {
                this.getNextSong1();
              }}
            ></Deck>{" "}
            <Deck
              key={4}
              videoId={this.state.songList[this.state.songCount1]}
              getNewSong={() => {
                this.getNextSong1();
              }}
            ></Deck>
            {/* <Deck></Deck>
            <Deck></Deck>
            <Deck></Deck> */}
          </div>
        </div>
      </>
    );
  }
}
