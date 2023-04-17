import { Graph } from "./components/graph";
import { Navbar } from "./components/navbar";

const data = [-0.07, -0.09, 0.2, 0.44, -0.23, 0.08, -0.17, 0.47, -0.36, 0.18];

const App = () => {
  return (
    <>
      <Navbar />
      <Graph data={data} />
    </>
  );
};

export default App;
