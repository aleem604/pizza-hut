import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
import Username from "../features/user/Username";

function Home() {
  var username = useSelector(state => state.user.username);

  return (
    <div className="my-10 text-center sm:my-16 leading-loose">
      <h1 className="text-4xl font-semibold mb-2 px-4 pt-2">
        The best pizza.
        
      </h1>
      <h2 className="text-4xl mb-2 text-yellow-400">
        Straight out of the oven, straight to you.
      </h2>
     { !username ? <CreateUser /> : <Button to='/menu' type="primary">Start Ordering, {username}</Button>}
    </div>
  );
}

export default Home;
