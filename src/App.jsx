import Form from "./components/Form";
function App() {
  return (
    <div className="container mx-auto">
      <header className="py-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center">
          <h1 className="font-bold text-2xl text-yellow-500 mb-10">STARWARS</h1>
        </div>
      </header>
      <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto mb-10">
        Crea tu nave de
        <span className="text-yellow-600"> StarWars</span>
      </h1>
      <Form />
    </div>
  );
}

export default App;
