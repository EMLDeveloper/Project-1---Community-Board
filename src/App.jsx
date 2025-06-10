import React from "react";
import OrgCard from "./components/OrgCard";
import orgs from "./data/orgs";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="title">
        <h1> Engineering & Developer Communities in CA </h1>
        <span className="emoji">💻🌐</span>
      </div>
      <div className="card-grid">
        {orgs.map((org, idx) => (
          <OrgCard
            key={idx}
            name={org.name}
            location={org.location}
            focus={org.focus}
            link={org.link}
            image={org.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
