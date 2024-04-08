import { React } from "react";
import { Route } from "wouter";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Details from "./pages/Details/Details";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Route component={Home} path="/" />
        <Route component={SearchResults} path="/search/:keyword" />
        <Route component={Details} path="/gif/:id" />
      </section>
    </div>
  );
}

export default App;
