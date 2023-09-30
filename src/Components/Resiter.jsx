import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { useRef, useState } from "react";
import auth from "../firebase/firebase.config";

const Resiter = () => {
    const [loginError, setLoginError] = useState("");
    const [success, setSuccess] = useState("");
    const emailRef = useRef(null)

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    
        setLoginError("");
        setSuccess("");
    
        if (password.length < 6) {
          setLoginError("Password should be at least 6 characters");
          return;
        } else if (!/[A-Z]/.test(password)) {
          setLoginError("Your password should have at least one upper case characters.");
          return;
        }
        // else if()
    
        signInWithEmailAndPassword(auth, email, password)
          .then((result) => {
            console.log(result.user);
            setSuccess("Login is success");
          })
          .catch((error) => {
            console.error(error);
            setLoginError(error.message);
          });
      }
      const handleForget = () => {
        console.log('hi')
        const email = emailRef.current.value
        if(!email){
            console.log('please give me email')
            return;
        } 
        else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
            console.log('write your, right email ')
            return;
        }
        sendPasswordResetEmail(auth, email)
        .then(
            alert('please check your email')
        )
        .catch(error =>{
            console.error(error, error.message)
        })

      }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
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
                    ref={emailRef}
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
                    type="password"
                    required
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a onClick={handleForget} href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              {loginError && <p className="text-red-800"> {loginError} </p>}
              {success && <p className="text-green-700 text-xl"> {success} </p>}
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Resiter;