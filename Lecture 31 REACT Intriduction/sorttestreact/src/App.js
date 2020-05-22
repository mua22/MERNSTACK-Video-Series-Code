import React from "react";
import logo from "./logo.svg";
// import "./App.css";

function App() {
  const [persons, setPersons] = React.useState(["Zahid", "Muneeb", "Ali"]);
  return (
    <div className="App">
      <button
        onClick={() => {
          let ps = [...persons];
          ps.sort();
          setPersons(ps);
        }}
      >
        Test Sort
      </button>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>{person}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
