import axios from "axios";
const KEY = "AIzaSyCTkiorxlq7xyAEz3Kdu4g2lUu28inPtyk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
