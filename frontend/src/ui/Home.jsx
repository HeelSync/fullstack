import { useSelector } from "react-redux";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        HeelSync
        <br />
        <span className="text-yellow-500">On fonam</span>
      </h1>
    </div>
  );
}

export default Home;
