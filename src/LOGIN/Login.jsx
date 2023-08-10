import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import '../LOGIN/Login.css';
import { useContext, useState } from "react";
import { DataParentContext } from '../App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const Context = useContext(DataParentContext);
  const { LoginDetails, setLoginDetails } = Context
  console.log("Context", LoginDetails);
  const navegate = useNavigate();

  const [email, setEmiail] = useState("");
  const [password, setpassword] = useState("");


  const inputEmail = (e) => {
    setEmiail(e.target.value);
    console.log("email", e.target.value)
  }
  const inputPass = (e) => {
    setpassword(e.target.value)
    console.log("pass", e.target.value)
  }

  const LoginData = (e) => {
    e.preventDefault();
    let emailPattern = /^\S+@\S+\.\S+$/;
    let passwordPatern = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/

    if (email === "" && password === "") {
      toast.error("All  input field are  mandatory ...", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

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
      toast.error('Password must be alpha-numric ...',{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
      //setPassword('');
    } else if (email !== localStorage.getItem("email") || password !== localStorage.getItem("password")) {
      toast.error("Your email and password do not match Please try again ...",{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
      //setPassword('');

    } else {
      if (email === localStorage.getItem("email") && password === localStorage.getItem("password")) {
        localStorage.setItem("logIn", true)
        toast.success("Login Successfully daaaaaaa ...", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        let obj = {
          userName: localStorage.getItem("userName"),
          email: localStorage.getItem("email"),
          password: localStorage.getItem("password")

        }
        setLoginDetails(obj)
        navegate('/')
      }

    }
  }

  return (
    <div className="main">
      <div className="LoginCss">
        <h2 style={{ textAlign: "center" }}>Login Here</h2>

        <div className="form_feild" >

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
          <input type="submit" value="Log In" onClick={(e) => LoginData(e)} />
          </div>
          <h3 className="have_an_account">Don't have an account ?<NavLink to="/Signup">  Create an account</NavLink></h3>
          </div>
          </div>
          <p><ToastContainer /></p>
    </div>
  );
};

export default Login;