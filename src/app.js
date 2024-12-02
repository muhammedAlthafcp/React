import React from "react";
import ReactDOM from "react-dom/client";
import { Link, Route, Router } from "wouter"; // Importing Wouter
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";

const Home = () => (
  <div>
    <Header />
    <Body />
  </div>
);
function App() {
  return (
    <Router>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </Router>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
