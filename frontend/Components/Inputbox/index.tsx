import React from "react";

const index = () => {
  return (
    <div className="inputbox">
      <div>Welcome</div>

      <div className="inputbox__fields">
        <input type="text" placeholder="email" />
        <input className="mt-2" placeholder="password" type="text" />
      </div>
      <div className="inputbox__buttons">
        <div className="btn-outlined-cta text-cta text-hover-white mb-1">
          Sign in
        </div>
        <div className="btn-outlined-cta text-cta text-hover-white">
          Register
        </div>
      </div>
    </div>
  );
};

export default index;
