import React from "react";
import Todos from "./components/Todos";

const App = () => {
  return (
    <div>
      <Todos items={["Learn React", "Leart TypeScript"]} />
    </div>
  );
};

export default App;
