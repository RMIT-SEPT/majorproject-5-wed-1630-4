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
        if (res.data.token != null) {
          axios.defaults.headers.common["Authorization"] = "Bearer ".concat(
            res.data.token
          );
          localStorage.setItem("token", res.data.token);
        }
        callback(res);
      })
      .catch((err) => callback(err.response.data));
  },
  isLoggedIn: (callback) => {
    axios
      .get("/isLoggedIn")
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "logged in") {
          localStorage.setItem("role", res.role);
        }
        callback(res);
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
