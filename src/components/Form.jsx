import React from "react";
import Input from "./input.jsx";
function Form(props) {
  return (
    <form className="form">
      {props.check && (
        <div>
          {" "}
          <Input type="text" placeHolder="Username" />
          <Input type="password" placeHolder="Password" />
        </div>
      )}
      {!props.check && (
        <div>
          <Input type="text" placeHolder="Username" />
          <Input type="text" placeHolder="Password" />
          <Input type="text" placeHolder="Confirm Password" />
        </div>
      )}

      <button type="submit">{props.check ? "login" : "Register"}</button>
    </form>
  );
}

export default Form;
