import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
axios.defaults.headers.get["Accept"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export default {
  login: (credintials, callback) => {
    axios
      .post("/login", credintials)
      .then((res) => {
        if (res.jwt != null) {
          axios.defaults.headers.common["Authorization"] = res.jwt;
        }
        callback(res);
      })
      .catch((err) => callback(err.response.data));
  },
  isLoggedIn: () => {
    axios
      .get("/isLoggedIn")
      .then((res) => {
        if (res.status === "logged in") {
          localStorage.setItem("role", res.role);
        }
        return res;
      })
      .catch((err) => err);
  },
  signup: (credintials, callback) => {
    axios
      .post("/signup", credintials)
      .then((res) => callback(res))
      .catch((err) => callback(err.response.data));
  },
};
