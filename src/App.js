import React from 'react';
import Main from "./components/Main/Main";
import MyContext from "./components/Context";

function App() {
    return (
        <div className="App">
          <MyContext.Provider value={'Ivan'}>
            <Main />
          </MyContext.Provider>
        </div>
    );
}

export default App
