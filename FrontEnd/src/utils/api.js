import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
axios.defaults.headers.get["Accept"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";

export default {
  login: (credintials, callback) => {
    axios
      .post("/login", credintials)
      .then((res) => {
        if (res.status === 200) {
          if (res.data.token != null) {
            axios.defaults.headers.common["Authorization"] = "Bearer ".concat(
              res.data.token
            );
            localStorage.setItem("token", res.data.token);
          }
        } else {
          if (res.error === "Unauthorized") {
            axios.defaults.headers.common.Authorization = null;
          }
        }
        callback(res);
      })
      .catch((err) => callback(err.response.data));
  },
  isLoggedIn: (callback) => {
    axios.defaults.headers.common["Authorization"] = "Bearer ".concat(
      localStorage.getItem("token")
    );
    axios
      .get("/isLoggedIn", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "logged in") {
          localStorage.setItem("role", res.role);
        }
        callback(res);
      })
      .catch((err) => callback(err.response.status));
  },
  signup: (credintials, callback) => {
    axios
      .post("/signup", credintials)
      .then((res) => callback(res))
      .catch((err) => callback(err.response.data));
  },
  editProfile: (credintials, callback) => {
    axios
      .post("/profileEdit", credintials, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => callback(res))
      .catch((err) => callback(err.response.data));
  },
  getProfile: () => {
    axios
      .get("/profile")
      .then((res) => res)
      .catch((err) => err);
  },
  getEmployees: (callback) => {
    // axios.defaults.headers.common["Authorization"] =
    // );
    let Auth = "Bearer ".concat(localStorage.getItem("token"));
    axios
      .get("/employees", {
        headers: {
          Authorization: Auth,
          "Content-Type": "application/json",
          accept: "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        callback(res);
      })
      .catch((err) => {
        console.log(err);
        callback(err);
      });
  },
  addWorkTimes: (emp_id, workingTimes, callback) => {
    axios.defaults.headers.common["Authorization"] = "Bearer ".concat(
      localStorage.getItem("token")
    );
    workingTimes = workingTimes.employeeShifts.map((shift) => {
      if (shift.fromTime != "0000" && shift.toTime != "0000") {
        return shift;
      }
    });
    workingTimes = workingTimes.filter((n) => n);
    console.log(workingTimes);
    axios
      .post(`/employees/${emp_id}/work_times`, workingTimes)
      .then((res) => {
        console.log(res);
        callback(res);
      })
      .catch((err) => console.log(err));
  },
  makeBooking: (credintials, callback)=>{
    axios
    .post("/bookings/make", credintials, { headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}})
    .then((res) => callback(res))
    .catch((err) => callback(err.response.data));
  },
  getAllBookings: ()=>{
    axios
    .get("/bookings/index")
    .then((res) => res)
    .catch((err) => err);
  },
  deleteBooking: (credintials, callback)=>{
    axios
    .post("/bookings/cancel", credintials, { headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}})
    .then((res) => callback(res))
    .catch((err) => callback(err.response));
  }
};
