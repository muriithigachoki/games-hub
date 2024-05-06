import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "64533506bc084723b65255a7d36ea951",
  },
});
