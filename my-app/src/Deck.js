import React from "react";
import "./Deck.css";
import Slider from "rc-slider";
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
           
            width: "400px",
            height: "320px",
            overflow: "hidden",
            backgroundColor: "grey",
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
                  style={{
                    marginTop: "0px",
                    width: "96px",
                    height: "40px",
                  }}
                  onClick={() => {
                    this.props.getNewSong();
                  }}
                >
                  NEXT
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
                style={{
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
                style={{
                  width: "248px",
                  height: "248px",
                  borderRadius: "50%",
                  marginLeft: "78px",
                  marginTop: "-32px",
                  opacity: "10%",
                }}
                onMouseDown={() => {
                  this.onClickMatch();
                  console.log("button on value: ", this.state.playback);
                }}
                onMouseUp={(value) => {
                  this.onReleaseMatch();

                  console.log("button off value: ", this.state.playback);
                }}
              >
                MATCH
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
