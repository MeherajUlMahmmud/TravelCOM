import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

const Signup = () => {
  const [registerEmail, setRegisterEmail] = useState();
  const [registerName, setRegisterName] = useState();
  const [registerPasseord, setRegisterPassword] = useState();

  // step 3

  const register = async () => {
    console.log("clicked");
    if (!registerEmail) {
      console.log("email field is empty");
    } else if (!registerPasseord) {
      console.log("password field is empty");
    } else if (!registerName) {
      console.log("Name field is empty");
    } else {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPasseord
        );
        console.log(user);
      } catch (error) {
        console.log(error.code);
      }
    }
  };

  return (
    <div className={"containerLogin"}>
      <h1>Sign Up</h1>
      <input
        placeholder="Name"
        onChange={(e) => {
          setRegisterName(e.target.value);
        }}
      />
      <input
        placeholder="Email"
        onChange={(e) => {
          setRegisterEmail(e.target.value);
        }}
      />

      <input
        placeholder="Password"
        onChange={(e) => {
          setRegisterPassword(e.target.value);
        }}
      />

      <button onClick={register}>Create User</button>
    </div>
  );
};

export default Signup;
