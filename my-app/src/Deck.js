import React from "react";
import "./Deck.css";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import ReactPlayer from "react-player/youtube";

export default class Deck extends React.Component {
  constructor(props) {
    super(props);
    this.videoId = props.videoId;
    this.state = { volume: 0, playback: 1 };
  }

  setVolume(volume) {
    this.setState({ volume });
  }

  onClickMatch() {
    this.setState({ ...this.state, playback: 0.25 });
  }

  onReleaseMatch() {
    this.setState({ ...this.state, playback: 1 });
  }

  onClickNext() {
    this.setState({});
  }

  render() {
    console.log(this.videoId);
    return (
      <>
        <div
          style={{
            width: "480px",
            height: "240px",
          }}
        >
          <ReactPlayer
            loop={true}
            playing={true}
            volume={this.state.volume}
            playbackRate={this.state.playback}
            url={this.props.videoId}
          />

          <div
            style={{
              width: "400px",
              marginTop: "-120px",
              marginLeft: "16px",
              position: "absolute",
              zIndex: "2",
            }}
            id="iframecontent"
          >
            <div
              style={{
                backgroundColor: "black",
                opacity: "80%",
                width: "240px",
                color: "white",
              }}
            >
              <div>DECK (decknumber)</div>
              {/* <div>
                <div>var-a</div>
                <div>var-b</div>
                <div>var-c</div>
              </div> */}
              <div>
                <button
                  onClick={() => {
                    this.props.getNewSong();
                  }}
                >
                  CHOOSE RANDOM SONG
                </button>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "100px",
              marginTop: "-80px",
              marginLeft: "300px",
              position: "absolute",
              zIndex: "2",
            }}
            id="iframecontent"
          >
            <div
              style={{
                backgroundColor: "black",
                opacity: "80%",

                color: "white",
              }}
            >
              <Slider
                style={{
                  width: "80px",
                }}
                onChange={(value) => {
                  this.setVolume(value / 100);
                }}
              />
              <button
                onMouseDown={() => {
                  this.onClickMatch();
                  console.log("button on value: ", this.state.playback);
                }}
                onMouseUp={(value) => {
                  this.onReleaseMatch();

                  console.log("button off value: ", this.state.playback);
                }}
              ></button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
