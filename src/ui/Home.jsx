import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="my-10 text-center sm:my-16 leading-loose">
      <h1 className="text-4xl font-semibold mb-2 px-4 pt-2">
        The best pizza.
        
      </h1>
      <h2 className="text-4xl mb-2 text-yellow-400">
        Straight out of the oven, straight to you.
      </h2>
      <CreateUser />
    </div>
  );
}

export default Home;
