import React from "react";
import Main from "./pages/Index";
import Provider from "./context/Provider";

const App = () => {
  return (
    <Provider>
      <main>
        <Main />
      </main>
    </Provider>
  );
};

export default App;
