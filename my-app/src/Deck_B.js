import React from "react";
import cx from "classnames";
import "./Deck.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import ReactPlayer from "react-player/youtube";

export default class Deck_B extends React.Component {
  constructor(props) {
    super(props);
    this.videoId = props.videoId;
    this.state = {
      volume: 0,
      playback: 1,
      playing: false,
      originalPlayback: null,
    };
  }

  setPlaying() {
    if (this.state.playing === false) {
      this.setState({ ...this.state, playing: true });
    } else if (this.state.playing === true) {
      this.setState({ ...this.state, playing: false });
    }
  }

  setVolume(volume) {
    this.setState({ volume });
  }

  onClickMatch() {
    this.setState({
      ...this.state,
      originalPlayback: this.state.playback,
      playback: 0.25,
    });
  }

  onReleaseMatch() {
    this.setState({ ...this.state, playback: this.state.originalPlayback });
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
    console.log("B log: ", this.props);
    return (
      <>
        <div
          className={cx({
            panels: true,
            mixeron: this.state.playing === true,
          })}
          style={{
            width: "400px",
            height: "320px",
            overflow: "hidden",

            borderWidth: "2px",
            borderColor: "black",
          }}
        >
          <ReactPlayer
            // className={cx({
            //   mediaplayer: true,
            //   // playeron: this.state.playing === true,
            //   // playeroff: this.state.playing === false,
            // })}
            style={{
              marginLeft: "-120px",
              marginBottom: "40px",
              clipPath: "circle(120px at center)",
            }}
            loop={true}
            playing={this.state.playing}
            volume={this.state.volume}
            playbackRate={this.state.playback}
            url={"https://youtu.be/" + this.props.videoId}
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
                    this.props.getNewSongB();
                  }}
                >
                  <h1>B</h1>
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
                // className="matchtrack"
                // className="matchtrackempty"
                className={cx({
                  matchtrack: true,
                  matchtrack1:
                    this.state.playing === true && this.state.playback === 2,
                  matchtrack2:
                    this.state.playing === true && this.state.playback === 1.5,
                  matchtrack3:
                    this.state.playing === true && this.state.playback === 1.0,
                  matchtrack4:
                    this.state.playing === true && this.state.playback === 0.75,
                  matchtrack5:
                    this.state.playing === true && this.state.playback === 0.5,
                  matchtrackmatch:
                    this.state.playing === true && this.state.playback === 0.25,
                  matchtrackoff: this.state.playing === false,
                })}
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
                // className="playback"
                className={cx({
                  playback: true,
                  playbackselected: this.state.playback === 2,
                })}
              >
                2
              </div>
              <div
                onClick={() => {
                  this.setPlayback2();
                }}
                // className="playback"
                className={cx({
                  playback: true,
                  playbackselected: this.state.playback === 1.5,
                })}
              >
                1.5
              </div>
              <div
                onClick={() => {
                  this.setPlayback3();
                }}
                // className="playback"
                className={cx({
                  playback: true,
                  playbackselected: this.state.playback === 1.0,
                })}
              >
                1.0
              </div>
              <div
                onClick={() => {
                  this.setPlayback4();
                }}
                // className="playback"
                className={cx({
                  playback: true,
                  playbackselected: this.state.playback === 0.75,
                })}
              >
                .75
              </div>
              <div
                onClick={() => {
                  this.setPlayback5();
                }}
                // className="playback"
                className={cx({
                  playback: true,
                  playbackselected: this.state.playback === 0.5,
                })}
              >
                .5
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              this.setPlaying();
            }}
            className="playbutton"
          >
            {" "}
            <div
              // className="playindon"
              className={cx({
                playindon: this.state.playing === true,
                playindoff: this.state.playing === false,
              })}
            ></div>
          </div>
        </div>
      </>
    );
  }
}
