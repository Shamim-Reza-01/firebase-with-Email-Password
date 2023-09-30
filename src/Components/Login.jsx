import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPass, setShowpass] = useState(false);

  const hanldeShow = () => {
    setShowpass(!showPass);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(email, password, accepted);

    setLoginError("");
    setSuccess("");

    if (password.length < 6) {
      setLoginError("Password should be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setLoginError("Your password should have at least one upper case characters.");
      return;
    }
    else if(!accepted){
      setLoginError('Please accept our terms and conditions!')
      return;
  }


    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("Login is success");
        
         // update profile
      //    updateProfile(result.user, {
      //     displayName: name, 
      //     photoURL: "https://example.com/jane-q-user/profile.jpg"
      // })
      // .then( () => console.log('profile updated'))
      // .catch()
        
        
        // send verification email: 
        sendEmailVerification(result.user)
        .then( () =>{
            alert('Please check your email and verify your account')
        })

      })
      .catch((error) => {
        console.error(error);
        setLoginError(error.message);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body ">
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={showPass ? "text" : "password"}
                    required
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />{" "}
                  <span className=" absolute mt-14 ml-56" onClick={hanldeShow}>
                    {showPass ? (
                      <AiFillEyeInvisible></AiFillEyeInvisible>
                    ) : (
                      <AiFillEye></AiFillEye>
                    )}{" "}
                  </span>
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                  <br />
                    <div className="mb-2">
                        <input type="checkbox" name="terms" id="terms" />
                        <label className="ml-2" htmlFor="terms">Accept our <a href="">Terms and Conditions</a></label>
                    </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
              </form>
              {loginError && <p className="text-red-800">{loginError} </p>}
              {success && <p className="text-green-700 text-xl">{success} </p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
