import React from "react";

class Search extends React.Component {
  handleChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.term);
  };

  render() {
    return (
      <>
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
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              name="video-search"
              type="text"
              placeholder="search..."
              style={{
                width: "396px",
                height: "80px",
                fontSize: "larger",
                filter: "invert(100%)",
              }}
            ></input>
          </form>
        </div>
      </>
    );
  }
}
export default Search;
