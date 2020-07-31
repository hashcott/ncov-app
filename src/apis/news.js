import axios from "axios";

export default axios.create({
  baseURL: "https://news-ncov-api.herokuapp.com/news",
});
