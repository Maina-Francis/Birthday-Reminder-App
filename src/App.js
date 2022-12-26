import React, { useState } from "react";
import { data } from "./data";
import List from "./List";

function App() {
  return (
    <main>
      <section className="container">
        <h3> 0 birthdays today</h3>
        <List />
        <button
          type="button"
          onClick={() => {
            console.log("You clicked Clear all");
          }}
        >
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
