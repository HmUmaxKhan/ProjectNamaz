"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Navbar from "../(Shared Components)/Navbar";
import Alert from "../(Shared Components)/Alert";

function Signup() {
  const router = useRouter();

  const [image, setImage] = useState();

  const [alert, setAlert] = useState(null);

  const cardStyle = {
    boxShadow: "0 0 10px 8px rgba(0,0,0,0.1)",
  };

  const [reg, setReg] = useState({
    EmailAddress: "",
    UserName: "",
    Password: "",
  });

  const Change = (e) => {
    setReg({ ...reg, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();

    let response = await fetch("http://localhost:5005/api/auth/reg", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        EmailAddress: reg.EmailAddress,
        Fname: reg.Fname,
        Lname: reg.Lname,
        UserName: reg.UserName,
        Password: reg.Password,
        Contact: reg.Contact,
        CNIC: reg.CNIC,
        Address: reg.Address,
        usertype: "user",
        ProfilePhoto: image,
      }),
    });
    response = await response.json();

    console.log(response);

    setAlert({
      msg: response.Msg,
      type: response.success ? "success" : "danger",
    });

    setTimeout(() => {
      setAlert(null);
    }, 5000);

    if (response.success) {
      setTimeout(() => {
        setAlert(null);
        router.push("/login");
      }, 3000);
    }
  };

  return (
    <div>
      <Navbar />
      <Alert Alert={alert} />
      <div className="container d-flex justify-content-center align-items-center flex-column p-5">
        <div className="card p-4 bg-dark text-white" style={cardStyle}>
          <h3 className=" py-3 text-center">Registration of User</h3>

          <div className="mb-3">
            <label htmlFor="EmailAddress" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="EmailAddress"
              placeholder="name@example.com"
              name="EmailAddress"
              onChange={Change}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="UserName" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="UserName"
              placeholder="Choose a username"
              name="UserName"
              onChange={Change}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="Password"
              placeholder="Enter your password"
              name="Password"
              onChange={Change}
            />
          </div>

          <button
            type="button"
            className="btn btn-success"
            onClick={handleClick}
          >
            Submit
          </button>

          <Link href="/login" className="link  mt-3">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
