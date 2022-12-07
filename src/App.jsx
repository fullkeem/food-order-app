import { Fragment, useState } from "react";
import Header from "./Layout/Header";

import { Reset } from "styled-reset";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <Reset />
      <Header />
    </Fragment>
  );
}

export default App;
