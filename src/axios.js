import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-c9224.cloudfunctions.net/api", // THE API(cloud function) URL
});

export default instance;

// http://localhost:5001/clone-c9224/us-central1/api
