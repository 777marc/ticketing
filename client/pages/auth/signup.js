import { useState } from "react";
import axios from "axios";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("/api/users/signup", {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Sign Up</h2>
      <div className="form-group">
        <lable>Email address</lable>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <lable>Password</lable>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary">Sign Up</button>
    </form>
  );
};
