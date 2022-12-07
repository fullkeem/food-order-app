import { Fragment, useState } from "react";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";

import { Reset } from "styled-reset";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <Reset />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
