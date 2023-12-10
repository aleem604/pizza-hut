import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div>
      <h1 className="text-xl font-semibold text-center mb-4 px-4 py-4">
        The best pizza.
        <br />
        <span className="text-yellow-500">
        Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
