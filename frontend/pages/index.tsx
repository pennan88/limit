import type { NextPage } from "next";
import Button from "../Components/Button";
import Inputbox from "../Components/Inputbox";

const Home: NextPage = () => {
  return (
    <>
      <Inputbox
        header="Welcome"
        className="inputbox p-2 align-center display-f flex-column justify-space-between"
      >
        <Button
          path="/dashboard"
          className="btn-outlined-cta text-cta text-hover-white mb-1"
        >
          Sign in
        </Button>
        <Button
          path="/register"
          className="btn-outlined-cta text-cta text-hover-white"
        >
          Register
        </Button>
      </Inputbox>
    </>
  );
};

export default Home;
