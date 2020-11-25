import React from "react";
import "./Deck.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import ReactPlayer from "react-player/youtube";

export default class Deck_D extends React.Component {
  constructor(props) {
    super(props);
    this.videoIdD = props.videoIdD;
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

  setPlayback1() {
    this.setState({ ...this.state, playback: 2 });
  }
  setPlayback2() {
    this.setState({ ...this.state, playback: 1.5 });
  }
  setPlayback3() {
    this.setState({ ...this.state, playback: 1 });
  }
  setPlayback4() {
    this.setState({ ...this.state, playback: 0.75 });
  }
  setPlayback5() {
    this.setState({ ...this.state, playback: 0.5 });
  }

  render() {
    // console.log(this.videoId);
    return (
      <>
        <div
          className="panels"
          style={{
            width: "400px",
            height: "320px",
            overflow: "hidden",

            borderWidth: "2px",
            borderColor: "black",
          }}
        >
          <ReactPlayer
            style={{
              marginLeft: "-120px",
              marginBottom: "40px",
              clipPath: "circle(120px at center)",
            }}
            loop={true}
            playing={true}
            volume={this.state.volume}
            playbackRate={this.state.playback}
            url={this.props.videoId}
          />

          <div
            className="mixer"
            style={{
              width: "400px",
              height: "240px",
              marginTop: "-400px",
              marginLeft: "0px",
              // position: "absolute",
              // zIndex: "2",

              opacity: "80%",
            }}
          >
            <div
              style={{
                height: "240px",
                color: "white",
              }}
            >
              <div>
                <button
                  className="cue"
                  style={{
                    borderRadius: "50%",
                    marginTop: "16px",
                    marginLeft: "16px",
                    width: "80px",
                    height: "80px",
                    zoom: "75%",
                  }}
                  onClick={() => {
                    this.props.getNewSongD();
                  }}
                >
                  <h1>D</h1>
                </button>
              </div>
            </div>
            <div
              style={{
                height: "80px",
                marginLeft: "240px",
                marginTop: "-232px",
              }}
            >
              <Slider
                className="slider"
                style={{
                
                  marginTop: "16px",
                  marginLeft: "-120px",
                  width: "160px",
                }}
                onChange={(value) => {
                  this.setVolume(value / 100);
                }}
              />
            </div>
            <div>
              <button
                className="matchtrack"
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
            <div
              className="shadow"
              style={{
                opacity: "80%",
                // width: "32px",
                zoom: "75%",
                zIndex: "8",
                position: "absolute",
                marginTop: "-320px",
                marginLeft: "480px",
                textAlign: "center",
                borderRadius: "4px",
                overflow: "hidden",
                // border: "0.25px solid white",
              }}
            >
              <div
                onClick={() => {
                  this.setPlayback1();
                }}
                className="playback"
              >
                2
              </div>
              <div
                onClick={() => {
                  this.setPlayback2();
                }}
                className="playback"
              >
                1.5
              </div>
              <div
                onClick={() => {
                  this.setPlayback3();
                }}
                className="playback"
              >
                1.0
              </div>
              <div
                onClick={() => {
                  this.setPlayback4();
                }}
                className="playback"
              >
                .75
              </div>
              <div
                onClick={() => {
                  this.setPlayback5();
                }}
                className="playback"
              >
                .5
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
