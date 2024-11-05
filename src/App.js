import React from "react";
import PhoneList from "./components/PhoneList";
import TabletList from "./components/TabletList";

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Phone and Tablet Store</h1>
      <PhoneList />
      <TabletList />
    </div>
  );
}

export default App;
