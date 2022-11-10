import { useState } from "react";

export default function Login({ getUserDetail }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email + "--" + password);

    const data = await fetch("https://staging-api.tracknerd.io/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: email, password: password })
    });

    const userData = await data.json();
    const { token } = userData;
    if (token) {
      getUserDetail(userData);
      console.log(userData);
    } else {
      alert("Incorrect Email OR Password");
      event.target.reset();
    }
  };
  return (
    <div className="mx-3">
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="my-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
