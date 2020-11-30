import axios from "axios";
const KEY = "AIzaSyBu-6kX7YwQFZP-eD4IpAnh7eNyVUKuuj0";

// IMM 1: AIzaSyC4z0d_zEWPCY11evNr5BR1DWKvbAoYjhI
// IMM 2: AIzaSyBu-6kX7YwQFZP-eD4IpAnh7eNyVUKuuj0
// IMM 3: AIzaSyCt7qoyvvta_jxGoubED16UVW1ISZKK0VM
// IMM 4: AIzaSyD4BPVrWaz5d5mBif9TmAkUYLNDzWArOVE

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 7,
    key: KEY,
  },
});
