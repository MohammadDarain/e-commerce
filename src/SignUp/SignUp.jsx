
import { NavLink } from "react-router-dom";
import '.././LOGIN/Login.css'
import { useState } from "react";
// import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  //const navegate = useNavigate();
  const [userName, setUsername] = useState('');
  const [email, setEmiail] = useState("");
  const [password, setpassword] = useState("");

  const danish = (e) => {
    console.log("danish chala", e.target.value)
    setUsername(e.target.value);
  }
  const inputEmail = (e) => {
    setEmiail(e.target.value);
    console.log("email", e.target.value)
  }
  const inputPass = (e) => {
    setpassword(e.target.value)
    console.log("pass", e.target.value)
  }
  const details = () => {


    let emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    let passwordPatern = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/

    if (email === "" && password === "" && userName === "") {
      toast.error("All  input field are  mandatory ...", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    } else if (userName === '') {
      toast.error('Please enter username ...', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    } else if (email === '') {
      toast.error('Please enter Email ...', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    } else if (!email.match(emailPattern)) {
      toast.error('Please enter valid email ...', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    } else if (password === "") {
      toast.error('Please enter Password ...', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    } else if (!password.match(passwordPatern)) {
      toast.error('Password must be alpha-numric ...', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    }else if (localStorage.getItem("email")===email) {
      toast.error('email  already exists', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
      setUsername("");
      setEmiail("");
      setpassword("");
    }
     else {
      localStorage.setItem("userName", userName)
      localStorage.setItem("email", email)
      localStorage.setItem("password", password)
      toast.success("Registered Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      });
      //navegate('/Login')
      setUsername("");
      setEmiail("");
      setpassword("");
    }
  }

  return (
    <div className="main">
      <div className="LoginCss">
        <h2 style={{ textAlign: "center" }}>Signup Here</h2>
        <p><ToastContainer /></p>
        <div className="form_feild" >
          <div className="input_feild">
            <input
              type="text"
              name="Username"
              value={userName}
              placeholder="Username"
              autoComplete="off"
              onChange={(e) => danish(e)}
              required
            />
          </div>
          <div className="input_feild">
            <input
              type="email"
              name="Email"
              placeholder="Email"
              value={email}
              autoComplete="off"
              onChange={inputEmail}
              required
            />
          </div>
          <div className="input_feild">
            <input
              type="password"
              placeholder="password"
              name="password"
              value={password}
              required
              autoComplete="off"
              onChange={inputPass}
            />
          </div>
          <div style={{ textAlign: "center", marginTop: "-25px" }}>
            <input type="submit" value="Sign up" onClick={(e) => details(e)} />
          </div>
          <h3 className="have_an_account">Already have an account ? <NavLink to="/Login"> Please Login </NavLink></h3>
        </div>
      </div>
    </div>
  );
};

export default SignUp;